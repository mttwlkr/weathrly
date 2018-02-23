import React, { Component } from 'react';
import Card from './Card';

const TenDayForecast = (props) => {
  const { tenDayArr } = props.weather
  return (
    <div className="TenDayForecastDiv">
      <div className="tenDayHeader">10 Day Forecast</div>
      <div className="tenDayGrid">
        { tenDayArr.map (( day, idx ) => {
          return <Card className={'tenDayCard'} 
          img={`https://air.plumelabs.com/static/pub/img/${day.condition}.svg`} 
          array={[
            <h2>{day.dayOfWeek}</h2>, 
            <h2>{day.date}</h2>, 
            <h3>High: {day.highTemp}</h3>, 
            <h3>Low: {day.lowTemp}</h3>, 
            <p>{day.condition}</p>]}
          />
        })

        }

      </div>
    </div>
  );
}

export default TenDayForecast;