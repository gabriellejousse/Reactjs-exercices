import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          < Title name = "Gabrielle" age = {26} languages = {['french', 'english', 'japanese']}></Title>
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
    );
  }
}

export default App;
