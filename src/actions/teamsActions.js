import * as types from './actionTypes';
import sportlinkApi from './../api/sportlinkApi';

export function getAllTeams() {
  return function(dispatch) {
    return sportlinkApi.getAllTeams()
      .then( response => {
        console.log('teams data:', response.data);
        dispatch(getTeamsSuccess(response.data));
      })
      .catch( error => {
        throw(error);
      });
  };
}

export function getTeamsSuccess(teams) {
  return { type: types.GET_TEAMS_SUCCESS, teams };
}
