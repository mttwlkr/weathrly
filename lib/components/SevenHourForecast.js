import React, { Component } from 'react';
import Card from './Card';
import './styles/SevenHourForecast.css';

const SevenHourForecast = (props) => {
  const { sevenHourArr } = props.weather
  return (
    <div className="sevenHourDiv">
      <h2 className="sevenHourHeader">7 Hour Forecast</h2>
        <div className="sevenHourGrid">
          { sevenHourArr.map ((hour, idx) => {
            return <Card 
            hour={hour}
            />
            })
          } 
        </div>
    </div>
  );
}

export default SevenHourForecast;