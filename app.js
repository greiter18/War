const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI; 
const bodyParser = require('body-parser');
const path = require('path');

const players = require("./routes/players")
const game = require("./routes/game")


mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(res);
  res.send('Hello World')
})

app.use("/api/players", players);
app.use("/api/game", game);

//for production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.Port || 5000;

app.listen(port, () => { console.log(`Listening to ${port}`);})
 