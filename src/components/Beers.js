import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

//const SERVER_URL = 'http://localhost:3000/home.json'; // Change this in production.

class Beers extends Component {
  render() {
    return (
      <div>
        <h2>Oz Beers</h2>
        <p>
          Go back <Link to="/">home</Link>
        </p>
      </div>
    );
  }
}

export default Beers;
