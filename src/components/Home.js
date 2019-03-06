import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Oz Beer DB</h2>
        <p>
          Please check out our <Link to="/beers">beers</Link>
        </p>
        <p>
          Please check out our <Link to="/beer">json beer</Link>
        </p>
        <p>
          <Link to="/breweries/Sydney">Sydney Breweries</Link>
        </p>
        <p>
          <Link to="/breweries/Melbourne">Melbourne Breweries</Link>
        </p>
      </div>
    );
  }
};

export default Home;
