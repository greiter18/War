import './App.css';
import React, {useState , useEffect} from 'react';
import axios from 'axios';

let player1_deck = []//shuffledCards.slice(0,26);
let player2_deck = [] //shuffledCards.slice(26);

let hand1 = player1_deck[player1_deck.length -1];
let hand2 = player2_deck[player2_deck.length -1];

const App = () => {
  const [player1, setPlayer1] = useState(hand1);
  const [player2, setPlayer2] = useState(hand2);
  const [scores, setScores] = useState('');
  const [deck, setDeck] = useState('');
  const [switcher, setSwitcher] = useState(true)

  let gameOver = false;
  
  // When the page mounts- makes a call to fetch both player scores
  useEffect(() => { 
    axios.get(`/api/players/`)
    .then( players => setScores(players.data))
  }, [])


  const newGame = () => {
    player1_deck = [];
    player2_deck = [];

    axios.get(`/api/game/`)
      .then((res) => {
        let newDeck = res.data
        setDeck(newDeck)
        for(let i = 26; i < newDeck.length; i++) player2_deck.push(newDeck[i])
        for(let i = 0; i < 26; i++) player1_deck.push(newDeck[i]);
        setPlayer1(player1_deck[player1_deck.length - 1]);
        setPlayer2(player2_deck[player2_deck.length - 1]);
      })
      .catch(err => console.log('error',err));

    console.log('Player2 deck',player2_deck)
    console.log('Player 1',player1_deck)

   
    setSwitcher(false);
  }
  
  //fast fowrad button-
  //similiar function with 
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
    else {
      war(top1,top2)
    }
    setPlayer1(player1_deck[player1_deck.length - 1]);
    setPlayer2(player2_deck[player2_deck.length - 1]);
  }

  const draw = () => {
    let hand1 = player1_deck.pop();
    let hand2 = player2_deck.pop();

    if(hand1.value > hand2.value){
      player1_deck.unshift(hand1);
      player1_deck.unshift(hand2);
    } else if(hand1.value < hand2.value){
       player2_deck.unshift(hand1);
       player2_deck.unshift(hand2);
    } else (
        setTimeout(war(hand1,hand2), 2000)
    )
    if(!player1) gameOver = true;
    if(!player2) gameOver = true;
    setPlayer1(player1_deck[player1_deck.length - 1]);
    setPlayer2(player2_deck[player2_deck.length - 1]);
  }

  const winner = () => {
    if(!player1 && gameOver){
      axios.put(`/api/players/${scores[1]?._id}`)
      .then(scores => {setScores(scores)});
      return <h1>Player 2 Wins!</h1>;
    }
    if(!player2 && gameOver){
      axios.put(`/api/players/${scores[0]?._id}`)
      .then(scores => {setScores(scores)});
      return <h1>Player 1 Wins!</h1>;
    }
  }
  
  return (
    <div className="App">
      {console.log('Scores',scores[0]?._id)}
      <header className="header">
        <div className="player-score">Player 1: {scores[0]?.score }</div>
        <h1 className="title">War</h1>
        <div className="player-score">Player 2: {scores[1]?.score } </div>
      </header>
      
      <div className="main">
         {winner()}
        <div>
          <button className="button" onClick={()=> newGame()}>New Game</button>
          <button className="button" disabled={switcher} onClick={() => draw()}>1..2..3.. War</button>
        </div>
        <div className="player-hand">
          <p className="player-info">Player2 - Cards Left: {player2_deck.length}</p> 
          <div className="both-cards">
            <div className="shownCard">
              <p>{player2?.face}</p>
              <div className="suite">{player2?.suite}</div>
            </div>
            <div className="facedown-cards"></div>
          </div>
        </div>
        <p className="vs">vs</p> 
        <div className="player-hand">
          <p className="player-info">Player1 - Cards Left: {player1_deck.length}</p> 
          <div className="both-cards">
            <div className="shownCard">
              <p>{player1?.face}</p>
              <div className="suite">{player1?.suite}</div> 
            </div>
            <div className="facedown-cards"></div>
          </div>
        </div>
      </div>
      <footer>
        <p>Gabriel Reiter</p>
        <p>Git: </p>
      </footer>
    </div>
  );
}

export default App;
