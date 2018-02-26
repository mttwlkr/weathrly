import React from 'react';
import './styles/Card.css';
import {iconCleaner} from './iconCleaner';
import {checkHour} from './checkHour';
import PropTypes from 'prop-types';

const Card = (props) => {
  if (props.day) {
    const { dayOfWeek, condition, highTemp, monthName, date, lowTemp} 
    = props.day;

    return (
      <div className="tenDayCard">
        <h3 className="date">{dayOfWeek} | {monthName} {date}</h3>
        <h3 className="high">{highTemp} &#8457;</h3> 
        <h3 className="low">{lowTemp} &#8457;</h3>
        <img src={iconCleaner(true, condition)}/>
      </div>
    );
  }

  const { military, hour, temp, condition} = props.hour;

  return (
    <div className="sevenHourCard">
      <h3 className="sevenHour">{hour}</h3> 
      <h3 className="sevenTemp">{temp} &#8457;</h3>
      <img src={iconCleaner(checkHour(military), condition)}/>
    </div>
  );
};

Card.propTypes = {
  day: PropTypes.object,
  hour: PropTypes.object
};

export default Card;
