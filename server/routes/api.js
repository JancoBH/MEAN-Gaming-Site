const express = require('express');
const GamesController = require('../controllers/games');
const api = express.Router();

api.get('/', (req, res)=>{
  res.send('api works');
});

api.get('/game/:id', GamesController.getGame);
api.get('/games', GamesController.getGames);
api.post('/game', GamesController.saveGame);
api.put('/game/:id', GamesController.updateGame);
api.delete('/game/:id', GamesController.removeGame);

module.exports = api;
