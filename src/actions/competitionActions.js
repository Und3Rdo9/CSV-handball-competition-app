import * as types from './actionTypes';
import sportlinkApi from './../api/sportlinkApi';
import * as uiActions from './uiActions';

export function getTeamSchedule(team) {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall('schedule'));
    return sportlinkApi.getSchedule(team)
      .then( response => {
        dispatch(getScheduleSuccess(response.data, team));
        dispatch(uiActions.endAJAXcall('schedule'));
      })
      .catch( error => {
        dispatch(uiActions.endAJAXcall('schedule'));
        throw(error);
      });
  };
}

export function getScheduleSuccess(schedule, teamCode) {
  return {
    type: types.GET_SCHEDULE_SUCCESS,
    schedule: schedule,
    teamCode: teamCode
  };
}
