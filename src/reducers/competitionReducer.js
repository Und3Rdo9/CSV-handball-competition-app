import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function competitionReducer(state = initialState.competition, action) {
  switch(action.type) {
    case types.GET_SCHEDULE_SUCCESS :
      return {
        ...state,
        schedules: { ...state.schedules, [action.teamCode] : action.schedule }
      };

    default :
      return state;
  }
}
