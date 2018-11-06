import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import './App.css';
import Home from './components/home/Home';
import Society from './components/society/Society';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/society' component={Society} />
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