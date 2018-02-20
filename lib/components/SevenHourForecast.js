import React, { Component } from 'react';
import Card from './Card';
import './styles/SevenHourForecast.css';

const SevenHourForecast = (props) => {
  // PLACEHOLDER VARIABLES, UPDATE WITH NEW DATA
  const { sevenHourArr } = props.weather
  return (
    <div className="sevenHourDiv">
      <div className="sevenHourHeader">7 Hour Forecast</div>
      <div className="sevenHourGrid">
        { sevenHourArr.map((hourObj) => {
          return <Card props={hourObj}/>
        })

        }
                                    
      </div>
    </div>
  );
}

export default SevenHourForecast;