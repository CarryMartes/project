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
    default:
      return state;
  }
}
