const Games = require('../models/games');

function getGame(req, res){
  const gameId = req.params.id;

  Games.findById(gameId, (err, game)=>{
    if(err){
      res.status(500).send({message: 'Error en la petición'});
    } else {
        if(!game){
          res.status(404).send({message: 'El juego no existe!'});
        } else {
          res.status(200).send({game});
        }
    }
  });
}

function getGames(req, res) {
  Games.find({}).exec( (err, games) => {
    if (err){
      res.status(500).send({message: 'Error al devolver los juegos'})
    } else if (!games){
      res.status(404).send({message: 'No Existen Juegos!'});
    } else {
      res.status(200).send({games});
    }
  });
}

function saveGame(req, res) {
  const game = new Games;
  const params = req.body;

  game.title = params.title;
  game.url = params.url;
  game.description = params.description;

  game.save( (err, gameStored)=>{
    if(err){
      res.status(500).send({message: 'Error en la petición al guardar juego'});
    }
    else {
      if(!gameStored){
        res.status(404).send({message: 'No se ha guardado el juego!'});
      } else {
        res.status(200).send({game: gameStored});
      }
    }
  });
}

function updateGame(req, res) {
  const gameId = req.params.id;
  const update = req.body;

  Games.findByIdAndUpdate(gameId, update, (err, gameUpdated)=>{
    if (err){
      res.status(500).send({message: 'Error al actualizar el juego'});
    }
    else {
      if(!gameUpdated){
        res.status(404).send({message: 'No se ha podido actualizar el juego!'});
      }else {
        res.status(200).send({game: gameUpdated});
      }
    }
  });
}

function removeGame(req, res) {
  const gameId = req.params.id;

  Games.findByIdAndRemove(gameId, (err, gameRemoved)=>{
    if (err){
      res.status(500).send({message: 'Error al borrar el juego'});
    }
    else {
      if(!gameRemoved){
        res.status(404).send({message: 'No se ha podido borrar el juego!'});
      }else {
        res.status(200).send({game: gameRemoved});
      }
    }
  });
}

module.exports = {
  getGame,
  getGames,
  saveGame,
  updateGame,
  removeGame
};
