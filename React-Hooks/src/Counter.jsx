import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const decrementCount = () => {
    setCount((c) => c - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>Increment count</button>
      <button onClick={decrementCount}>Decrement count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  );
};

export default Counter;
