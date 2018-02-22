import React, { Component } from 'react';
import './styles/CurrentWeather.css';

// const weatherGradient = (currentWeatherSummary) => {
//   switch (currentWeatherSummary) {
//   case 'Partly Cloudy': 'gray';
//     break;
//   case 'sunny': 'orange';
//     break;
//   }
// }

// const dayTime = (currentTime) => {
//     switch (currentTime) {
//   case 'Partly Cloudy': 'gray';
//     break;
//   case 'sunny': 'orange';
//     break;
//   }
// }

const CurrentWeather = (props) => {
  const {currentHumidity, currentLocation, currentTemp_F, currentWeatherSummary, currentWindMPH, precipTodayIn, icon_url, currentTime} = props.weather;
  return (
    <div className="mainDiv">
      <div className="locationDiv">
        <h3>{currentLocation}</h3>
        <h3>March 3</h3>
      </div>
      <h3 className="temp">TEMP</h3>
      <h3 className="tempData">{currentTemp_F}F</h3>
      <h3 className="wind">WIND</h3>
      <img className="weatherIcon" src={icon_url} />
      <h3 className="windData">{currentWindMPH} MPH</h3>
      <h3 className="humidity">HUMIDITY</h3>
      <h3 className="humidityData">{currentHumidity}</h3>               
    </div>
  );
}

export default CurrentWeather;
