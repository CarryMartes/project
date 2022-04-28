import { actions } from './constants';

export const setCurrentSubject = (payload) => {
  return {
    type: actions.SET_CURRENT_SUBJECT,
    payload
  };
};
