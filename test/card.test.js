import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../lib/components/Card';
import {sevenHourCleaner} from '../lib/components/sevenHourCleaner';
import {tenDayCleaner} from '../lib/components/tenDayCleaner';
import {data} from '../lib/components/data';

describe('Card', () => {
  let wrapper;
  let cleanData;

  beforeEach(() => {
    cleanData = sevenHourCleaner(data)
    wrapper = mount(<Card props={cleanData} />);
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

})