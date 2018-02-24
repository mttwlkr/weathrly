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

  it('should display the current date', () => {
    expect(wrapper.find('.currentDate').text()).toEqual('Dec 20')
  })

  it('should display the current temperature in Fahrenheit', () => {
    expect(wrapper.find('.tempData').text()).toEqual('46F')
  })

  it('should display the high temperature for the day', () => {
    expect(wrapper.find('.windData').text()).toEqual("51 ℉")
  })

  it('should display the low temperature for the day', () => {
    expect(wrapper.find('.humidityData').text()).toEqual('32 ℉')
  })

  // it('should pass an icon of the current conditions', () => {
  //   expect(wrapper.find('.weatherIcon')).toEqual(icon_url)
  // }) 

})