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
import {retrieveWeather} from './api';
import {data} from './data';
import {backgroundCleaner} from './backgroundCleaner';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      currentWeather: []
    }
    this.getCity = this.getCity.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }

  getCity(userInput) {
    this.setState({
      city: userInput,
    }, function() {
      this.getWeather()
    })
  }

  getWeather(){
    let currentCity = this.state.city;
    localStorage.setItem('City', currentCity);
    retrieveWeather(currentCity)
      .then(response => response.json())
      .then(weather => this.setState({
        currentWeather: currentCleaner(weather),
        sevenHour: sevenHourCleaner(weather),
        tenDay: tenDayCleaner(weather),
        background: backgroundCleaner(weather)
        }))
      .catch(error => console.log({error}))
  }

  componentDidMount() {
    const currentCity = localStorage.getItem('City')
    if (currentCity) {
      this.getCity(currentCity)
    }
  }

  render() {
    if (!this.state.city.length) {
      return (
        <div className="App">
          <div className="gradientDiv" style={this.state.background}>
            <Welcome />
            <Search 
              getCity={this.getCity}
              city={this.state.city}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="gradientDiv" style={this.state.background}>
            <Search 
              getCity={this.getCity}
              city={this.state.city}
            />
            {
            this.state.currentWeather &&           
              <CurrentWeather className="current" 
                              weather={this.state.currentWeather}/>
            }
          </div>
          
          {
            this.state.sevenHour && 
            <SevenHourForecast className="sevenHourForecast"
                             weather={this.state.sevenHour}/>
          }
          
          {
            this.state.tenDay &&
            <TenDayForecast className="tenDayForecast"
                          weather={this.state.tenDay}/>
          }
        </div>
      );
    }
  }
}
