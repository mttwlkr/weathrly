import React, { Component } from 'react';
import Card from './Card';

const TenDayForecast = (props) => {
  const {conditions, date, high, low, qpf_allday, avehumidity, avewind} = props.weather
  return (
    <div className="TenDayForecast">
      <h3 className="highTemp">Placeholder</h3>
    </div>
  );
}

export default TenDayForecast;