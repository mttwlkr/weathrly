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

  it('Should instantiate our good friend, Trie', () => {
    
  })

  
})

