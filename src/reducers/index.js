import { combineReducers } from 'redux';
import teamReducer from './teamReducer';
import competitionReducer from './competitionReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  teams : teamReducer,
  competition: competitionReducer,
  ui: uiReducer
});

export default rootReducer;
