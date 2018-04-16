import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/navbar.jsx';
import {Jumbotron} from './components/jumbotron.js';
import Players from './components/players.jsx';
import Player from './components/player.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store = {store}>
  <div>
  <Navbar/>
  </div>
</Provider>, document.getElementById('fck-nav'));

  ReactDOM.render(
    <Provider store = {store}>
    <div>
    <Router>
      <div>
      <Route exact path = "/about" component = {Jumbotron}></Route>
      <Route exact path = "/players" component = {Players}></Route>
      <Route path="/player/:id" component ={Player} />
    </div>
    </Router>
  </div>
  </Provider>, document.getElementById('fck-container'));
