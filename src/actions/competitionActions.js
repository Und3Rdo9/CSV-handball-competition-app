import * as types from './actionTypes';
import sportlinkApi from './../api/sportlinkApi';
import * as uiActions from './uiActions';

export function getGroupSchedule(groupId) {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall('schedules'));
    return sportlinkApi.getGroupSchedule(groupId)
      .then( response => {
        dispatch(getScheduleSuccess(response.data, groupId));
        dispatch(uiActions.endAJAXcall('schedules'));
      })
      .catch( error => {
        dispatch(uiActions.endAJAXcall('schedules'));
        throw(error);
      });
  };
}

export function getGroupResults(groupId) {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall('results'));
    return sportlinkApi.getGroupResults(groupId)
      .then( response => {
        dispatch(getResultsSuccess(response.data, groupId));
        dispatch(uiActions.endAJAXcall('results'));
      })
      .catch( error => {
        dispatch(uiActions.endAJAXcall('results'));
        throw(error);
      });
  };
}

export function getGroupRanking(groupId) {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall('rankings'));
    return sportlinkApi.getGroupRanking(groupId)
      .then( response => {
        dispatch(getRankingSuccess(response.data, groupId));
        dispatch(uiActions.endAJAXcall('rankings'));
      })
      .catch( error => {
        dispatch(uiActions.endAJAXcall('rankings'));
        throw(error);
      });
  };
}

export function getScheduleSuccess(schedule, groupId) {
  return {
    type: types.GET_SCHEDULE_SUCCESS,
    schedule: schedule,
    groupId: groupId
  };
}

export function getResultsSuccess(results, groupId) {
  return {
    type: types.GET_RESULTS_SUCCESS,
    results,
    groupId
  };
}

export function getRankingSuccess(ranking, groupId) {
  return {
    type: types.GET_RANKING_SUCCESS,
    ranking,
    groupId
  };
}
