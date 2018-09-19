import React, { Component } from 'react';
import './App.css';

// ________COMPONENTS________
import HEADER from './components/Header';
import BODY from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="APP">
        <header className="APP__HEADER">
          <HEADER/>
        </header>
        <div className="APP__BODY">
          <BODY/>
        </div>
      </div>
    );
  }
}

export default App;
