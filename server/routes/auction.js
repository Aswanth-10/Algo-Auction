const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, '../auction_data.json');

const defaultAuctionState = {
    sessionId: 'session_1',
    currentSetId: null,
    status: 'idle', 
    currentHighestBid: 0,
    currentHighestTeam: null,
    biddingHistory: []
};

let auctionState = fs.existsSync(STORAGE_PATH) 
    ? JSON.parse(fs.readFileSync(STORAGE_PATH, 'utf-8')) 
    : defaultAuctionState;

// Return current auction state
router.get('/state', (req, res) => {
    res.json({ success: true, state: auctionState });
});

module.exports = {
    router,
    getAuctionState: () => auctionState,
    setAuctionState: (newState) => { 
        auctionState = { ...auctionState, ...newState }; 
        fs.writeFileSync(STORAGE_PATH, JSON.stringify(auctionState, null, 2));
    }
};
