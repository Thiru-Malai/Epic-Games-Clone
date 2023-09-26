// src/reducers/index.js
import { combineReducers } from 'redux';
import gamesReducer from './gameReducers';

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
