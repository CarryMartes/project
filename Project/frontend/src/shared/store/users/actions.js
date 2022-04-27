import { actions } from './constants';

export const changeStatus = (payload) => {
  return {
    type: actions.CHANGE_STATUS,
    payload
  };
};

export const changeAuth = (payload) => {
  return {
    type: actions.IS_AUTH,
    payload
  };
};

export const userProfile = (payload) => {
  return {
    type: actions.USER_PROFILE,
    payload
  };
};
