import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
  let currentRequests = state.requests[action.label];
  switch(action.type) {
    case types.START_AJAX_CALL :
      return {
        ...state,
        requests: {
          ...state.requests, [action.label]: currentRequests + 1
        }
      };
    case types.END_AJAX_CALL :
      return {
        ...state,
        requests: {
          ...state.requests, [action.label]: currentRequests - 1
        }
      };

    default :
      return state;
  }
}
