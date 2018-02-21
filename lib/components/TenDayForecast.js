import React, { Component } from 'react';
import Card from './Card';

const TenDayForecast = (props) => {
  const { tenDayArr } = props.weather
  return (
    <div className="TenDayForecastDiv">
      <div className="tenDayHeader">10 Day Forecast</div>
      <div className="tenDayGrid">
        { tenDayArr.map (( dayObj ) => {
          const { lowTemp, highTemp } = dayObj;
          const temperature = { lowTemp, highTemp };
          return <Card className='tenDayCard' title={dayObj.dayOfWeek} icon={dayObj.icon_url} temp={temperature}/>
        })

        }

      </div>
    </div>
  );
}

export default TenDayForecast;