import React, { Component } from 'react';
import './styles/Card.css';
import {iconCleaner} from './iconCleaner';

import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
 if (props.props.lowTemp) {
  const { dayOfWeek, condition, highTemp, monthName, date, lowTemp, icon_url} = props.props;
  console.log('Ten Day:', condition)
  return (
    <div className={props.className}>
      <h3 className="date">{dayOfWeek} | {monthName} {date}</h3>
      <h3>{highTemp} &#8457;</h3> 
      <h3>{lowTemp} &#8457;</h3>
      <img src={iconCleaner(true, condition)}/>
    </div>
  )
 } else {
  const { hour, temp, condition, icon_url } = props.props;
  console.log('Seven Hour:', condition)
  return (
    <div className={props.className}>
      <h3>{hour}:00</h3> 
      <h2>{temp} &#8457;</h2>
      <img src={iconCleaner(true, condition)}/>
    </div>
    )
 }
}


export default Card;
