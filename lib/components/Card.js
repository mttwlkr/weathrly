import React, { Component } from 'react';
import './styles/Card.css';
import {iconCleaner} from './iconCleaner';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  if (props.day) {
  const { dayOfWeek, condition, highTemp, monthName, date, lowTemp, icon_url} = props.day;

  return (
    <div className="tenDayCard">
      <h3 className="date">{dayOfWeek} | {monthName} {date}</h3>
      <h3 className="high">{highTemp} &#8457;</h3> 
      <h3 className="low">{lowTemp} &#8457;</h3>
      <img src={iconCleaner(true, condition)}/>
    </div>
  )
 } else {
  const { hour, temp, condition, icon_url } = props.hour;

  const checkHour = (hour) => {
    if (hour > 7 && hour < 19) {
      return true;
    } else {
      return false;
    }  
  }

  return (
    <div className="sevenHourCard">
      <h3>{hour}</h3> 
      <h3>{temp} &#8457;</h3>
      <img src={iconCleaner(checkHour(hour), condition)}/>
    </div>
    )
 }
}


export default Card;
