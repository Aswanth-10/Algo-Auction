import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Mock API call
            const res = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();
            if (data.success) {
                login(data.user);
                navigate(`/${data.user.role}`);
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Server error. Is the backend running?');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#08060d]">
            <div className="w-full max-w-md p-8 space-y-8 bg-[#16171d] border border-[rgba(170,59,255,0.2)] rounded-2xl shadow-[0_0_40px_rgba(170,59,255,0.1)]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
                        Algo <span className="text-[#aa3bff]">Auction</span>
                    </h1>
                    <p className="text-neutral-400">Sign in to your team or admin account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 mt-8">
                    {error && <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">{error}</div>}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300">Team ID / Admin Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 bg-[#1f2028] border border-neutral-800 rounded-xl text-white outline-none focus:border-[#aa3bff] focus:ring-1 focus:ring-[#aa3bff] transition-all"
                            placeholder="e.g., teamA"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-[#1f2028] border border-neutral-800 rounded-xl text-white outline-none focus:border-[#aa3bff] focus:ring-1 focus:ring-[#aa3bff] transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-[#aa3bff] hover:bg-[#912ee6] text-white font-medium rounded-xl transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Authenticating...' : 'Enter Arena'}
                    </button>
                </form>
            </div>
        </div>
    );
}
