import React, { Component } from 'react';
import './styles/Card.css';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
 if (props.props.lowTemp) {
  const { dayOfWeek, highTemp, monthName, date, lowTemp, icon_url} = props.props;
  return (
    <div className={props.className}>
      <h3 className="date">{dayOfWeek} | {monthName} {date}</h3>
      <h3>{highTemp} &#8457;</h3> 
      <h3>{lowTemp} &#8457;</h3>
      <img src={icon_url}/>
    </div>
  )
 } else {
  const { hour, temp, icon_url } = props.props;
  return (
    <div className={props.className}>
      <h3>{hour}</h3> 
      <h3>{temp} &#8457;</h3>
      <img src={icon_url}/>
    </div>
    )
 }
}



export default Card;
