const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const connectionstring = process.env.DB_STRING

MongoClient.connect(connectionstring)
    .then(client => {
        console.log('Connected to database')
        const db = client.db('twitter-clone')
        const taskCollection = db.collection('tasks')

        //CRUD request
    })
    .catch(error => console.error(error));



//User Login route.
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;


        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ userId: user._id }, 'Hello123');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;

//Auth Middleware.
const authmiddleware = require('./middleware/auth');

app.post('/tweet', authmiddleware, (req, res) => {

});