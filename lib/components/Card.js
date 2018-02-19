import React, { Component } from 'react';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  const {avewind, conditions, date, low, high, maxhumidity, snow_allday} = props.weather
  return (
    <div className="Card">
      <h1 className="whatevahhh">{conditions}</h1>
    </div>
  );
}

export default Card;
