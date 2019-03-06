import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/home.json'; // Change this in production.

// class BeerForm extends Component {
//   constructor() {
//     super();
//     this.state = { content: '' };
//     this._handleSubmit = this._handleSubmit.bind(this);
//     this._handleChange = this._handleChange.bind(this);
//   }

  // _handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit( this.state.content );
  //   this.setState({content: ''}); // Clear out the form for the next secret.
  //   // How would we give focus back to the textarea? refs
  // }

  // _handleChange(e) {
  //   this.setState( { content: e.target.value } );
  // }

//   render() {
//     return (
//       <form onSubmit={ this._handleSubmit }>
//         <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
//         <input type="submit" value="Tell" />
//       </form>
//     );
//   }
// }

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
        return <img style={ {maxHeight: "10em", maxWidth: "10em"} } src={b.beer_image} />
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
