import { useState, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // Expensive Calculation
  const factorial = (n) => {
    console.log("Calculating Factorial...");
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // useMemo
  const factorialResult = useMemo(() => {
    return factorial(number);
  }, [number]);

  // useCallback
  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="container">
      <h2>useMemo & useCallback</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h2>Factorial: {factorialResult}</h2>

      <hr />

      <h2>Counter: {count}</h2>

      <button onClick={increaseCount}>Increment Counter</button>
    </div>
  );
}

export default App;