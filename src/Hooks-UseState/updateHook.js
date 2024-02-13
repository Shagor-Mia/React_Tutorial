import React, { useState } from "react";

export default function UpdateHooks() {
  const [count, setCount] = useState(0);

  const handleIncr = () => {
    setCount((count) => count + 1); //0+1=1
    setCount((count) => count + 1); //1+1=2
    setCount((count) => count + 1); //2+1=3
  };
  const handleDecr = () => {
    setCount((count) => count - 1); //0+1=1
    setCount((count) => count - 1); //1+1=2
    setCount((count) => count - 1); //2+1=3
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncr} disabled={count === 100 ? true : false}>
        Increment
      </button>
      <button onClick={handleDecr} disabled={count === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}
