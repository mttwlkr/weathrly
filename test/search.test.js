import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from '../lib/components/Search';
import {data} from '../lib/components/data';
import PropTypes from 'prop-types';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Search/>);
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with initial state of no city and no suggestions', () => {
    expect(wrapper.state().city).toEqual(undefined)
    expect(wrapper.state().suggestions).toEqual([])
  })

  it('should render its elements', () => {
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('datalist').length).toEqual(1)    
    expect(wrapper.find('button').length).toEqual(1)
  })

  it('should not show suggestions if nothing has been entered', () => {
    expect(wrapper.find('input').value).toEqual(undefined)
    expect(wrapper.state().suggestions).toEqual([])
    expect(wrapper.find('option').length).toEqual(0)
  })

  it('should not show suggestions when there are no matches to input', () => {
    expect(wrapper.find('option').length).toEqual(0)
    wrapper.find('input').simulate('change', {target: {value: 'Mars'}})
    expect(wrapper.state().suggestions).toEqual([])
    expect(wrapper.find('option').length).toEqual(0)
  })

  it('should have suggestions when text has been entered and there are matches', () => {
    expect(wrapper.state().suggestions).toEqual([])
    wrapper.find('input').simulate('change', {target: {value: 'Den'}})
    expect(wrapper.state().suggestions).toEqual(['Denver, CO', 'Denton, TX'])
  })

  it('should show suggestions when text has been entered and there are matches', () => {
    expect(wrapper.find('option').length).toEqual(0)
    wrapper.find('input').simulate('change', {target: {value: 'Den'}})
    expect(wrapper.state().suggestions).toEqual(['Denver, CO', 'Denton, TX'])
    expect(wrapper.find('option').length).toEqual(2)
  })

})

