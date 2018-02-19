import React, { Component } from 'react';
import Card from './Card';

const CurrentWeather = (props) => {
  const {conditions, date, high, low, qpf_allday, avehumidity, avewind, icon_url} = props.weather
   return (
    <div className="currentWeatherDiv">
      <h1> Denver </h1>
      <p className="currentTemp">54 degrees</p>
      <p className="currentWind">54 mph</p>
      <p className="currentHumidity">54 percent</p>
      <img src={icon_url} />
    </div>
  );
}

export default CurrentWeather;
