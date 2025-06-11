const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const router = express.Router();
const filePath = path.join(__dirname, 'users.json')

function readUsers() {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function writeUsers(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}


// register
router.post('/register' , async(req , res) => {
    const {name , lastName , email, username , password} = req.body

    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).json({message: 'all fields are required'})
    }

    const users = readUsers()

    // check if username exists
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'username already exists' })
    }

    const hashedPassword = await bcrypt.hash(password , 10)

    let newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        lastName,
        email,
        username,
        password : hashedPassword
    }

    users.push(newUser)
    writeUsers(users)

    res.json({message: 'Hello Your account is now created!'})

})

// login
router.post('/login', async (req , res) => {
    const {username , password} = req.body

    const users = readUsers()
    const user = users.find(u => u.username === username)

    if (!user) {
        return res.status(404).json({message : 'username is not registered'})
    }

    const isMatch = await bcrypt.compare(password , user.password)

    if (!isMatch) {
        return res.status(401).json({ message: 'incorrect password' })
    }

    res.json({message: `Hi ${user.name} welcome back again!`})
})

// get all users
router.get('/users', (req, res) => {
    const users = readUsers();
    res.json(users);
});

// get user by id
router.get('/users/:id' , (req , res) => {
    const users = readUsers()
    const user = users.find(u => u.id == req.params.id)

    if (!user) {
        return res.status(404).json({message: 'user not found'})
    }

    res.json(user)
})

// update user
router.put('/users/:id', (req, res) => {
    const users = readUsers()
    const index = users.findIndex(u => u.id == req.params.id)

    if (index === -1) {
        return res.status(404).json({ message: 'user not found'})
    }

    const updated = {...users[index] , ...req.body}
    users[index] = updated
    writeUsers(users)

    res.json({message: 'user updated', user: updated})
})


module.exports = router;
