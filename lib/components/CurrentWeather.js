import React, { Component } from 'react';
import Card from './Card';

const CurrentWeather = (props) => {
  const {conditions, date, high, low, qpf_allday, avehumidity, avewind} = props.weather
   return (
    <div className="currentWeatherDiv">
      <h1 className="currentConditions">{conditions}</h1>
    </div>
  );
}

export default CurrentWeather;
