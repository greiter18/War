import './App.css';
import React, {useState} from 'react';

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

  const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

  const suffledCards = shuffle(cards);


 const player1_deck = suffledCards.slice(0,26);
 const player2_deck = suffledCards.slice(26);

let hand1 = player1_deck[player1_deck.length -1];
let hand2 = player2_deck[player2_deck.length -1];

const App = () => {
  const [player1, setPlayer1] = useState(hand1);
  const [player2, setPlayer2] = useState(hand2);
  
  
  // const showHand = player => {
  //   return player[player.length -1] 
  // }

  const war = (hand1,hand2) => {
    console.log('WAR')
    let top1 = player1_deck.splice(player1_deck.length - 3, 3);
    let top2 = player2_deck.splice(player2_deck.length - 3, 3);
    setPlayer1(top1);
    setPlayer2(top2);
    if(top1[0].value > top2[0].value){
      console.log('player1 wins war')
      player1_deck.unshift(...top1,...top2,hand1,hand2)
    } else if (top2[0].value > top1[0].value){
    player2_deck.unshift(...top2,...top1,hand1,hand2);
    console.log('player2 wins war')
    } 
    // else {
    //   war()
    // }
    setPlayer1(player1_deck[player1_deck.length - 1]);
    setPlayer2(player2_deck[player2_deck.length - 1]);
  }

  const draw = () => {
    let hand1 = player1_deck.pop();
    let hand2 = player2_deck.pop();

    if(hand1.value > hand2.value){
      player1_deck.unshift(hand1);
      player1_deck.unshift(hand2);
      console.log('player1 wins')
      console.log('Player1: ',player1_deck)
      console.log('Player2: ',player2_deck)
    } else if(hand1.value < hand2.value){
      console.log('player2 wins')
       player2_deck.unshift(hand1);
       player2_deck.unshift(hand2);
       console.log('Player1: ',player1_deck)
       console.log('Player2: ',player2_deck)
    } else (
        setTimeout(war(hand1,hand2), 2000)
    )
    setPlayer1(player1_deck[player1_deck.length - 1]);
    setPlayer2(player2_deck[player2_deck.length - 1]);
  }

 

  const winner = () => {
    if(!player1)return <h1>Player 2 Wins</h1>
    if(!player2)return <h1>Player 1 Wins</h1>
  }
  
  return (
    <div className="App">
      {console.log('shuffled',suffledCards)}
      {console.log('Hand1: ',hand1)}
      {console.log('Hand2: ',hand2)}
      {console.log('Player1: ',player1_deck)}
      {console.log('Player2: ',player2_deck)}
      <header className="header">
        <div>Player 1:  </div>
        <div>Player 2:  </div>
      </header>
      
      <div className="main">
         {winner()}
        <h1 className="title">War</h1>
        <button onClick={() => draw()}>Lets Play War</button>
        <div className="player-hand">
          <p className="player-info">Player2 - Cards Left: {player2_deck.length}</p> 
          <div className="shownCard">
            <p>{player2?.face}</p>
            <div className="suite">{player2?.suite}</div>
          </div>
        </div>
        <p className="vs">vs</p> 
        <div className="player-hand">
          <p className="player-info">Player1 - Cards Left: {player1_deck.length}</p> 
          <div className="shownCard">
            <p>{player1?.face}</p>
            <div className="suite">{player1?.suite}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
