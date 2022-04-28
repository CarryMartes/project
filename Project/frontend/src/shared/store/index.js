import { combineReducers, createStore } from '@reduxjs/toolkit';
import { authReducer } from './users/reducers';
import { subjectReducer } from './subjects/reducers';

const _reducers = combineReducers({
  user: authReducer,
  subject: subjectReducer
});

const store = createStore(_reducers);

export default store;
