const express = require('express');
const router = express.Router();
const axios = require('axios');
const { allProblems } = require('./problems');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runLocal(language, sourceCode, input) {
    const tempDir = path.join(__dirname, '../temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    
    const id = Date.now() + Math.random().toString(36).substring(2, 7);
    let fileName, compileCmd, runCmd;
    
    switch (language) {
        case 'python':
            fileName = `solution_${id}.py`;
            runCmd = `python3 ${fileName}`;
            break;
        case 'javascript':
            fileName = `solution_${id}.js`;
            runCmd = `node ${fileName}`;
            break;
        case 'java':
            const classMatch = sourceCode.match(/class\s+(\w+)/);
            const className = classMatch ? classMatch[1] : 'Main';
            fileName = `${className}.java`;
            compileCmd = `javac ${fileName}`;
            runCmd = `java ${className}`;
            break;
        case 'c':
            fileName = `solution_${id}.c`;
            const binNameC = `solution_${id}.out`;
            compileCmd = `gcc ${fileName} -o ${binNameC}`;
            runCmd = `./${binNameC}`;
            break;
        case 'cpp':
            fileName = `solution_${id}.cpp`;
            const binNameCpp = `solution_${id}.out`;
            compileCmd = `g++ ${fileName} -o ${binNameCpp}`;
            runCmd = `./${binNameCpp}`;
            break;
        default:
            return { stdout: '', stderr: 'Unsupported language', error: 'LangError' };
    }

    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, sourceCode);

    try {
        if (compileCmd) {
            execSync(compileCmd, { cwd: tempDir, timeout: 5000, stdio: 'pipe' });
        }
        const stdout = execSync(runCmd, { 
            cwd: tempDir, 
            input: input, 
            timeout: 5000,
            encoding: 'utf-8',
            stdio: 'pipe'
        });
        return { stdout: stdout.trim(), stderr: '', error: null };
    } catch (err) {
        return { 
            stdout: err.stdout ? err.stdout.toString().trim() : '', 
            stderr: err.stderr ? err.stderr.toString().trim() : (err.message || 'Execution Error'), 
            error: err 
        };
    } finally {
        // Cleanup
        try {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            if (language === 'c' || language === 'cpp') {
                const binPath = path.join(tempDir, `solution_${id}.out`);
                if (fs.existsSync(binPath)) fs.unlinkSync(binPath);
            }
            if (language === 'java') {
                const classMatch = sourceCode.match(/class\s+(\w+)/);
                const className = classMatch ? classMatch[1] : 'Main';
                const classPath = path.join(tempDir, `${className}.class`);
                if (fs.existsSync(classPath)) fs.unlinkSync(classPath);
            }
        } catch (e) {}
    }
}

const PISTON_URL = 'https://piston.pston.ai/api/v2/execute'; // Trying a different public endpoint or user-provided

// This would ideally be imported from or shared with problemRoutes
// For now, we'll assume the client sends the problem details or we fetch them
// In a real app, persistent storage (DB/Firebase) would be used.

const LANGUAGE_KEYWORDS = {
    javascript: ['console.log', 'const', 'let', 'function', '=>', 'var', 'if', 'else', 'for', 'while'],
    python: ['print', 'def ', 'import', ':', 'elif', 'if', 'else', 'for', 'while', 'in '],
    c: ['printf', '#include', 'int ', 'scanf', 'return', 'main', 'if', 'else', 'for', 'while'],
    cpp: ['cout', '#include', 'cin', 'std::', 'vector', 'main', 'if', 'else', 'for', 'while']
};

router.post('/execute', async (req, res) => {
    const { language, sourceCode, problemId, teamId, submitType } = req.body;

    if (!language || !sourceCode || !problemId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const problem = allProblems.find(p => p.id === problemId);
    if (!problem) {
        return res.status(404).json({ error: 'Problem not found' });
    }

    // Determine test cases based on submitType
    const testCases = submitType === 'submit'
        ? [
            ...(problem.visibleTests || []).map(tc => ({ ...tc, isHidden: false })),
            ...(problem.hiddenTests || []).map(tc => ({ ...tc, isHidden: true }))
          ]
        : (problem.visibleTests || []).map(tc => ({ ...tc, isHidden: false }));

    try {
        const results = [];
        let totalPoints = 0;
        let useFallback = false;

        for (const testCase of testCases) {
            const localResult = runLocal(language, sourceCode, testCase.input);
            
            let output = (localResult.stdout || "").trim();
            let stderr = localResult.stderr || "";
            const expected = String(testCase.output || "").trim();
            
            // Normalize spaces to avoid failing on extra spaces between words/numbers
            const normOutput = output.replace(/\s+/g, ' ');
            const normExpected = expected.replace(/\s+/g, ' ');
            let passed = (normOutput === normExpected);

            if (localResult.error && !localResult.stderr) {
                stderr = 'Execution Timeout or System Error';
            }

            if (passed) {
                totalPoints += testCase.points || 0;
            }

            results.push({
                testCaseId: testCase.id || null,
                input: testCase.isHidden ? '[HIDDEN]' : testCase.input,
                expectedOutput: testCase.isHidden ? '[HIDDEN]' : expected,
                actualOutput: testCase.isHidden ? (passed ? '[HIDDEN]' : 'Failed Case') : output,
                passed: passed,
                error: stderr,
                isHidden: testCase.isHidden,
                isMock: false
            });
        }

        res.json({
            success: true,
            results,
            totalPoints,
            allPassed: results.every(r => r.passed)
        });
    } catch (error) {
        console.error('Execution error:', error.message);
        res.status(500).json({ error: 'Failed to execute code' });
    }
});

module.exports = router;
