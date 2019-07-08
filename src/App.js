import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
