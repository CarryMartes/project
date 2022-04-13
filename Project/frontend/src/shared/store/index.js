import { combineReducers, createStore } from '@reduxjs/toolkit';
import userReducers from './users';

const _reducers = combineReducers(userReducers);

const store = createStore(_reducers);

export default store;
