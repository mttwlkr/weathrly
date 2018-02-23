import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
 if (props.props.lowTemp) {
  const { dayOfWeek, highTemp, monthName, date, lowTemp, icon_url} = props.props;
  return (
    <div className={props.className}>
      <h3>{dayOfWeek}</h3>
      <h3>High: {highTemp}</h3> 
      <h3>{monthName} {date}</h3> 
      <h3>Low: {lowTemp}</h3>
      <img src={icon_url}/>
    </div>
  )
 } else {
  const { hour, temp, icon_url } = props.props;
  return (
    <div className={props.className}>
      <h3>{hour}:00</h3> 
      <h2>{temp} F</h2>
      <img src={icon_url}/>
    </div>
    )
 }
}



export default Card;
