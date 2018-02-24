import React, { Component } from 'react';
import './styles/CurrentWeather.css';

const CurrentWeather = (props) => {
  const {currentHumidity, currentLocation, currentTemp_F, currentWeatherSummary, currentWindMPH, precipTodayIn, icon_url, currentDate, currentTime, icon, currentExplanation, low, high} = props.weather;
  const base = 'https://i.imgur.com/'
  return (
    <div className="mainDiv">
      <div className="locationDiv">
        <h3 className="currentLocation" style={{color: 'pink'}}>{currentLocation}</h3>
        <h3 className="currentTime">{currentTime}</h3>
        <h3 className="currentDate">{currentDate}</h3>
      </div>
      <h3 className="temp">CURRENT</h3>
      <h3 className="tempData">{currentTemp_F}F</h3>
      <h3 className="wind">HIGH</h3>
      <img className="weatherIcon" src={`https://i.imgur.com/${icon}`} />
      <h3 className="windData">{high} &#8457;</h3>
      <h3 className="humidity">LOW</h3>
      <h3 className="humidityData">{low} &#8457;</h3>  
      <h3 className="weatherSummary">{currentExplanation}</h3>
    </div>
  );
}

export default CurrentWeather;
