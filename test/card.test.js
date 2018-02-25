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

  // it('Should render without exploding', () => {
  //   expect(
  //     mount(
  //       <Card props={cleanData} />
  //     ).length
  //   ).toEqual(1);
  // })
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

})