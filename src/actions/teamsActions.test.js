import expect from 'expect';
import * as teamsActions from './teamsActions';
import * as types from './actionTypes';
import { DUMMYTEAMS } from './../constants';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import initialState from './../reducers/initialState';

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
    // nock('https://data.sportlink.com:443')
    //   .log(console.log)
    //   .get('/teams?teamsoort=bond&gebruiklokaleteamgegevens=NEE&client_id=WuJeuY15Qe')
    //   .reply(200, { body: DUMMYTEAMS });
  });

  it('test should create START_AJAX_CALL and GET_TEAMS_SUCCESS when done', (done) => {

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
      })
      //.catch((e) => console.error(e, null, 2));
  });
})
