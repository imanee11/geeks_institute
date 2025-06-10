const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const register = async (req, res) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'username and password required' });
        }

        const existingUser = await userModel.getUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'username already taken' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser({ email, username, first_name, last_name }, hashedPassword);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'server error' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'username and password required' });
        }
        const user = await userModel.getUserByUsername(username);
        if (!user) {
            return res.status(401).json({ message: 'invalid credentials' });
        }
        const hashRecord = await userModel.getUserByUsername(username);
        
        const hashpwdRecord = await require('../config/knexfile')('hashpwd').where({ username }).first();
        if (!hashpwdRecord) {
            return res.status(401).json({ message: 'invalid credentials' });
        }
        const validPassword = await bcrypt.compare(password, hashpwdRecord.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'invalid credentials' });
        }
        res.json({ message: 'login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'server error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (user) res.json(user);
        else res.status(404).json({ message: 'user not found' });
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
};

const updateUser = async (req, res) => {
    try {
        const [updatedUser] = await userModel.updateUser(req.params.id, req.body);
        if (updatedUser) res.json(updatedUser);
        else res.status(404).json({ message: 'user not found' });
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
};

module.exports = {
    register,
    login,
    getUsers,
    getUser,
    updateUser,
};
