import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';

function renderHeader() {
  return shallow(<Header />);
}

describe('Header via Enzyme', () => {
  it('renders header and h1', () => {
    const wrapper = renderHeader();
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('CSV Competitie-app');
  });
});
