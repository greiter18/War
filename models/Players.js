const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
   name: {
    type: String,
  },
  score: {
    type: Number
  }
})

module.exports = Player = mongoose.model('players', PlayerSchema);
