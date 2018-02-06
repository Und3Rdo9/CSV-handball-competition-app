import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function competitionReducer(state = initialState.competition, action) {
  switch(action.type) {
    case types.GET_SCHEDULE_SUCCESS :
      return {
        ...state,
        schedules: { ...state.schedules, [action.groupId] : action.schedule }
      };
    case types.GET_RESULTS_SUCCESS :
      return {
        ...state,
        results: { ...state.results, [action.groupId] : action.results }
      };
    case types.GET_RANKING_SUCCESS :
      return {
        ...state,
        rankings: { ...state.rankings, [action.groupId] : action.ranking }
      };

    default :
      return state;
  }
}
