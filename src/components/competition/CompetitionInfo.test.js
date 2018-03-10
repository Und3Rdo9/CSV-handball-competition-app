import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { CompetitionInfo } from './CompetitionInfo';

describe('Competition Info Component',  () => {
  it('shallow renders markup correctly', () => {
    const props = {
      selectedTeam: 0,
      selectedGroup: 0,
      schedules: {},
      results: {},
      rankings: {},
      requestsInProgress: {},
      actions: {},
    };

    const wrapper = shallow(<CompetitionInfo {...props} />);

    expect(wrapper.find('aside').length).toBe(1);
    expect(wrapper.find('main').length).toBe(1);
  });
});
