import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/brewery.json'; // Change this in production.

class Brewery extends Component {
  constructor() {
    super();
    this.state = {
      breweryName: "",
      breweryData: []
    };
  }

  componentDidMount(){
    this.setState({
      breweryName: this.props.match.params.brewery
    }, () => {
      this.getBrewery(this.state.brewery)
    })
  };

  getBrewery(content){
    axios.get(SERVER_URL, {
        brewery: {content}
      }
    ).then( (results) => {
      console.log(results)
      this.setState({breweryData: results.data});
    });
  }

  render() {
    //console.log('ping');
    return (
      <div>
        <h2>Brewery: { this.props.match.params.brewery }</h2>
          <p>
            Coming soon! Go back <Link to="/">home</Link>

          </p>
      </div>
    );
  }

  // const ShowBeer () => {
  //   return(
  //     <div>
  //
  //     </div>
  //   );
  // }

}

export default Brewery;
