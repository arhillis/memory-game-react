import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

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
        seconds: 9
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
      cards: []
    }
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

  restartGame = () =>{
    this.setState({
      moves: 0,
      stars: 3,
      timer: {
        minutes: 0,
        seconds: 0
      }
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
                cards={this.state.faces}
          />
        </div>
      </HashRouter>
    );
  }
}


export default App;
