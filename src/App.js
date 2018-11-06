import React, { Component } from 'react';
import Footer from './components/Footer';
import './App.css';
import Video from './components/Video';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Home />
          <Video />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;