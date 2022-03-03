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
  console.log('request',req.body.body)
  console.log('params',req.params.player)
  // console.log('request',req.params.player_id)
  const id = req.params.player
  const score = req.body.body
  const newScore = score + 1
  console.log('iddd',id)
  console.log('newSocre',newScore)
  // const player = Player.findById(id);
  // console.log('player',player)
  // const newScore = player.score + 1
  // debugger
  Player.findOneAndUpdate({_id: id},{score: newScore})
  .then(Player.find().then(player =>  res.json(player)))
})

router.get("/test", (req,res)=> {
  res.json({msg: 'This is the player test'})
})

module.exports = router; 