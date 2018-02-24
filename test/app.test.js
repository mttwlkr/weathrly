import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../lib/components/App';



describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with initial state of no city and no currentWeather and no errors', () => {
    expect(wrapper.state().city).toEqual('')
    expect(wrapper.state().currentWeather).toEqual([])
    expect(wrapper.state().error).toEqual(false)
  })

  it('should get city info from search bar', () => {
    wrapper.instance().getWeather = jest.fn()

    expect(wrapper.state().city).toEqual('');
    wrapper.instance().getCity('Miami, FL');
    expect(wrapper.state().city).toEqual('Miami, FL');
  })

  it('should retrieve data from local storage on mount', () => {
    wrapper.instance().getWeather = jest.fn()
    wrapper.instance().getCity = jest.fn()
    
    const city = "Denver, CO";
    
    localStorage.setItem('City', city);

    wrapper = mount(<App />);

    expect(wrapper.instance().componentDidMount()).toEqual(city) 
  })



  it('should render search bar, current weather, seven hour and ten day', () => {
    // expect(wrapper.find('Search').length).toEqual(1);
    // expect(wrapper.find('CurrentWeather').length).toEqual(1);
    // expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    // expect(wrapper.find('TenDayForecast').length).toEqual(1);
  })
})