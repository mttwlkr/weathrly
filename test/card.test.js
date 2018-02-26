import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../lib/components/Card';
import {sevenHourCleaner} from '../lib/components/sevenHourCleaner';
import {tenDayCleaner} from '../lib/components/tenDayCleaner';
import {data} from '../lib/components/data';
import PropTypes from 'prop-types';

describe('Day Card', () => {

  let wrapper;

  const day = { condition: 'Clear',
    date: '20',
    dayOfWeek: 'Tue',
    highTemp: '53',
    icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
    lowTemp: '32', 
    monthName: 'Feb'
  }

  beforeEach(() => {
    wrapper = shallow(<Card day={day} />)
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should display the day of the week and date', () => {
    expect(wrapper.find('.date').text()).toEqual('Tue | Feb 20')
  })

  it('should display the high temperature', () => {
    expect(wrapper.find('.high').text()).toEqual('53 ℉')
  })

  it('should display the current temperature in Fahrenheit', () => {
    expect(wrapper.find('.low').text()).toEqual('32 ℉')
  })

  it('should display an image of condition', () => {
    expect(wrapper.find('img')).toBeDefined()
  })
})

describe('Hour Card', () => {

  let wrapper;

  const hour = { hour: '12:00 PM',
    temp: '47',
    condition: 'Partly Cloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' 
  }

  beforeEach(() => {
    wrapper = shallow(<Card hour={hour} />)
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should render a card without exploding', () => {
    expect(mount(<Card hour={hour} />).length).toEqual(1);
  })

  it('should render child elements', ()=> {
    expect(wrapper.find('h3').length).toEqual(2)
  })

  it('should pass props through to elements', ()=> {
    expect(wrapper.find('.sevenHour').text()).toEqual('12:00 PM')
    expect(wrapper.find('.sevenTemp').text()).toEqual('47 ℉')
  })

  it('should display an image', () => {
   expect(wrapper.find('img')).toBeDefined()
  })

})