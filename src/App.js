import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';
import Home from './components/home/Home';
import NavBar from './NavBar';


class App extends Component {
  render() {
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