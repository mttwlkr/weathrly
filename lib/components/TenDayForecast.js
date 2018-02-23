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
                        props={day}
          />
          })
        }
      </div>
    </div>
  );
}

export default TenDayForecast;