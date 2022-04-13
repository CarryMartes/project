import { actions } from './constants';

export const changeStatus = (payload) => {
  return {
    type: actions.CHANGE_STATUS,
    payload
  };
};
