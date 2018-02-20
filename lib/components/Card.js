import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  console.log(props)
  const { condition, hour, icon_url, temp} = props.props;
  return (
    <div className="card">
      <h3>{hour}:00</h3>
      <img src={icon_url}/>
      <p>{temp}</p>
    </div>
  );
}

export default Card;
