import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import './styles/App.css';
import {weatherDataCleaner} from './cleaner';
import {data} from './data'

class App extends Component {

  render() {
    const cleanData = weatherDataCleaner(data)

    return (
      <div className="App">
        <div className="gradientDiv">
          <Search className="search" />
          <CurrentWeather className="current" 
                          weather={cleanData}/>
        </div>
        <div className="appSevenHourDiv">
        <SevenHourForecast className="sevenHour"
                           weather={cleanData}/>
        </div>
        <TenDayForecast className="tenDay" city="Denver"
                        weather={cleanData}/>
      </div>
    );
  }
}

export default App;


// const denver = { date: 
//    { epoch: '1513814400',
//      pretty: '7:00 PM EST on December 20, 2017',
//      day: 20,
//      month: 12,
//      year: 2017,
//      yday: 353,
//      hour: 19,
//      min: '00',
//      sec: 0,
//      isdst: '0',
//      monthname: 'December',
//      monthname_short: 'Dec',
//      weekday_short: 'Wed',
//      weekday: 'Wednesday',
//      ampm: 'PM',
//      tz_short: 'EST',
//      tz_long: 'America/New_York' },
//   period: 1,
//   high: { fahrenheit: '51', celsius: '11' },
//   low: { fahrenheit: '32', celsius: '0' },
//   conditions: 'Partly Cloudy',
//   icon: 'partlycloudy',
//   icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
//   skyicon: '',
//   pop: 0,
//   qpf_allday: { in: 0, mm: 0 },
//   qpf_day: { in: 0, mm: 0 },
//   qpf_night: { in: 0, mm: 0 },
//   snow_allday: { in: 0, cm: 0 },
//   snow_day: { in: 0, cm: 0 },
//   snow_night: { in: 0, cm: 0 },
//   maxwind: { mph: 15, kph: 24, dir: 'NE', degrees: 42 },
//   avewind: { mph: 11, kph: 18, dir: 'NE', degrees: 42 },
//   avehumidity: 48,
//   maxhumidity: 62,
//   minhumidity: 36 }