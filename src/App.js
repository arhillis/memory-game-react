import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import uuid from 'uuid';

import Header from './components/header';
import ScorePannel from './components/scorePanel';
import Deck from './components/deck';

class App extends Component{
  constructor(){
    super()
    this.state = {
      moves: 0,
      timer: {
        minutes: 0,
        seconds: 57
      },
      stars: 3,
      faces: [
        "coffee",
        "anchor",
        "bolt",
        "cube",
        "leaf",
        "bicycle",
        "bomb",
        "paper-plane",
        "coffee",
        "anchor",
        "bolt",
        "cube",
        "leaf",
        "bicycle",
        "bomb",
        "paper-plane",
      ],
      cards: [],
      firstCard: null,
      secondCard: null
    }
  }

  componentDidMount(){
    const cards = this.shuffleCards();
    this.setState({cards: cards})
  }

  shuffleCards = () => {
    let temp = [], faces = [...this.state.faces];

    while(faces.length > 0){
      let random = Math.floor(Math.random() * faces.length);
      temp.push({
        id: uuid.v4(),
        face: faces.splice(random, 1)[0],//Pulls a random element out of this.faces and pushes it to the temp array
        faceUp: false
      });
    }

    return temp;
  }

  clockTick = () => {
    this.setState(prevState => {
      const {seconds, minutes} = prevState.timer;
      let secs = seconds === 59 ? 0 : seconds + 1;

      return {
        timer: {
          minutes: secs === 0 ? minutes + 1 : minutes,
          seconds: secs
        }
      };
    })
  }

  addMove = () =>{
    this.setState(prevState =>{
      const {moves, stars} = prevState;  
      const move = moves + 1;

      return {
        moves: move,
        stars:  move > 17 && move % 6 === 0  ? stars - 1 : stars
      }

    })
  }

  flipCard = (id) =>{
    this.setState(prevState =>{
      const cards = [...prevState.cards];
      let card = cards.filter(crd => crd.id === id)[0];

      card.faceUp = true

      /*
        Three possibilities:
          1. There are no face-up cards (both firstCard and secondCard are null)
          2. There is one face-up card (only secondCard is null)
          3. There are two face-up cards (neither are null)
      */

      return {
        cards: cards,
        firstCard: card
      }
    })
  }

  restartGame = () =>{
    const cards = this.shuffleCards();
    
    this.setState({
      moves: 0,
      stars: 3,
      timer: {
        minutes: 0,
        seconds: 0
      },
      cards: cards
    })
  }

  render() {

    return (
      <HashRouter basename="/">
        <div className="container">
          <Header />
          <ScorePannel state={this.state}
                        restart={this.restartGame}
          />
          <Deck addMove={this.addMove} 
                cards={this.state.cards}
                firstCard = {this.state.firstCard}
                flipCard = {this.flipCard}
                clockTick = {this.clockTick}
          />
        </div>
      </HashRouter>
    );
  }
}


export default App;
