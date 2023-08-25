const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret= 'dsfajsr4343jkasj343sdfaskj'

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

mongoose.connect('mongodb+srv://mern-blog-app:883243567@cluster0.5xiwisl.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json('ok');    
        })
        // res.json();
    } else {
        res.status(400).json('wrong credentials');
    }
})

// mongodb+srv://mern-blog-app:883243567@cluster0.5xiwisl.mongodb.net/?retryWrites=true&w=majority

app.listen(4000);