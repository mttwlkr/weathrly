import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import './styles/App.css';
import {currentCleaner} from './currentCleaner';
import {sevenHourCleaner} from './sevenHourCleaner';
import {tenDayCleaner} from './tenDayCleaner';
import {data} from './data'

class App extends Component {

  render() {
    const currentCleanData = currentCleaner(data);
    const sevenHourCleanData = sevenHourCleaner(data);
    const tenDayCleanData = tenDayCleaner(data);

    return (
      <div className="App">
        <div className="gradientDiv">
          <Search className="search" />
          <CurrentWeather className="current" 
                          weather={currentCleanData}/>
        </div>
        <SevenHourForecast className="sevenHourForecast"
                           weather={sevenHourCleanData}/>
        <TenDayForecast className="tenDayForecast"
                        weather={tenDayCleanData}/>
      </div>
    );
  }
}

export default App;
