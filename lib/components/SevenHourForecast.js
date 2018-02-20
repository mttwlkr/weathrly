import React, { Component } from 'react';
import Card from './Card';
import './styles/SevenHourForecast.css';

const SevenHourForecast = (props) => {
  // PLACEHOLDER VARIABLES, UPDATE WITH NEW DATA
  const {currentHumidity, currentLocation, currentTemp_F, currentWeatherSummary, currentWindMPH, precipTodayIn, icon_url} = props.weather
  return (
    <div className="sevenHourDiv">
      <div className="sevenHourHeader">7 Hour Forecast</div>
      <div className="sevenHourGrid">
        <Card img={icon_url} temp={currentTemp_F} />
        <Card img={icon_url} temp={currentTemp_F} />
        <Card img={icon_url} temp={currentTemp_F} />
        <Card img={icon_url} temp={currentTemp_F} />
        <Card img={icon_url} temp={currentTemp_F} />
        <Card img={icon_url} temp={currentTemp_F} />
        <Card img={icon_url} temp={currentTemp_F} />                                        
      </div>
    </div>
  );
}

export default SevenHourForecast;