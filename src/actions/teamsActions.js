import * as types from './actionTypes';
import * as uiActions from './uiActions';
import sportlinkApi from './../api/sportlinkApi';

export function getAllTeams() {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall('teams'));
    return sportlinkApi.getAllTeams()
      .then( response => {
        dispatch(uiActions.endAJAXcall('teams'));
        dispatch(getTeamsSuccess(response.data));
      })
      .catch( error => {
        dispatch(uiActions.endAJAXcall('teams'));
        throw(error);
      });
  };
}

export function getTeamsSuccess(teams) {
  return { type: types.GET_TEAMS_SUCCESS, teams };
}
