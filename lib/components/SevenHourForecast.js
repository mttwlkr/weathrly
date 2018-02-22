import React, { Component } from 'react';
import Card from './Card';
import './styles/SevenHourForecast.css';

const SevenHourForecast = (props) => {
  const { sevenHourArr } = props.weather
  return (
    <div className="sevenHourDiv">
      <div className="sevenHourHeader">7 Hour Forecast</div>
      <div className="sevenHourGrid">
        { sevenHourArr.map ((hour, idx) => {
          return <Card className={'sevenHourCard'} 
          img={hour.icon_url} 
          array={[<h2>{hour.hour}:00</h2>, 
          <h3>{hour.temp} F</h3>, 
          <p>{hour.condition}</p>]}
          />
        })
        } 
      </div>
    </div>
  );
}

export default SevenHourForecast;