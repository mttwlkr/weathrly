import React from 'react';
import Card from './Card';
import './styles/SevenHourForecast.css';
import PropTypes from 'prop-types';

const SevenHourForecast = (props) => {
  const { sevenHourArr } = props.weather;

  return (
    <div className="sevenHourDiv">
      <h2 className="sevenHourHeader">7 Hour Forecast</h2>
      <div className="sevenHourGrid">
        { sevenHourArr.map ((hour, idx) => {
          return <Card hour={hour} key={idx} />;
        })
        } 
      </div>
    </div>
  );
};

SevenHourForecast.propTypes = {
  weather: PropTypes.object
};


export default SevenHourForecast;