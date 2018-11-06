import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import './App.css';
import Home from './components/home/Home';
import Society from './components/society/Society';
import GraphPage from './components/graphPage/GraphPage';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">      
          <div className="Graphics">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/society' component={Society} />
            <Route path='/graphPage' component={GraphPage} />
          </Switch>
      
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);