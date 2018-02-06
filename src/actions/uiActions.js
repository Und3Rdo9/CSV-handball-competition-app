import * as types from './actionTypes';

export const startAJAXcall = (label = 'global') => {
  return {
    type: types.START_AJAX_CALL,
    label: label
  };
};

export const endAJAXcall = (label = 'global') => {
  return {
    type: types.END_AJAX_CALL,
    label: label
  };
};


export function selectTeam(team, groupId) {
  return { type: types.SELECT_TEAM, selectedTeam: team, groupId: groupId };
}
