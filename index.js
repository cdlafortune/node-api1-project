const express = require('express');
const db = require("./database");
const server = express();
// const shortid = require('shortid');

server.use(express.json());

server.get('/', (req, res) => {
    res.json('Hello from express!');
});

server.get('/users', (req, res) => {
    //gets list of users
    const users = db.getUsers();
    res.json(users);
});

server.get('/users/:id', (req, res) => {
    //get users by ID
    const id = req.params.id;
    const user = db.getUserById(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found.'});
    }
});


//create user
server.post('/users', (req, res) => {
    const newUser = db.createUser({
        id: req.body.id,
        name: req.body.name,
        bio: req.body.bio,
    });

    req.status(201).json(newUser);
});

//delete user
server.delete('/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id);

    if (user) {
        db.deleteUser(req.params.id);
        res.status(204).end();
    } else {
        res.status(404).json({message: 'User not found.'});
    }
})



server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

