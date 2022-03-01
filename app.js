const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI; // connects to our database
const bodyParser = require('body-parser'); // used for postman
const passport = require("passport");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  player: {
    type: String,
  },
  score: {
    type: Number
  }
})

const Player = mongoose.model('player', PlayerSchema);
module.exports = Player;
