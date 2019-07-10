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
        matched: false
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
      /*
        Three possibilities:
          1. There are no face-up cards (both firstCard and secondCard are null) - we want to set firstCard to the card that was flipped
          2. There is one face-up card (only secondCard is null) - we want to set secondCard to the card that was flipped and end the turn
          3. There are two face-up cards (neither are null) - we do not want to do anything
      */
    
    const {secondCard} = this.state;
    
    if(secondCard === null){      //Options 1 or 2
      const {firstCard, cards} = this.state
      const card = cards.filter(crd => crd.id === id)[0];

      if(firstCard === null){
        this.setState({firstCard: card})
      }else{
        this.setState({secondCard: card})
        setTimeout(this.endTurn, 1500)
      }
    }
  }

  endTurn = () =>{
    this.setState(prevState =>{
      const {firstCard, secondCard, cards, moves, stars} = prevState;
      const move = moves + 1;

      if(firstCard.face === secondCard.face){
        cards.map(card => {
          const {id} = card;
          if(id === firstCard.id || id === secondCard.id){
            card.matched = true;
          }
          return card
        })
      }

      return {
        cards: cards,
        firstCard: null,
        secondCard: null,
        moves: move,
        stars:  move > 17 && move % 6 === 0  ? stars - 1 : stars
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
      cards: cards,
      firstCard: null,
      secondCard: null
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
                secondCard = {this.state.secondCard}
                flipCard = {this.flipCard}
                clockTick = {this.clockTick}
          />
        </div>
      </HashRouter>
    );
  }
}


export default App;
