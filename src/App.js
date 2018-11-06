import React, { Component } from 'react';
import Footer from './Component/Footer';
import './App.css';
import Video from './components/Video';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App content">
        <Home />
        <Video />
        <Footer />
      </div>
    );
  }
}
export default App;