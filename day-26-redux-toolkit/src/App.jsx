import {
  increment,
  decrement,
  reset,
  incrementByFive,
  decrementByFive,
} from "./features/counter/counterSlice";

import { useDispatch, useSelector } from "react-redux";

function App() {

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="container">

      <h1>Redux Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(incrementByFive())}>
        +5
      </button>

      <button onClick={() => dispatch(decrementByFive())}>
        -5
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

    </div>
  );
}

export default App;