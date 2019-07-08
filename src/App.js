import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

import Header from './components/header';
import ScorePannel from './components/scorePanel';

class App extends Component{
  render() {
    return (
      <HashRouter basename="/">
        <div className="container">
          <Header />
          <ScorePannel />
        </div>
      </HashRouter>
    );
  }
}


export default App;
