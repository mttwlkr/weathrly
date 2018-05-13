import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import './styles/App.css';
import {currentCleaner} from '../helpers/currentCleaner';
import {sevenHourCleaner} from '../helpers/sevenHourCleaner';
import {tenDayCleaner} from '../helpers/tenDayCleaner';
import {retrieveWeather} from '../helpers/api';
import {backgroundCleaner} from '../helpers/backgroundCleaner';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      currentWeather: [],
      error: false
    };
    this.getCity = this.getCity.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  getCity(userInput) {
    this.setState({
      city: userInput,
    }, function() {
      this.getWeather();
    });
  }

  getWeather() {
    let currentCity = this.state.city;

    retrieveWeather(currentCity)
      .then(response => response.json())
      .then(weather => {
        if (weather.forecast) {
          localStorage.setItem('City', currentCity);
          this.setState({currentWeather: currentCleaner(weather),
            sevenHour: sevenHourCleaner(weather),
            tenDay: tenDayCleaner(weather),
            background: backgroundCleaner(weather),
            error: false
          });
        } else {
          this.setState({error: true});
        }
      })
      .catch(error => console.log({error}));
  }

  componentDidMount() {
    const currentCity = localStorage.getItem('City');

    if (currentCity) {
      this.getCity(currentCity);
    }
  }

  render() {
    return (
      <div className="App">
          <Search 
          getCity={this.getCity}
          city={this.state.city}
          />
        { 
          !this.state.city &&
          <div className="welcomeDiv" style={this.state.background}>
            <Welcome />
          </div>  
        } 
        { 
          this.state.city &&
          <div className="gradientDiv" style={this.state.background}>

            {
              this.state.error && 
              <p className="invalidCityWarning">
              Please enter a valid city! (ex. Denver, CO) 
              </p>
            }
            {
              this.state.currentWeather &&           
              <CurrentWeather className="current" 
                weather={this.state.currentWeather}/>
            }
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
        }  
      </div>
    );
  } 
}
