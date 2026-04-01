const express = require('express');
const router = express.Router();

const users = [
    { id: 'admin', role: 'admin', password: 'admin123' },
    { id: 'teamA', role: 'team', password: 'password', name: 'Team A', currency: 1000, points: 0 },
    { id: 'teamB', role: 'team', password: 'password', name: 'Team B', currency: 1000, points: 0 },
    { id: 'teamC', role: 'team', password: 'password', name: 'Team C', currency: 1000, points: 0 },
    { id: 'teamD', role: 'team', password: 'password', name: 'Team D', currency: 1000, points: 0 },
    { id: 'teamE', role: 'team', password: 'password', name: 'Team E', currency: 1000, points: 0 },
    { id: 'teamF', role: 'team', password: 'password', name: 'Team F', currency: 1000, points: 0 },
    { id: 'teamG', role: 'team', password: 'password', name: 'Team G', currency: 1000, points: 0 },
    { id: 'teamH', role: 'team', password: 'password', name: 'Team H', currency: 1000, points: 0 },
    { id: 'teamI', role: 'team', password: 'password', name: 'Team I', currency: 1000, points: 0 },
    { id: 'teamJ', role: 'team', password: 'password', name: 'Team J', currency: 1000, points: 0 },
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.id === username && u.password === password);

    if (user) {
        res.json({ success: true, token: 'mock-jwt-' + user.id, user });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = { router, users };
