// src/actions/index.js
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const fetchRandomNumber = () => {
    return (dispatch) => {
      // Simulate an asynchronous API call (e.g., fetching data from a server)
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        dispatch({
          type: 'FETCH_RANDOM_NUMBER',
          payload: randomNumber,
        });
      }, 1000); // Simulated delay of 1 second
    };
  };
  