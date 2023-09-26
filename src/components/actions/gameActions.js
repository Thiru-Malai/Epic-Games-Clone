// src/actions/gamesActions.js
import axios from 'axios';
import { mockGameData } from '../mockData';

// Action Types
export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';

// Action Creators
export const fetchGamesRequest = () => ({
  type: FETCH_GAMES_REQUEST,
});

export const fetchGamesSuccess = (games) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGamesFailure = (error) => ({
  type: FETCH_GAMES_FAILURE,
  payload: error,
});

// Async Action: Fetch Games
export const fetchGames = () => {
  return (dispatch) => {
    dispatch(fetchGamesRequest());
    // Simulate fetching data from a mock API endpoint
    setTimeout(() => {
      dispatch(fetchGamesSuccess(mockGameData));
    }, 2000); // Simulated delay of 2 seconds
  };
};

