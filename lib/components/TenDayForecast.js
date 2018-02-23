import React, { Component } from 'react';
import Card from './Card';

const TenDayForecast = (props) => {
  const { tenDayArr } = props.weather
  return (
    <div className="TenDayForecastDiv">
      <h2 className="tenDayHeader">10 Day Forecast</h2>
      <div className="tenDayGrid">
        { tenDayArr.map (( day, idx ) => {
          return <Card className={'tenDayCard'} 
          img={day.icon_url} 
          array={[
            <h3>{day.dayOfWeek}</h3>,
            <h3>High: {day.highTemp}</h3>, 
            <h3>{day.monthName} {day.date}</h3>, 
            <p>{day.condition}</p>,
            <h3>Low: {day.lowTemp}</h3>]} 
          />
          })
        }
      </div>
    </div>
  );
}

export default TenDayForecast;