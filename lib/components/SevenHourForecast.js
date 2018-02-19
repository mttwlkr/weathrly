import React, { Component } from 'react';
import Card from './Card';

const SevenHourForecast = (props) => {
  const {conditions, date, high, low, qpf_allday, avehumidity, avewind} = props.weather
  return (
    <div className="SevenHourForecast">
      <p className="qpf_allday">{qpf_allday.in}</p>
    </div>
  );
}

export default SevenHourForecast;