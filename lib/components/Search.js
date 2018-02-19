import React, { Component } from 'react';
import './styles/Search.css';


const Search = () => {
  return (
    <div className='searchDiv'>
      <input className='searchBar' type='search' placeholder='Search Cities' />
      <button></button>
    </div>
  )

}

export default Search;