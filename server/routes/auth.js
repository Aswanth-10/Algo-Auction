const express = require('express');
const router = express.Router();

const users = [
    { id: 'admin', role: 'admin', password: 'admin123' },
    { id: 'teamA', role: 'team', password: 'password', name: 'Thinkers Duo', currency: 1000, points: 0 },
    { id: 'teamB', role: 'team', password: 'password', name: 'Hack & Code', currency: 1000, points: 0 },
    { id: 'teamC', role: 'team', password: 'password', name: 'Newbies', currency: 1000, points: 0 },
    { id: 'teamD', role: 'team', password: 'password', name: 'Boult', currency: 1000, points: 0 },
    { id: 'teamE', role: 'team', password: 'password', name: 'Error 404', currency: 1000, points: 0 },
    { id: 'teamF', role: 'team', password: 'password', name: 'Solitude', currency: 1000, points: 0 },
    { id: 'teamG', role: 'team', password: 'password', name: 'Code Bidders', currency: 1000, points: 0 },
    { id: 'teamH', role: 'team', password: 'password', name: 'Debuggers', currency: 1000, points: 0 },
    { id: 'teamI', role: 'team', password: 'password', name: 'Hackos', currency: 1000, points: 0 },
    { id: 'teamJ', role: 'team', password: 'password', name: 'Decoders', currency: 1000, points: 0 },
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
