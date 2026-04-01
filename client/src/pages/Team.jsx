import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRealtime } from '../context/RealtimeContext';
import ProblemWorkspace from '../components/ProblemWorkspace';

export default function Team() {
    const { user, logout } = useAuth();
    const { auctionState, teamData, placeBid, socket } = useRealtime();
    const myData = teamData[user.id] || { currency: user.currency, points: user.points };
    const [assignedProblems, setAssignedProblems] = useState([]);
    const [auctionProblems, setAuctionProblems] = useState([]);
    const [activeProblem, setActiveProblem] = useState(null);
    const [selectedSetTab, setSelectedSetTab] = useState('auction'); // 'auction' or 'set1', 'set2', etc.
    const [hasLoadedInitial, setHasLoadedInitial] = useState(false);

    // Initial load of assigned problems
    useEffect(() => {
        if (myData && myData.assignedSets && !hasLoadedInitial) {
            const allAssignedSetIds = myData.assignedSets;
            if (allAssignedSetIds.length > 0) {
                fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/problems`)
                    .then(r => r.json())
                    .then(pData => {
                        if (pData.success) {
                            // Find all sets to know which problems belong to which assigned set
                            fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/problems/sets`)
                                .then(rs => rs.json())
                                .then(sData => {
                                    if (sData.success) {
                                        const problemIds = sData.sets
                                            .filter(s => allAssignedSetIds.includes(s.setId))
                                            .flatMap(s => s.problems.map(p => p.id));
                                        const problems = pData.problems.filter(p => problemIds.includes(p.id));
                                        setAssignedProblems(problems);
                                        if (problems.length > 0 && !activeProblem) {
                                            setActiveProblem(problems[0]);
                                        }
                                        setHasLoadedInitial(true);
                                    }
                                });
                        }
                    });
            } else {
                setHasLoadedInitial(true);
            }
        }
    }, [myData, hasLoadedInitial]);
    // Auto-switch to auction view when new auction starts
    useEffect(() => {
        if (auctionState?.status === 'bidding') {
            setSelectedSetTab('auction');
        }
    }, [auctionState?.status]);

    // Fetch auction problems reactively based on auctionState
    useEffect(() => {
        if (auctionState && (auctionState.status === 'bidding' || auctionState.status === 'closed') && auctionState.currentSetId) {
            fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/problems/sets/${auctionState.currentSetId}`)
                .then(res => res.json())
                .then(problemsForSet => {
                    if (Array.isArray(problemsForSet)) {
                        setAuctionProblems(problemsForSet.filter(ap => !assignedProblems.some(p => p.id === ap.id)));
                        // Automatically switch to first preview problem if no problem is selected
                        setActiveProblem(prev => prev || problemsForSet[0]);
                    }
                })
                .catch(err => console.error("Could not fetch auction problems:", err));
        } else {
            setAuctionProblems([]);
        }
    }, [auctionState?.currentSetId, auctionState?.status, assignedProblems]);

    useEffect(() => {
        if (socket) {
            socket.on('auction_won', (data) => {
                if (data.teamId === user.id) {
                    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/problems/sets/${data.setId}`)
                        .then(res => res.json())
                        .then(problemsForSet => {
                            if (Array.isArray(problemsForSet)) {
                                setAssignedProblems(prev => {
                                    const existingIds = prev.map(p => p.id);
                                    const newOnes = problemsForSet.filter(p => !existingIds.includes(p.id));
                                    return [...prev, ...newOnes];
                                });
                                if (problemsForSet.length > 0) setActiveProblem(problemsForSet[0]);
                            }
                        });
                }
            });
        }
    }, [socket, user.id]);

    const handleBid = (amount) => {
        placeBid(user.id, amount);
    };

    return (
        <div className="min-h-screen p-8 bg-[#0a0a10]">
            <header className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-[#aa3bff] to-[#4facfe] bg-clip-text text-transparent">
                        {user.name} Workspace
                    </h1>
                    <p className="text-neutral-400 mt-1">
                        <span className="text-white bg-[#1f2028] px-3 py-1 rounded-full text-sm border border-neutral-800 mr-3">
                            Balance: <span className="text-[#f6d365] font-bold">{myData.currency} 🪙</span>
                        </span>
                        <span className="text-white bg-[#1f2028] px-3 py-1 rounded-full text-sm border border-neutral-800">
                            Points: <span className="text-[#4facfe] font-bold">{myData.points}</span>
                        </span>
                    </p>
                </div>
                <button onClick={logout} className="px-5 py-2.5 bg-[#16171d] border border-neutral-700 hover:border-[#aa3bff] rounded-xl text-sm transition-colors text-white font-medium">
                    Disconnect
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Column - Navigation & Auction */}
                <div className="space-y-6 lg:col-span-1">
                    
                    {/* My Problem Sets Navigation */}
                    <div className="bg-[#16171d] border border-[#2e303a] p-5 rounded-2xl shadow-lg flex flex-col">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <span className="text-[#aa3bff]">📚</span> My Sets
                        </h2>
                        {myData.assignedSets && myData.assignedSets.length > 0 ? (
                            <div className="space-y-2">
                                {myData.assignedSets.map(setId => (
                                    <button 
                                        key={setId}
                                        onClick={() => {
                                            setSelectedSetTab(setId);
                                            const firstProb = assignedProblems.find(p => p.setId === setId);
                                            if (firstProb) setActiveProblem(firstProb);
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold border ${selectedSetTab === setId ? 'bg-[#1f2028] border-[#aa3bff] text-white shadow-[0_0_15px_rgba(170,59,255,0.15)]' : 'bg-transparent border-transparent text-neutral-400 hover:text-white hover:bg-[#1f2028] hover:border-neutral-800'}`}
                                    >
                                        Set {setId.replace('set', '')}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-neutral-500 italic p-3 bg-neutral-900/50 rounded-xl border border-neutral-800/50">No sets assigned yet.</p>
                        )}
                    </div>

                    {/* Live Auction Panel */}
                    <div 
                        className={`bg-[#16171d] border p-6 rounded-2xl shadow-lg relative overflow-hidden transition-all ${selectedSetTab === 'auction' ? 'border-[#4facfe] shadow-[0_0_20px_rgba(79,172,254,0.15)]' : 'border-[#2e303a] opacity-80 hover:opacity-100'} ${(!auctionState || auctionState.status === 'idle') ? '' : 'cursor-pointer'}`}
                        onClick={() => {
                            if (auctionState && auctionState.status !== 'idle') {
                                setSelectedSetTab('auction');
                                setActiveProblem(auctionProblems[0] || null);
                            }
                        }}
                    >
                        {(auctionState?.status === 'bidding' || auctionState?.status === 'closed') && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#aa3bff] to-[#4facfe]"></div>
                        )}
                        <h2 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <span className="text-[#4facfe]">⚖️</span> Live Auction
                            {(auctionState?.status === 'bidding' || auctionState?.status === 'closed') && (
                                <span className="flex h-3 w-3 relative ml-auto">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            )}
                        </h2>

                        {!auctionState || auctionState.status === 'idle' ? (
                            <div className="py-6 text-center text-neutral-500 animate-pulse border-2 border-dashed border-neutral-800 rounded-xl">
                                Waiting for Admin...
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                                    <h3 className="text-blue-400 font-semibold mb-1">New Set Up for Auction!</h3>
                                    <p className="text-xs text-blue-200">Set ID: {auctionState.currentSetId}</p>
                                </div>

                                <div className="flex flex-col gap-1 p-3 bg-neutral-800/50 rounded-lg">
                                    <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Highest Bid</span>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-2xl font-bold text-[#f6d365]">{auctionState.currentHighestBid} 🪙</span>
                                        <span className="text-xs text-neutral-400">{auctionState.currentHighestTeam || 'No bids yet'}</span>
                                    </div>
                                </div>

                                {auctionState.status === 'bidding' && (
                                    <div className="flex flex-col gap-2 mt-2" onClick={e => e.stopPropagation()}>
                                        {myData.assignedSets?.length >= 3 ? (
                                            <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-center">
                                                <p className="text-red-400 font-bold text-xs">LIMIT REACHED (3/3)</p>
                                                <p className="text-[10px] text-neutral-500 mt-1">You cannot bid on more sets.</p>
                                            </div>
                                        ) : (
                                            (() => {
                                                const nextBid = auctionState.currentHighestBid === 0 ? 100 : auctionState.currentHighestBid + 50;
                                                return (
                                                    <button 
                                                        onClick={() => handleBid(nextBid)} 
                                                        disabled={nextBid > myData.currency}
                                                        className="w-full py-3 bg-[#4facfe] disabled:opacity-30 text-black font-bold rounded-lg hover:bg-[#3d98eb] transition-all shadow-[0_0_15px_rgba(79,172,254,0.3)] active:scale-[0.98]"
                                                    >
                                                        PLACE BID ({nextBid} 🪙)
                                                    </button>
                                                );
                                            })()
                                        )}
                                    </div>
                                )}

                                <div className="mt-4 max-h-40 overflow-y-auto space-y-2 text-sm border-t border-neutral-800 pt-4 custom-scrollbar">
                                    {auctionState.biddingHistory?.slice().reverse().map((bid, i) => (
                                        <div key={i} className={`flex justify-between items-center px-3 py-2 rounded ${i === 0 ? 'bg-neutral-800/80 text-white' : 'text-neutral-400'}`}>
                                            <span className="font-medium">{bid.teamId}</span>
                                            <span className="text-[#f6d365]">{bid.amount} 🪙</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Live Leaderboard/Ranking */}
                    <div className="bg-[#16171d] border border-[#2e303a] p-5 rounded-2xl shadow-lg">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-[#4facfe]">🏆</span> Live Ranking
                        </h2>
                        <div className="space-y-3">
                            {Object.entries(teamData)
                                .sort(([, a], [, b]) => (b.points || 0) - (a.points || 0) || (b.currency || 0) - (a.currency || 0))
                                .map(([teamId, data], idx) => {
                                    const isMe = teamId === user.id;
                                    return (
                                        <div 
                                            key={teamId} 
                                            className={`flex items-center justify-between p-3 rounded-xl border ${isMe ? 'bg-[#4facfe]/10 border-[#4facfe]/30' : 'bg-[#1f2028] border-neutral-800'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ${idx === 0 ? 'bg-yellow-500 text-black' : idx === 1 ? 'bg-gray-400 text-black' : 'bg-neutral-700 text-white'}`}>
                                                    {idx + 1}
                                                </span>
                                                <span className={`text-sm font-semibold capitalize ${isMe ? 'text-white' : 'text-neutral-400'}`}>
                                                    {teamId} {isMe && '(You)'}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs font-bold text-[#4facfe]">{data.points || 0} pts</div>
                                                <div className="text-[10px] text-neutral-500">{data.currency} 🪙</div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* Right Column - Code Workspace & Problem List */}
                <div className="lg:col-span-3 bg-[#16171d] border border-[#2e303a] rounded-2xl shadow-lg flex flex-col h-[calc(100vh-140px)] overflow-hidden">
                    <div className="flex bg-[#1f2028] border-b border-[#2e303a] min-h-[58px]">
                        {selectedSetTab === 'auction' ? (
                            auctionProblems.length === 0 ? (
                                <div className="p-4 flex-1 text-sm text-neutral-400 italic">No problems currently up for auction. Win this set to unlock coding.</div>
                            ) : (
                                <div className="flex overflow-x-auto custom-scrollbar w-full">
                                    {auctionProblems.map(p => (
                                        <button
                                            key={p.id + '_preview'}
                                            onClick={() => setActiveProblem(p)}
                                            className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-r border-[#2e303a] outline-none transition-colors ${activeProblem?.id === p.id ? 'bg-indigo-900/20 text-[#a78bfa] border-b-2 border-b-[#a78bfa]' : 'text-neutral-500 hover:text-white hover:bg-neutral-800/50'}`}
                                        >
                                            <span className="text-xs font-bold text-[#a78bfa] mr-2">[Auction]</span>
                                            {p.title}
                                        </button>
                                    ))}
                                </div>
                            )
                        ) : (
                            assignedProblems.filter(p => p.id.startsWith('S' + selectedSetTab.replace('set', ''))).length === 0 ? (
                                <div className="p-4 flex-1 text-sm text-neutral-400">No problems found for this set.</div>
                            ) : (
                                <div className="flex overflow-x-auto custom-scrollbar w-full">
                                    {assignedProblems.filter(p => p.id.startsWith('S' + selectedSetTab.replace('set', ''))).map(p => (
                                        <button
                                            key={p.id}
                                            onClick={() => setActiveProblem(p)}
                                            className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-r border-[#2e303a] outline-none transition-colors ${activeProblem?.id === p.id ? 'bg-[#16171d] text-[#4facfe] border-b-2 border-b-[#4facfe]' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'}`}
                                        >
                                            {p.title}
                                        </button>
                                    ))}
                                </div>
                            )
                        )}
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <ProblemWorkspace 
                            problem={activeProblem} 
                            isPreview={activeProblem && !assignedProblems.some(p => p.id === activeProblem.id)} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
