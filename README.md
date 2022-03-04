# War
Revist your favorite classic card game and see who will conquer the playing field.


![Screen Shot 2022-03-04 at 11 58 53 AM](https://user-images.githubusercontent.com/66323451/156806632-0205c60a-0019-4ed8-a809-fd52598c8c41.png)

## How to Play
Visit the live site hosted on heroku here - <a href="https://war-cardsgame.herokuapp.com/" target="blank">War</a>

When the game is first loaded, the user will need to click on the 'New Game' button to initiate the game. From there let the battling begin. Click on '1..2..3..War' button to see how each player face off in each round. Keep the battle going until a winner is declared. The winner will be congratulated with a message and their career record will increase.

If you don't like the way this game is going, feel free to restart it at any point by clicking the 'New Game' button at any time.


## Installation
1. Clone repo
2. run `npm install` in the root directory to set up backend dependencies
3. run `npm run server` to boot up the server
4. Open up new terminal and run `cd frontend` to enter the front end directory
5. run `npm install` to install front end dependencies
6. run `npm run start` to start the application, this will run on localhost:3000

## Overview

War is the class card game where 2 players square off with each others top card of their deck. Who ever has the higher of the cards collect their opponent's card and then both cards go to the bottom of the winners deck. First player to lose all of their cards, loses the match and the other player is granted title of winner.

## Features

### New Game
Users can start a new game by clicking on the 'New Game" button to initiate a new game. The deck is being store in the backend where they are shuffled and then sent to the frontend.

### Rounds
Users can advance through each round by clicking the '1..2..3..War' button. Winner of the round will gain their opponents cards. Note- button is disabled until a game has started.

![Screen Shot 2022-03-04 at 12 02 04 PM](https://user-images.githubusercontent.com/66323451/156807125-724c8019-31f1-4647-b990-32425e624f16.png)

### Career score
Located in the header, player's career scores are displayed. Players data is being held in a MongoDB database. The scores are fetched during the start of the game and updated once a winner is declared.

![Screen Shot 2022-03-04 at 12 01 07 PM](https://user-images.githubusercontent.com/66323451/156806909-019e625e-ddce-4f60-995e-4a0ef02d7080.png)


### Remaining Cards
The remaining cards for both players are on display in the middle of the application. This number will change each round based on who won that round.

## Technologies

MERN stack(MongoDB, Express.js, React, Node.js)

## Trade Offs

* Decided to implement a button to advance through each round rather than making it automatic. I decided to do this because this allows you the option of keeping better track of the game. One can click on the button faster to speed up the gameplay.

## Coming Soon

* Implementation of a function that automatically speeds up the playing time of the game. This would allow users to see who won the game at a much quicker time.
* Add more style to cards, Right now each card is black. Would like to split them between red and black, similiar to an actual card deck.
* When players draw the same card and have to draw 3, I would want to create a side deck to show that 3 additional cards were drawn out. Right now the player still earns the 3 cards but do not see which.

## Challenges

* By using react to create this application I had to keep in mind of how to change the state in order to cause the rerenders. In order to do this, I had to create extra state variables and constantly set them.
* The deck is shuffled in the back end and returned to the front. Because this was asynchronous, I had to account for this when distributing the cards to each of the players deck.
