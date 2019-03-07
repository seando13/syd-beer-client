import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'https://ausbeers.herokuapp.com/home.json'; // Change this in production.

const Brewery = (props) => {
  return (
    <div>
      <Link to={`/breweries/${props.brewery.name}`}>
        <p key={props.brewery.id}>
          {props.brewery.name}
        </p>
      </Link>
      <br />
      {props.brewery.beers.map(b => {
        return <img style={ {maxHeight: "10.5em", maxWidth: "10.5em"} } src={b.beer_image} alt="beers" />
      })}
    </div>
  );
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.beers.map( (br) => <Brewery brewery={br} /> ) }
      </div>
    );
  }
}

class Beer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
    this.saveBeer = this.saveBeer.bind(this);
  }

  componentDidMount() {
    axios.get(SERVER_URL).then( (results) => {
      this.setState({beers: results.data});
    });
  };

  saveBeer(content) {
    axios.post(SERVER_URL, {content}).then((results) => {
      // Spread operator ...
      this.setState({ beers: [results.data, ...this.state.beers] });
    });
  }

  render() {
    return (
      <div>
        <h1>What are your favourite beers?</h1>
        {/* <BeerForm onSubmit={ this.saveBeer }   /> */}
        <Gallery beers={ this.state.beers }/>
      </div>
    );
  }
}

export default Beer;
