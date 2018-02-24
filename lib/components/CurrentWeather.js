import React, { Component } from 'react';
import './styles/CurrentWeather.css';
import {iconCleaner} from './iconCleaner';


const CurrentWeather = (props) => {

  const {location, temp, conditions, currentDate, day, icon, explanation, low, high} = props.weather;

  return (
    <div className="mainDiv">
      <div className="locationDiv">
        <h3 className="currentLocation">{location}</h3>
        <h3 className="currentDate">{currentDate}</h3>
      </div>
      <h3 className="temp">CURRENT</h3>
      <h3 className="tempData">{temp}F</h3>
      <h3 className="wind">HIGH</h3>
      <img className="weatherIcon" src={iconCleaner(day, conditions)} />
      <h3 className="windData">{high} &#8457;</h3>
      <h3 className="humidity">LOW</h3>
      <h3 className="humidityData">{low} &#8457;</h3>  
      <h3 className="weatherSummary">{explanation}</h3>
    </div>
  );
}

export default CurrentWeather;
