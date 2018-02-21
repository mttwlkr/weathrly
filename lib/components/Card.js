import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {

  let propKeys = Object.keys(props.temp)
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <img src={props.icon}/>
      {propKeys.map(temp => 
        <p>{props.temp[temp]}</p>
      )
    }


    </div>
  );
}

export default Card;
