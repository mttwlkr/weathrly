import React, { Component } from 'react';
import './styles/CurrentWeather.css';

const CurrentWeather = (props) => {
  const {currentHumidity, currentLocation, currentTemp_F, currentWeatherSummary, currentWindMPH, precipTodayIn, icon_url, currentDate, currentTime, icon} = props.weather;
  const base = 'https://i.imgur.com/'
  return (
    <div className="mainDiv">
      <div className="locationDiv">
        <h3 className="currentLocation" style={{color: 'pink'}}>{currentLocation}</h3>
        <h3 className="currentTime">{currentTime}</h3>
      </div>
      <h3 className="temp">TEMP</h3>
      <h3 className="tempData">{currentTemp_F}F</h3>
      <h3 className="wind">WIND</h3>
      <img className="weatherIcon" src={`https://i.imgur.com/${icon}`} />
      <h3 className="windData">{currentWindMPH} MPH</h3>
      <h3 className="humidity">HUMIDITY</h3>
      <h3 className="humidityData">{currentHumidity}</h3>               
    </div>
  );
}

export default CurrentWeather;
