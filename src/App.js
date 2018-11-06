import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';
import Home from './components/home/Home';
import NavBar from './NavBar';
import json from './components/home/convertTest';

class App extends Component {
  render() {
    console.log(json)
    return (
      <div className="App">
          <NavBar />
        <div className="content">
          <Home />
          
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;