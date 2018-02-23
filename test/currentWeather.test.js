import React from 'react';
import {shallow, mount} from 'enzyme';
import CurrentWeather from '../lib/components/CurrentWeather'
import {data} from '../lib/components/data';
import {currentCleaner} from '../lib/components/currentCleaner';

describe.only('CurrentWeather', () => {
  let defaultData;
  let wrapper;

  beforeEach(() => {
    defaultData = currentCleaner(data)
    wrapper = mount (<CurrentWeather weather={defaultData} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display the current location', () => {
    expect(wrapper.find('.currentLocation').text()).toEqual('Louisville, KY')
  })

  it('should display the current time', () => {
    expect(wrapper.find('.currentTime').text()).toEqual('1 1  2 7 AM Local Time')
  })

  it('should display the current temperature in Fahrenheit', () => {
    expect(wrapper.find('.tempData').text()).toEqual('46F')
  })

  it('should display the current wind speed in MPH', () => {
    expect(wrapper.find('.windData').text()).toEqual("1 MPH")
  })

  it('should display the current humidity', () => {
    expect(wrapper.find('.humidityData').text()).toEqual('65%')
  })

  // it('should pass an icon of the current conditions', () => {
  //   expect(wrapper.find('.weatherIcon')).toEqual(icon_url)
  // }) 

})