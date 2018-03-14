import expect from 'expect';
import teamReducer from './teamReducer';
import * as actions from './../actions/teamsActions';
import initialState from './initialState';
import { DUMMYTEAMS } from './../constants';

describe('Team Reducer', () => {
  it('should add result to state when passed GET_TEAMS_SUCCESS', () => {

    const newTeams = DUMMYTEAMS;
    const action = actions.getTeamsSuccess(newTeams);

    const newState = teamReducer(initialState.teams, action);
    expect(newState.allTeams.length).toEqual(DUMMYTEAMS.length);
    expect(newState.allTeams[0].teamcode).toEqual(DUMMYTEAMS[0].teamcode);
    expect(newState.allTeams[34].teamnaam).toEqual(DUMMYTEAMS[34].teamnaam);
  });
});
