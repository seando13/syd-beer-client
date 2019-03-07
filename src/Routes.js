import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Home from './components/Home';
import Brewery from './components/Brewery';
import Beer from './components/Beer';
import Header from './components/Header';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/beers" component={ Beers } />
      <Route path="/breweries/:brewery" component={ Brewery } />
      <Route exact path="/beer" component={ Beer } />
    </div>
  </Router>
);

export default Routes;
