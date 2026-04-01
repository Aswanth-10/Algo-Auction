import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const RealtimeContext = createContext();

export const useRealtime = () => useContext(RealtimeContext);

export const RealtimeProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [auctionState, setAuctionState] = useState(null);

    const [teamData, setTeamData] = useState({});

    useEffect(() => {
        const newSocket = io('http://localhost:5001');
        setSocket(newSocket);

        newSocket.on('auction_update', (state) => {
            setAuctionState(state);
        });

        newSocket.on('team_data_update', (data) => {
            setTeamData(data);
        });

        return () => newSocket.close();
    }, []);

    const placeBid = (teamId, bidAmount) => {
        if (socket) {
            socket.emit('team_place_bid', { teamId, bidAmount });
        }
    };

    const startBid = (setId) => {
        if (socket) {
            socket.emit('admin_start_bid', { setId });
        }
    };

    const closeBid = () => {
        if (socket) {
            socket.emit('admin_close_bid');
        }
    };

    const cancelBid = () => {
        if (socket) {
            socket.emit('admin_cancel_bid');
        }
    };

    const updateScore = (teamId, problemId, points) => {
        if (socket) {
            socket.emit('team_update_score', { teamId, problemId, points });
        }
    };

    const resetAll = () => {
        if (socket) {
            socket.emit('admin_reset_all');
        }
    };

    return (
        <RealtimeContext.Provider value={{ socket, auctionState, teamData, placeBid, startBid, closeBid, cancelBid, updateScore, resetAll }}>
            {children}
        </RealtimeContext.Provider>
    );
};
