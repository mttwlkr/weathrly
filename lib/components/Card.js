import React from 'react';
import './styles/Card.css';
import {iconCleaner} from './iconCleaner';
// import TenDayForecast from './TenDayForecast';
// import SevenHourForecast from './SevenHourForecast';

const Card = (props) => {
  if (props.day) {
    const { dayOfWeek, condition, highTemp, monthName, date, lowTemp} = props.day;

    return (
      <div className="tenDayCard">
        <h3 className="date">{dayOfWeek} | {monthName} {date}</h3>
        <h3 className="high">{highTemp} &#8457;</h3> 
        <h3 className="low">{lowTemp} &#8457;</h3>
        <img src={iconCleaner(true, condition)}/>
      </div>
    );
  } else {
    const { military, hour, temp, condition} = props.hour;
    const checkHour = (military) => {
      if (military > 7 && military < 19) {
        return true;
      } else {
        return false;
        }  
    };

    return (
      <div className="sevenHourCard">
        <h3>{hour}</h3> 
        <h3>{temp} &#8457;</h3>
        <img src={iconCleaner(checkHour(military), condition)}/>
      </div>
    );
  }
};


export default Card;
