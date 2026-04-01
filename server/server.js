require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');

const { router: authRoutes } = require('./routes/auth');
const { router: problemRoutes } = require('./routes/problems');
const { router: auctionRoutes, getAuctionState, setAuctionState } = require('./routes/auction');
const submissionRoutes = require('./routes/submissions');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/auction', auctionRoutes);
app.use('/api/submissions', submissionRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Real-time Dashboard state (Initialized from auth routes)
const { users } = require('./routes/auth');
const TEAM_DATA_PATH = path.join(__dirname, 'team_data.json');
let teamData = {};

function resetTeamData() {
    teamData = {};
    users.filter(u => u.role === 'team').forEach(u => {
        teamData[u.id] = { 
            name: u.name,
            currency: u.currency, 
            points: u.points, 
            status: 'Active', 
            assignedSets: [],
            problemScores: {}
        };
    });
    saveTeamData();
}

if (fs.existsSync(TEAM_DATA_PATH)) {
    teamData = JSON.parse(fs.readFileSync(TEAM_DATA_PATH, 'utf-8'));
} else {
    resetTeamData();
}

function saveTeamData() {
    fs.writeFileSync(TEAM_DATA_PATH, JSON.stringify(teamData, null, 2));
}


// Socket.io for Real-time Auction Sync
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Send current state on connection
    socket.emit('auction_update', getAuctionState());
    socket.emit('team_data_update', teamData);

    socket.on('admin_start_bid', (data) => {
        setAuctionState({ status: 'bidding', currentSetId: data.setId, currentHighestBid: 0, currentHighestTeam: null, biddingHistory: [] });
        io.emit('auction_update', getAuctionState());
    });

    socket.on('team_place_bid', (data) => {
        const state = getAuctionState();
        if (state.status === 'bidding' && data.bidAmount > state.currentHighestBid) {
            if (teamData[data.teamId]) {
                const team = teamData[data.teamId];
                if (team.assignedSets.length >= 3) {
                    console.log(`Team ${data.teamId} attempted to bid but is capped at 3 sets.`);
                    return;
                }
                if (team.currency >= data.bidAmount) {
                    const newHistory = [...state.biddingHistory, { teamId: data.teamId, amount: data.bidAmount, time: Date.now() }];
                    setAuctionState({ currentHighestBid: data.bidAmount, currentHighestTeam: data.teamId, biddingHistory: newHistory });
                    io.emit('auction_update', getAuctionState());
                }
            }
        }
    });

    socket.on('admin_close_bid', () => {
        setAuctionState({ status: 'closed' });
        io.emit('auction_update', getAuctionState());
    });

    socket.on('admin_assign_winner', () => {
        const state = getAuctionState();
        if (state.currentHighestTeam) {
            // Deduct currency
            if (teamData[state.currentHighestTeam]) {
                teamData[state.currentHighestTeam].currency -= state.currentHighestBid;
                teamData[state.currentHighestTeam].assignedSets.push(state.currentSetId);
                saveTeamData();
            }

            io.emit('auction_won', { teamId: state.currentHighestTeam, setId: state.currentSetId });
            io.emit('team_data_update', teamData);

            // Reset auction
            setAuctionState({ status: 'idle', currentSetId: null, currentHighestBid: 0, currentHighestTeam: null, biddingHistory: [] });
            io.emit('auction_update', getAuctionState());
        }
    });

    socket.on('admin_cancel_bid', () => {
        setAuctionState({ status: 'idle', currentSetId: null, currentHighestBid: 0, currentHighestTeam: null, biddingHistory: [] });
        io.emit('auction_update', getAuctionState());
    });


    socket.on('team_update_score', (data) => {
        // data: { teamId, problemId, points }
        if (teamData[data.teamId]) {
            const team = teamData[data.teamId];
            if (!team.problemScores) team.problemScores = {};
            
            // Only update if new score is higher
            const currentBest = team.problemScores[data.problemId] || 0;
            if (data.points > currentBest) {
                team.problemScores[data.problemId] = data.points;
                
                // Recalculate total points
                team.points = Object.values(team.problemScores).reduce((sum, score) => sum + score, 0);
                saveTeamData();
                io.emit('team_data_update', teamData);
            }
        }
    });

    socket.on('admin_reset_all', () => {
        setAuctionState({ status: 'idle', currentSetId: null, currentHighestBid: 0, currentHighestTeam: null, biddingHistory: [] });
        resetTeamData();
        io.emit('auction_update', getAuctionState());
        io.emit('team_data_update', teamData);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = 5001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
