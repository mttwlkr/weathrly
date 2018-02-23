import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../lib/components/App'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with initial state of no city and no currentWeather', () => {
    expect(wrapper.state().city).toEqual('')
    expect(wrapper.state().currentWeather).toEqual([])
  })

  it('should get city info from search bar', () => {
    wrapper.instance().getWeather = jest.fn()


    expect(wrapper.state().city).toEqual('');
    wrapper.instance().getCity('Miami, FL');
    expect(wrapper.state().city).toEqual('Miami, FL');

      //should pull from local storage
  })

  it('should render search bar, current weather, seven hour and ten day', () => {
    expect(wrapper.find('Search').length).toEqual(1);
    // expect(wrapper.find('CurrentWeather').length).toEqual(1);
    // expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    // expect(wrapper.find('TenDayForecast').length).toEqual(1);

  })
  

})