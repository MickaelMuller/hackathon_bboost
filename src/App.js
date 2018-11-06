import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home />
          <Video />
        
      </div>
    );
  }
}
export default App;