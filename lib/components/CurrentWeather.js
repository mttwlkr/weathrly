import React, { Component } from 'react';
import './styles/CurrentWeather.css';

const CurrentWeather = (props) => {
  const {currentHumidity, currentLocation, currentTemp_F, currentWeatherSummary, currentWindMPH, precipTodayIn, icon_url} = props.weather
  return (
    <div className="mainDiv">
      <div className="locationDiv">
        <h1>{currentLocation}</h1>
      </div>
      <div className="tempDiv">
        <h4>Temp</h4>
        <h3>{currentTemp_F}F</h3>
      </div>
      <div className="windDiv">
        <h4>Wind</h4>
        <img className="weatherIcon" src={icon_url} />
        <h3>{currentWindMPH}MPH</h3>
      </div>
      <div className="humidityDiv">
        <h4>Humidity</h4>
        <h3>{currentHumidity}</h3>
      </div>                  
    </div>
  );
}

export default CurrentWeather;
