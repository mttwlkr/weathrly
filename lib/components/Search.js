import React, { Component } from 'react';
import './styles/Search.css';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
    }
  }

  render() {
    return (
      <div className='searchDiv search'>
        <input 
          className='searchBar' 
          type='search' 
          placeholder='Search Cities' 
          value={this.state.city}
          onChange={(event) => {
            this.setState({ city: event.target.value })
          }}
        />
        
        <button
          onClick={(event) => {
            this.props.getCity(this.state.city)
          }}
        ></button>
      </div>
    )
  }
}
