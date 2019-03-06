import React, { Component } from 'react';
import Beer from './Beers';
import Brewery from './Brewery';
import Beer from './Beer';
import Home from '/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Beers />
        <Brewery />
        <Beer />
      </div>
    );
  }
}

export default App;
