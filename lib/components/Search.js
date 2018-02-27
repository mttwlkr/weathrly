import React, { Component } from 'react';
import './styles/Search.css';
import cityList from  '../helpers/cityList';
import PropTypes from 'prop-types';
const { Trie } = require('@mmdberg/complete-me/lib');

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.trie = new Trie();
    this.trie.populate(cityList.data);
    this.state = {
      city: '',
      suggestions: []
    };
  }

  render() {
    return (
      <div className='searchDiv search'>
        <input 
          className='searchBar' 
          type='text' 
          list='suggestions'
          placeholder='Search Cities' 
          value={this.state.city}
          onChange={(event) => {
            this.setState({ city: event.target.value });
            this.setState({ suggestions: this.trie
              .suggest(event.target.value)});
          }}
        />
        <datalist id='suggestions'>
          {this.state.suggestions.map(suggestion => {
            return <option value={suggestion}/>;
          })}
        </datalist>
        <button
          onClick={() => {
            this.props.getCity(this.state.city);
            this.setState({ city: '' });
          }}
        ></button>
      </div>
    );
  }
}

Search.propTypes = {
  city: PropTypes.string,
  suggestions: PropTypes.array,
  getCity: PropTypes.func
};
