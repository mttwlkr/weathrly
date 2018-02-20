import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  const {img, temp} = props;
  return (
    <div className="card">
      <h3>Hour</h3>
      <img src={img} />
      <p>{temp}</p>
    </div>
  );
}

export default Card;
