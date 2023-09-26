// src/reducers/index.js
const initialState = {
    count: 0,
    randomNumber: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1,
        };
      case 'FETCH_RANDOM_NUMBER':
        return {
          ...state,
          randomNumber: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  