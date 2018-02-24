import React, { Component } from 'react';
import './styles/Search.css';
const { Trie } = require('@mmdberg/complete-me/lib');
import cityList from  './cityList';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.trie = new Trie();
    this.trie.populate(cityList.data)
    this.state = {
      city: props.city,
      suggestions: []
    }
  }

  render() {
    return (
      <div className='searchDiv search'>
        <input 
          className='searchBar' 
          type='text' 
          list='browsers'
          placeholder='Search Cities' 
          value={this.state.city}
          onChange={(event) => {
            this.setState({ city: event.target.value });
            this.setState({ suggestions: this.trie.suggest(event.target.value)})
          }}
        />
        <datalist id='browsers'>
            {this.state.suggestions.map(suggestion => {
                return <option value={suggestion}/>
              })}
        </datalist>
        <button
          onClick={(event) => {
            this.props.getCity(this.state.city)
            this.state.city = '';
          }}
        ></button>
      </div>
    )
  }
}
