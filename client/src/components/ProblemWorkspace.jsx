import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useAuth } from '../context/AuthContext';
import { useRealtime } from '../context/RealtimeContext';

export default function ProblemWorkspace({ problem, isPreview = false }) {
    const { user } = useAuth();
    const { updateScore } = useRealtime();
    const [code, setCode] = useState('// Write your solution here\n');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);

    if (!problem) {
        return (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-neutral-500 bg-[#16171d] rounded-bl-2xl rounded-br-2xl">
                <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p>Win an auction to unlock coding problems.</p>
            </div>
        );
    }

    const handleRun = async (submitType) => {
        setLoading(true);
        try {
            // If submit, use all test cases (visible + hidden)
            // In a production app, the backend should fetch test cases based on problemId to prevent leaking.
            // For this version, we'll assume the problem object has both if it's assigned to the team.
            const res = await fetch('http://localhost:5001/api/submissions/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language,
                    sourceCode: code,
                    problemId: problem.id,
                    teamId: user.id,
                    submitType
                })
            });
            const data = await res.json();
            setOutput(data);

            if (submitType === 'submit' && data.success && data.totalPoints > 0) {
                updateScore(user.id, problem.id, data.totalPoints);
            }
        } catch (err) {
            setOutput({ error: 'Execution failed.' });
        }
        setLoading(false);
    };

    return (
        <div className="flex h-full min-h-[600px] flex-col lg:flex-row border-t border-[#2e303a]">
            {/* Problem Description Panel */}
            <div className="w-full lg:w-1/3 border-r border-[#2e303a] bg-[#16171d] flex flex-col pt-0">
                <div className="p-4 border-b border-[#2e303a] bg-[#1f2028]">
                    <h2 className="font-bold text-white text-lg">{problem.title}</h2>
                    <div className="flex gap-2 mt-2">
                        <span className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded">
                            Points: {problem.visibleTests?.[0]?.points || 0} per case
                        </span>
                        {problem.difficulty && (
                            <span className={`px-2 py-1 text-[10px] rounded uppercase tracking-wider font-bold ${
                                problem.difficulty === 'easy' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                problem.difficulty === 'medium' ? 'bg-[#f6d365]/10 text-[#f6d365] border border-[#f6d365]/20' :
                                'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}>
                                {problem.difficulty}
                            </span>
                        )}
                    </div>
                </div>
                <div className="p-6 overflow-y-auto flex-1 text-sm text-neutral-300 space-y-8">
                    <section>
                        <h3 className="text-[#4facfe] font-bold text-xs uppercase tracking-widest mb-3">Description</h3>
                        <p className="leading-relaxed text-sm text-neutral-300">{problem.description}</p>
                    </section>
                    
                    {problem.formula && (
                        <section>
                            <h3 className="text-[#4facfe] font-bold text-xs uppercase tracking-widest mb-3">Formula</h3>
                            <div className="bg-[#1f2028] p-3 rounded-lg text-[#f6d365] break-words whitespace-pre-wrap font-mono text-sm border border-neutral-800">
                                {problem.formula}
                            </div>
                        </section>
                    )}
                    
                    <section>
                        <h3 className="text-[#4facfe] font-bold text-xs uppercase tracking-widest mb-3">Constraints</h3>
                        <pre className="bg-[#1f2028] p-3 rounded-lg text-[#f6d365] break-words whitespace-pre-wrap font-mono text-xs border border-neutral-800">
                            {problem.constraints}
                        </pre>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-[#aa3bff] font-bold text-xs uppercase tracking-widest mb-1">Visible Test Cases</h3>
                        {problem.visibleTests?.map((tc, idx) => (
                            <div key={idx} className="space-y-2 border-l-2 border-[#aa3bff]/30 pl-3 py-1">
                                <div className="text-[10px] text-neutral-500 font-bold uppercase">Case {idx + 1}</div>
                                <div className="space-y-1">
                                    <span className="text-[10px] text-neutral-400">Input</span>
                                    <pre className="bg-[#1f2028] p-2 rounded text-[10px] font-mono text-white overflow-x-auto border border-neutral-800">{tc.input}</pre>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] text-neutral-400">Expected Output</span>
                                    <pre className="bg-[#1f2028] p-2 rounded text-[10px] font-mono text-[#4facfe] overflow-x-auto border border-neutral-800">{tc.output}</pre>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* Editor Panel */}
            <div className="w-full lg:w-2/3 bg-[#1f2028] flex flex-col">
                <div className="flex justify-between items-center p-3 border-b border-[#2e303a] bg-[#16171d]">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-[#1f2028] text-white border border-neutral-700 rounded px-3 py-1.5 text-sm outline-none focus:border-[#4facfe]"
                    >
                        <option value="javascript">JavaScript (Node.js)</option>
                        <option value="python">Python 3</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                        <option value="c">C</option>
                    </select>
                    <div className="flex gap-3">
                        {!isPreview ? (
                            <>
                                <button
                                    onClick={() => handleRun('run')}
                                    disabled={loading}
                                    className="px-4 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-white text-sm rounded transition-colors"
                                >
                                    Run Code
                                </button>
                                <button
                                    onClick={() => handleRun('submit')}
                                    disabled={loading}
                                    className="px-4 py-1.5 bg-[#aa3bff] hover:bg-[#912ee6] text-white text-sm rounded font-medium shadow-[0_0_15px_rgba(170,59,255,0.4)] transition-all"
                                >
                                    Submit
                                </button>
                            </>
                        ) : (
                            <span className="text-[#aa3bff] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#aa3bff]/10 border border-[#aa3bff]/20 rounded-full">
                                Preview Mode
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex-1 relative">
                    <Editor
                        height="100%"
                        language={language}
                        theme="vs-dark"
                        value={isPreview ? '// Preview Mode: Problem details only' : code}
                        onChange={(val) => !isPreview && setCode(val)}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            readOnly: isPreview,
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            padding: { top: 16 }
                        }}
                    />
                </div>

                {/* Console / Output Panel */}
                <div className="h-1/3 bg-[#16171d] border-t border-[#2e303a] p-4 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Output Console</h3>
                    {output?.note && (
                        <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded border border-yellow-500/20 animate-pulse">
                            ⚠️ {output.note}
                        </span>
                    )}
                </div>
                {loading ? (
                    <span className="text-neutral-400 animate-pulse text-sm">Executing code on Piston sandbox...</span>
                ) : !output && !output?.error ? (
                    <p className="text-neutral-600 text-sm">Output will appear here...</p>
                ) : output ? (
                        <div className="text-sm space-y-2">
                            {output.error && <div className="text-red-400"><p className="font-semibold text-xs mb-1">Error:</p>{output.error}</div>}
                            {output.results && (
                                <div className="space-y-4">
                                    {/* Visible Results */}
                                    {output.results.filter(r => !r.isHidden).map((r, i) => (
                                        <div key={i} className={`p-3 rounded border font-mono ${r.passed ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`text-[10px] uppercase font-bold ${r.passed ? 'text-green-400' : 'text-red-400'}`}>
                                                    {r.passed ? '✓ Passed' : '✗ Failed'} - Test Case {i + 1}
                                                </span>
                                            </div>
                                            {!r.passed && (
                                                <div className="grid grid-cols-2 gap-4 text-[10px]">
                                                    <div>
                                                        <p className="text-neutral-500 mb-1 uppercase tracking-tighter">Expected</p>
                                                        <pre className="text-neutral-300">{r.expectedOutput}</pre>
                                                    </div>
                                                    <div>
                                                        <p className="text-neutral-500 mb-1 uppercase tracking-tighter">Actual</p>
                                                        <pre className="text-red-300">{r.actualOutput}</pre>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Hidden Results Summary */}
                                    {output.results.some(r => r.isHidden) && (
                                        <div className="p-4 rounded border border-[#aa3bff]/30 bg-[#aa3bff]/5 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#aa3bff]/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-[#aa3bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hidden Test Cases</h4>
                                                    <p className="text-[10px] text-neutral-400">Inputs and outputs are hidden for security</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-[#aa3bff]">
                                                    {output.results.filter(r => r.isHidden && r.passed).length} / {output.results.filter(r => r.isHidden).length}
                                                </div>
                                                <div className="text-[10px] text-neutral-500 font-bold uppercase">Passed</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {output.totalPoints !== undefined && (
                                <div className="mt-4 p-3 bg-neutral-800 rounded">
                                    <span className="text-white">Points Earned: <span className="text-[#f6d365] font-bold">{output.totalPoints}</span></span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <span className="text-neutral-600 text-sm">Output will appear here.</span>
                    )}
                </div>
            </div>
        </div>
    );
}
