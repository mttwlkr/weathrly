import React from 'react';
import {shallow, mount} from 'enzyme';
import TenDayForecast from '../lib/components/TenDayForecast';
import {data} from '../lib/components/data';
import {tenDayCleaner} from '../lib/components/tenDayCleaner';

describe('Ten Day Forecast', () => {
  let wrapper;
  let defaultData;

  beforeEach(() => {
    defaultData = tenDayCleaner(data)
    wrapper = mount (<TenDayForecast weather={defaultData}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
  
  it('Have title that reads "10 Day Forecast"', () => {
    expect(wrapper.find('.tenDayHeader').text()).toEqual('10 Day Forecast')
  })

  it('Makes ten cards"', () => {
    expect(wrapper.find('.tenDayGrid').children().length).toEqual(10)
  })

})