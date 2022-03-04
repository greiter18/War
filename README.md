# War
Revist your favorite classic card game and see who will dominate conquer the playing field

## Overview

War is the class card game where 2 players square off with each others top card. Who ever has the higher of the cards collect their opponents card and then both cards go to the bottom of the winners deck. First player to lose all of their cards loses the match and the other player is granted title of winner.

## Features

### New Game
Users can start a new game by clicking on the 'New Game" button to initiate a new game. The deck is being store in the backend where they are shuffled and then sent to the frontend.

### Rounds
Users can advance through each round by clicking the '1..2..3..War' button. Winner of the round will gain their opponents cards.

### Career score
Located in the header, players career scores are displayed. Players data is being held in a MongoDB database. The scores are fetched during the start of the game and updated once a winner is declared.

## How to Player

When the game is first loaded, the user will need to click on the 'New Game' button to initiate the game. From there let the battling begin. Click on '1..2..3..War' button to see how each player face off in each round. Keep the battle going until a winner is declared. The winner will be congratualted with a message and their career record will increase.

If you don't like the way this game is going, feel free to restart it at any point by clicking the 'New Game' button at any time.


## Technologies

War was created using React.js, HTML, CSS in the frontend, Express.js and Mongoose for the backend and utilizes a MongoDB database.

## Coming Soon

Implementation of a function that automatically speeds up the playing time of the game. This would allow users to see who won the game at a much quicker time.
