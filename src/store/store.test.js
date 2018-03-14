import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as uiActions from '../actions/uiActions';

describe('Store', () => {
  it('Should handle data changes', () => {
    const store = createStore(rootReducer, initialState);
    const selectedTeam = 2306;
    const selectedGroup = 23719;

    const selectTeamAction = uiActions.selectTeam(selectedTeam, selectedGroup);
    store.dispatch(selectTeamAction);

    const startAJAXcallAction = uiActions.startAJAXcall('teams');
    store.dispatch(startAJAXcallAction);

    let actual = store.getState();
    expect(actual.ui.selectedTeam).toEqual(selectedTeam);
    expect(actual.ui.selectedGroup).toEqual(selectedGroup);
    expect(actual.ui.requests.teams).toEqual(1);

    const endAJAXcallAction = uiActions.endAJAXcall('teams');
    store.dispatch(endAJAXcallAction);
    actual = store.getState();
    expect(actual.ui.requests.teams).toEqual(0);

  });

});
