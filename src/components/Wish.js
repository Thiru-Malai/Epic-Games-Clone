import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, fetchRandomNumber } from './index';

function Wish() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const randomNumber = useSelector((state) => state.randomNumber);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleFetchRandomNumber = () => {
    dispatch(fetchRandomNumber());
  };

  return (
    <div>
      <h2>Choose The No Of Games You Want</h2>
      <p>No Of Games: {count}</p>
      <button style={{width: "200px"}} onClick={handleIncrement}>Add Game</button>
      <button style={{width: "200px"}} onClick={handleDecrement}>Remove Game</button>
      <br />
      <br />
      <button style={{width: "200px"}} onClick={handleFetchRandomNumber}>Fetch Random Number</button>
      {randomNumber !== null && <p>Randomize The No Of Games: {randomNumber}</p>}
    </div>
  );
}

export default Wish;