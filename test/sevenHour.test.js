import React from 'react';
import {shallow, mount} from 'enzyme';
import SevenHourForecast from '../lib/components/SevenHourForecast';
import {data} from '../lib/components/data';
import {sevenHourCleaner} from '../lib/components/sevenHourCleaner';


describe('Seven Hour Forecast', () => {
  let wrapper;
  let defaultData;

  beforeEach(() => {
    defaultData = sevenHourCleaner(data)
    wrapper = mount (<SevenHourForecast weather={defaultData}/>);
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Have title that reads "7 Hour Forecast"', () => {
    expect(wrapper.find('.sevenHourHeader').text()).toEqual('7 Hour Forecast')
  })

  it('Makes seven cards"', () => {
    expect(wrapper.find('.sevenHourGrid').children().length).toEqual(7)
  })

})