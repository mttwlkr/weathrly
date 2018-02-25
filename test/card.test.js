import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../lib/components/Card';
import {sevenHourCleaner} from '../lib/components/sevenHourCleaner';
import {tenDayCleaner} from '../lib/components/tenDayCleaner';
import {data} from '../lib/components/data';
import PropTypes from 'prop-types';

describe('Card', () => {
  let wrapper;
  let sevenHourCleanData;
  let tenDayCleanData;

  beforeEach(() => {
  })

  it('Should exist', () => {
    sevenHourCleanData = sevenHourCleaner(data)
    wrapper = mount(<Card props={sevenHourCleanData} />); 
    expect(wrapper).toBeDefined();
  })

  // it('Should render without exploding', () => {
  //   expect(
  //     mount(
  //       <Card props={cleanData} />
  //     ).length
  //   ).toEqual(1);
  // })

  it('Should', () => {
    sevenHourCleanData = sevenHourCleaner(data)
    wrapper = mount(<Card props={sevenHourCleanData} />); 
  })

  it('Should', () => {
    tenDayCleanData = tenDayCleaner(data)
    wrapper = mount(<Card props={tenDayCleanData} />); 
    console.log(wrapper.props().tenDayArr)

  })




})