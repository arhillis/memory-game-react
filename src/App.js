import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div className="container">
        <header>
            <h1>Matching Game</h1>
        </header>
        <div className="score-panel">
            <ul className="stars">
                <li>
                    <i className="fa fa-star gold"></i>
                </li>
                <li>
                    <i className="fa fa-star gold"></i>
                </li>
                <li>
                    <i className="fa fa-star gold"></i>
                </li>
            </ul>
            <p class="moves-para">
                <span className="moves">0</span> Moves
            </p>
            <div className="timer">
                <span id="mins">0</span>:
                <span id="secs">00</span>
            </div>

            <div className="restart">
                <i className="fa fa-repeat"></i>
            </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
