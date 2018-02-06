import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function teamReducer(state = initialState.teams, action) {
  switch(action.type) {
    case types.GET_TEAMS_SUCCESS :
      return {
        ...state,
        allTeams: action.teams
       };
    default :
      return state;
  }
}
