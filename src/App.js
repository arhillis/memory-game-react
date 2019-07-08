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
        seconds: 0
      }
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

  render() {
    return (
      <HashRouter basename="/">
        <div className="container">
          <Header />
          <ScorePannel moves={this.state.moves} 
                        onClick={this.addMove}
                        timer={this.state.timer}
          />
        </div>
      </HashRouter>
    );
  }
}


export default App;
