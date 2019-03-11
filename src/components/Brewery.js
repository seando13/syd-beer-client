import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'https://ausbeers.herokuapp.com/'; // Change this in production.
//const SERVER_URL = 'http://localhost:3000';

class Brewery extends Component {
  constructor() {
    super();
    this.state = {
      breweryName: "",
      breweryData: null
    };
  }

  componentDidMount(){
    this.setState({
      breweryName: this.props.match.params.brewery
    }, () => {
      this.getBrewery(this.state.breweryName)
    })
  };

  getBrewery(name){
    axios.get(SERVER_URL + '/breweries/' + name)
    .then( (results) => {
      //console.log(results)
      this.setState({breweryData: results.data});
    });
  }

  render() {
    if (!this.state.breweryData) {
      return <p>Loading...</p>
    }
    //console.log('ping', this.state.breweryData);

    return (
      <div>
        <h2>Brewery: { this.props.match.params.brewery }</h2>
            <p>Go back to <Link to="/beer">All Breweries</Link></p>
        { this.state.breweryData.beers.map( (b) => <ShowBeer beer={b} />) }
      </div>
    );
  }

}

const ShowBeer = (props) => {
  return(
    <div>
      <h3><b>Beer Name:</b>  { props.beer.name }</h3>
      <img className="img" src={props.beer.beer_image} />
      <p><b>Brewery Notes:</b>  { props.beer.description }</p>
      <p><b>Alcohol Content:</b>  { props.beer.abv }</p>
      <p><b>International Bitterness Unit:</b>  { props.beer.ibu }</p>
    </div>
  );
}

export default Brewery;
