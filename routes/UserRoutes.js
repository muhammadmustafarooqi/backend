import express from 'express';

const UserRoutes = express.Router();

UserRoutes.get('/login', (req, res) => {
    res.send('Login Page');
});
UserRoutes.get('/signup', (req, res) => {
    res.send('Signup Page');
});

export default UserRoutes;