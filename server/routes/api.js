const express = require('express');
const GamesController = require('../controllers/games');
const UsersController = require('../controllers/user');
const api = express.Router();

api.get('/', (req, res)=>{
  res.send('api works');
});

// Games Routes
api.get('/game/:id', GamesController.getGame);
api.get('/games', GamesController.getGames);
api.post('/game', GamesController.saveGame);
api.put('/game/:id', GamesController.updateGame);
api.delete('/game/:id', GamesController.removeGame);

// User Routes
api.post('/user', UsersController.saveUser);

// Login User Routes
api.post('/user/login', UsersController.loginUser);

module.exports = api;
