const express = require("express");
const router = express.Router();

let cards = [
  {'face': '2','value': 2, 'suite': "♦"},
  {'face': '3','value': 3, 'suite': "♦"},
  {'face': '4','value': 4, 'suite': "♦"},
  {'face': '5','value': 5, 'suite': "♦"},
  {'face': '6','value': 6, 'suite': "♦"},
  {'face': '7','value': 7, 'suite': "♦"},
  {'face': '8','value': 8, 'suite': "♦"},
  {'face': '9','value': 9, 'suite': "♦"},
  {'face': '10','value': 10, 'suite': "♦"},
  {'face': 'J','value': 11, 'suite': "♦"},
  {'face': 'Q','value': 12, 'suite': "♦"},
  {'face': 'K','value': 13, 'suite': "♦"},
  {'face': 'A','value': 14, 'suite': "♦"},
  {'face': '2','value': 2, 'suite': "♥"},
  {'face': '3','value': 3, 'suite': "♥"},
  {'face': '4','value': 4, 'suite': "♥"},
  {'face': '5','value': 5, 'suite': "♥"},
  {'face': '6','value': 6, 'suite': "♥"},
  {'face': '7','value': 7, 'suite': "♥"},
  {'face': '8','value': 8, 'suite': "♥"},
  {'face': '9','value': 9, 'suite': "♥"},
  {'face': '10','value': 10, 'suite': "♥"},
  {'face': 'J','value': 11, 'suite': "♥"},
  {'face': 'Q','value': 12, 'suite': "♥"},
  {'face': 'K','value': 13, 'suite': "♥"},
  {'face': 'A','value': 14, 'suite': "♥"},
  {'face': '2','value': 2, 'suite': "♠"},
  {'face': '3','value': 3, 'suite': "♠"},
  {'face': '4','value': 4, 'suite': "♠"},
  {'face': '5','value': 5, 'suite': "♠"},
  {'face': '6','value': 6, 'suite': "♠"},
  {'face': '7','value': 7, 'suite': "♠"},
  {'face': '8','value': 8, 'suite': "♠"},
  {'face': '9','value': 9, 'suite': "♠"},
  {'face': '10','value': 10, 'suite': "♠"},
  {'face': 'J','value': 11, 'suite': "♠"},
  {'face': 'Q','value': 12, 'suite': "♠"},
  {'face': 'K','value': 13, 'suite': "♠"},
  {'face': 'A','value': 14, 'suite': "♠"},
  {'face': '2','value': 2, 'suite': "♣"},
  {'face': '3','value': 3, 'suite': "♣"},
  {'face': '4','value': 4, 'suite': "♣"},
  {'face': '5','value': 5, 'suite': "♣"},
  {'face': '6','value': 6, 'suite': "♣"},
  {'face': '7','value': 7, 'suite': "♣"},
  {'face': '8','value': 8, 'suite': "♣"},
  {'face': '9','value': 9, 'suite': "♣"},
  {'face': '10','value': 10, 'suite': "♣"},
  {'face': 'J','value': 11, 'suite': "♣"},
  {'face': 'Q','value': 12, 'suite': "♣"},
  {'face': 'K','value': 13, 'suite': "♣"},
  {'face': 'A','value': 14, 'suite': "♣"},
]
//function that will shuffle the deck of cards
const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
//sending the shuffled cards back to the frontend
router.get("/", (req,res)=> {
  const shuffledCards = shuffle(cards);
  res.json(shuffledCards)
})

module.exports = router;