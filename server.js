const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const api = require('./server/routes/api');
const port = 3000;
const db = "mongodb://jancobh:janco23443970@ds161640.mlab.com:61640/gamingdb";

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configurar Cabeceras
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, ORIGIN, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

// Rutas base
app.use('/api', api);

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Carga de Base de datos y puerto
mongoose.Promise = global.Promise;
mongoose.connect(db, err => {

  if(err){
    console.log('Error ' + err);
  } else {
    console.log('Base de datos funcionando correctamente...');

    app.listen(port, ()=>{
      console.log(`Server Running on Port: ${port}`);
    });
  }
});


