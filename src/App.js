import Header from "./Header";
import "./App.css";
import Store from "./Store"; // Import the Store component
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counter"; // Import actions
// import Store from './Store';
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <h1 className="counter-heading">Counter: {count}</h1>
      <div className="button-container">
        <button
          className="increment-button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="decrement-button"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Store />
    </div>
  );
}

export default App;
