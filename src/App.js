import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

import Header from './components/header';
import ScorePannel from './components/scorePanel';

class App extends Component{
  constructor(){
    super()
    this.state = {
      moves: 0,
      timer: {
        minutes: 0,
        seconds: 9
      },
      stars: 3
    }
  }

  addMove = () =>{
    this.setState(prevState =>{
      const moves = prevState.moves + 1;
      return {
        moves: moves
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
          <ScorePannel moves={this.state.moves}
                        onClick={this.addMove}
                        restart={this.restartGame}
                        timer={this.state.timer}
                        stars={this.state.stars}
          />
        </div>
      </HashRouter>
    );
  }
}


export default App;
