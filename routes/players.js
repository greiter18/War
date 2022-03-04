const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Player = require("../models/Players")

router.get("/", (req,res)=> {
  Player
  .find()
  .then(players =>  res.json(players))
  .catch(err => res.status(404).json({ noplayers: 'No Players found' }));
})

router.put('/:player', (req,res) => {
  const id = req.params.player
  const score = req.body.body
  const newScore = score + 1

  Player.findOneAndUpdate({_id: id},{score: newScore})
  .then(Player.find().then(player =>  res.json(player)))
})

module.exports = router; 