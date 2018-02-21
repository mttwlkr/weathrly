import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  return (
    <div className={props.className}>
      {props.array.map(( prop, idx ) => {
        return <div key={idx}>{prop}</div>
        }) 
      }
      <img src={props.img} />
    </div>
  );
}

export default Card;
