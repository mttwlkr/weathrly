import React from 'react';
import Card from './Card';
import './styles/TenDayForecast.css';
import PropTypes from 'prop-types';

const TenDayForecast = (props) => {
  const { tenDayArr } = props.weather;

  return (
    <div className="TenDayForecastDiv">
      <h2 className="tenDayHeader">10 Day Forecast</h2>
      <div className="tenDayGrid">
        { tenDayArr.map (( day, idx ) => {
          return <Card day={day} key={idx} />;
        })
        }
      </div>
    </div>
  );
};

TenDayForecast.propTypes = {
  weather: PropTypes.object
};

export default TenDayForecast;