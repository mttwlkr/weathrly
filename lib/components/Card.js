import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  console.log('Card Log Props:', props)
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.icon}/>
      <p>{props.temp}</p>
    </div>
  );
}

export default Card;
