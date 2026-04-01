import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRealtime } from '../context/RealtimeContext';

export default function Admin() {
    const { user, logout } = useAuth();
    const { auctionState, teamData, startBid, closeBid, cancelBid, socket, resetAll } = useRealtime();

    const [sets, setSets] = useState([]);
    const [selectedSet, setSelectedSet] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/api/problems/sets')
            .then(res => res.json())
            .then(data => {
                if (data.success) setSets(data.sets);
            });
    }, []);


    const handleStartAuction = () => {
        if (selectedSet) startBid(selectedSet);
    };

    const handleAssignWinner = () => {
        if (socket) socket.emit('admin_assign_winner');
    };

    const getAssignedTeamForSet = (setId) => {
        for (const [teamId, data] of Object.entries(teamData)) {
            if (data.assignedSets.includes(setId)) {
                return teamId;
            }
        }
        return null;
    };

    return (
        <div className="min-h-screen p-8 bg-[#0a0a10] text-[#f3f4f6]">
            <header className="flex justify-between items-center mb-12 border-b border-neutral-800 pb-4">
                <h1 className="text-3xl font-bold text-white">Admin <span className="text-[#aa3bff]">Dashboard</span></h1>
                <div className="flex items-center gap-4">
                    <span className="text-neutral-400 text-sm">Logged in as {user.id}</span>
                    <button 
                        onClick={() => {
                            if (window.confirm("Are you sure you want to wipe all team balances, assigned sets, and current bids? This cannot be undone.")) {
                                resetAll();
                            }
                        }} 
                        className="px-4 py-2 border border-red-500/50 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg text-sm transition-colors font-bold"
                    >
                        Reset All
                    </button>
                    <button onClick={logout} className="px-4 py-2 border border-neutral-700 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-white">Logout</button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#16171d] border border-[#2e303a] p-6 rounded-2xl shadow-lg flex flex-col">
                    <h2 className="text-xl font-bold mb-4 text-[#aa3bff]">Auction Control</h2>

                    <div className="space-y-4 flex-1">
                        <div>
                            <label className="text-sm text-neutral-400 block mb-2">Select Problem Set</label>
                            <select
                                value={selectedSet}
                                onChange={(e) => setSelectedSet(e.target.value)}
                                disabled={auctionState?.status !== 'idle'}
                                className="w-full bg-[#1f2028] border border-neutral-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#aa3bff]"
                            >
                                <option value="">-- Choose Set --</option>
                                {sets.map(s => {
                                    const assignedTo = getAssignedTeamForSet(s.setId);
                                    const label = assignedTo 
                                        ? `${s.title} - ASSIGNED TO ${assignedTo.toUpperCase()}`
                                        : `${s.title} (${s.problems.length} problems) - AVAILABLE`;
                                    
                                    return (
                                        <option key={s.setId} value={s.setId} disabled={!!assignedTo}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        {!auctionState || auctionState.status === 'idle' ? (
                            <button
                                onClick={handleStartAuction}
                                disabled={!selectedSet}
                                className="w-full py-4 mt-6 bg-[#aa3bff] hover:bg-[#912ee6] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(170,59,255,0.3)] disabled:opacity-50"
                            >
                                Start Live Auction
                            </button>
                        ) : auctionState.status === 'bidding' ? (
                            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl space-y-4 mt-6">
                                <div className="text-center">
                                    <p className="text-blue-400 text-sm uppercase tracking-wider font-semibold">Live Bidding - Set {auctionState.currentSetId}</p>
                                    <p className="text-3xl font-bold text-[#f6d365] mt-2">{auctionState.currentHighestBid} 🪙</p>
                                    <p className="text-sm text-neutral-400 mt-1">Highest: {auctionState.currentHighestTeam || 'None'}</p>
                                </div>
                                <div className="space-y-2">
                                    <button
                                        onClick={closeBid}
                                        className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors"
                                    >
                                        Close Bid (Finalize)
                                    </button>
                                    <button
                                        onClick={cancelBid}
                                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold rounded-xl transition-colors text-sm"
                                    >
                                        Cancel & Discard Auction
                                    </button>
                                </div>
                            </div>
                        ) : auctionState.status === 'closed' ? (
                            <div className={`${auctionState.currentHighestTeam ? 'bg-green-500/10 border-green-500/20' : 'bg-yellow-500/10 border-yellow-500/20'} p-4 border rounded-xl space-y-4 mt-6 text-center`}>
                                <p className={`${auctionState.currentHighestTeam ? 'text-green-400' : 'text-yellow-400'} font-semibold mb-2`}>
                                    Bid Closed
                                </p>
                                <p className="text-neutral-300">
                                    {auctionState.currentHighestTeam 
                                        ? <>Winner: <strong>{auctionState.currentHighestTeam}</strong> for {auctionState.currentHighestBid} coins.</>
                                        : "No bids were placed on this set."}
                                </p>
                                
                                <div className="space-y-2 mt-4">
                                    {auctionState.currentHighestTeam && (
                                        <button
                                            onClick={handleAssignWinner}
                                            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors"
                                        >
                                            Assign Set to Winner
                                        </button>
                                    )}
                                    <button
                                        onClick={cancelBid}
                                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold rounded-xl transition-colors text-sm"
                                    >
                                        Discard Auction & Return
                                    </button>
                                </div>
                            </div>
                        ) : null}

                    </div>
                </div>

                <div className="bg-[#16171d] border border-[#2e303a] p-6 rounded-2xl shadow-lg md:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-[#4facfe]">Live Leaderboard</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-neutral-500 border-b border-neutral-800 text-sm tracking-wider uppercase">
                                    <th className="pb-3 font-medium px-4">Team</th>
                                    <th className="pb-3 font-medium px-4">Currency</th>
                                    <th className="pb-3 font-medium px-4">Points</th>
                                    <th className="pb-3 font-medium px-4">Assigned Sets</th>
                                    <th className="pb-3 font-medium px-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(teamData)
                                    .sort(([, a], [, b]) => (b.points || 0) - (a.points || 0) || (b.currency || 0) - (a.currency || 0))
                                    .map(([teamId, data]) => (
                                        <tr key={teamId} className="border-b border-neutral-800/50 hover:bg-[#1f2028] transition-colors">
                                            <td className="py-4 px-4 font-semibold text-white capitalize">{teamId}</td>
                                            <td className="py-4 px-4 text-[#f6d365] font-mono">{data.currency} 🪙</td>
                                            <td className="py-4 px-4 text-[#4facfe] font-bold">{data.points || 0} pt</td>
                                            <td className="py-4 px-4 text-neutral-400 text-sm">
                                                {data.assignedSets && data.assignedSets.length > 0 ? data.assignedSets.join(', ') : 'None'}
                                            </td>
                                            <td className="py-4 px-4"><span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded text-xs">{data.status}</span></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
