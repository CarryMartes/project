import { actions } from './constants';
import { authState } from './state';

export function authReducer(state = authState, action) {
  switch (action.type) {
    case actions.CHANGE_STATUS: {
      return {
        ...state,
        [action.payload.page]: {
          isStudent: action.payload.value
        }
      };
    }
    case actions.IS_AUTH: {
      return {
        ...state,
        isAuth: action.payload
      };
    }
    default:
      return state;
  }
}
