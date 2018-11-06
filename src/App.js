import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import './App.css';
import Home from './components/home/Home';
import Library from './components/library/Library';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/library' component={Library} />
            {/* <Route path='/games/:id' component={PageGame} />
            <Route path='/theme/:theme' component={PageTheme} />
            <Route path='/reservation' component={PageReservation} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);