const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function saveUser(req, res) {
  const user = new User();
  const params = req.body;

  user.firstName = params.firstName;
  user.lastName = params.lastName;
  user.password = bcrypt.hashSync(params.password, 10);
  user.email = params.email;

  user.save( (err, userStored) => {
    if(err){
      res.status(500).send({message: 'Error en la petición al guardar usuario'});
    }
    else {
      if(!userStored){
        res.status(404).send({message: 'No se ha guardado el usuario!'});
      } else {
        res.status(200).send({user: userStored});
      }
    }
  });
}

function loginUser(req, res) {

  User.findOne({email: req.body.email}, (err, userLogedIn)=>{
    if(err){
      res.status(500).send({message: 'Error en la petición al logear usuario'});
    }
    if(!userLogedIn){
      res.status(404).send({message: 'No se ha logear el usuario!'});
    }
    if(!bcrypt.compareSync(req.body.password, userLogedIn.password)){
      res.status(401).send({message: 'Password LogIn Invalido!'});
    }
    const token = jwt.sign({user: userLogedIn}, 'secret', {expiresIn: 7200});
    res.status(200).send({message: 'Successfully logged in', token: token, userId: userLogedIn._id});
  });
}

module.exports = {
  saveUser,
  loginUser
};
