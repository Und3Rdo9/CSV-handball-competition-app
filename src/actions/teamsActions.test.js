import expect from 'expect';
import * as teamsActions from './teamsActions';
import * as types from './actionTypes';
import { DUMMYTEAMS } from './../constants';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import initialState from './../reducers/initialState';
//import jsonfile from 'jsonfile';

describe('Synchronous Team Actions', () => {
  describe('getTeamsSuccess', () => {
    it('should create a GET_TEAMS_SUCCESS action', () => {
      const expectedAction = {
        type: types.GET_TEAMS_SUCCESS,
        teams: DUMMYTEAMS
      };

      const action = teamsActions.getTeamsSuccess(DUMMYTEAMS);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe('Asynchronous Team Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  beforeEach(() => {
    //intercept the API call
    nock('https://data.sportlink.com')
      .get(function(uri) {
        // match endpoint with or without query string params
        // as their usage is subject to change
        return uri.indexOf('/teams') >= 0;
      })
      .reply(200, DUMMYTEAMS);
  });

  it('test should create START_AJAX_CALL and GET_TEAMS_SUCCESS & END_AJAX_CALL when done', (done) => {

    const expectedActions = [
      { type: types.START_AJAX_CALL, label:  'teams' },
      { type: types.END_AJAX_CALL, label: 'teams' },
      { type: types.GET_TEAMS_SUCCESS, teams: DUMMYTEAMS }
    ];

    const store = mockStore(initialState);
    store.dispatch(teamsActions.getAllTeams())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
      // .catch((e) => {
      //   jsonfile.writeFile('/tmp/error.json', JSON.stringify(e, null, 4), {}, (er) => {
      //     if(er) {
      //       console.error(er);
      //     }
      //     else {
      //       console.log('file saved');
      //     }
      //   });
      // });
  });
});
