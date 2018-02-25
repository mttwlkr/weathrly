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
      <h3 className="high">HIGH</h3>
      <img className="weatherIcon" src={iconCleaner(day, conditions)} />
      <h3 className="highData">{high} &#8457;</h3>
      <h3 className="low">LOW</h3>
      <h3 className="lowData">{low} &#8457;</h3>  
      <h3 className="weatherSummary">{explanation}</h3>
    </div>
  );
}

export default CurrentWeather;
