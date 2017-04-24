const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = Schema({
  title: String,
  url: String,
  description: String
});

module.exports = mongoose.model('Games', GamesSchema);
