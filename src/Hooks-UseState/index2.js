import React, { useState } from "react";
import "./useState.css";

export default function Index2() {
  const [count, setCount] = useState(0);

  const handleIncr = () => {
    setCount(count + 1);
  };
  const handleDecr = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        className="btn"
        onClick={handleIncr}
        disabled={count === 10 ? true : false}
      >
        {" "}
        Increment{" "}
      </button>
      <button
        className="btn"
        onClick={handleDecr}
        disabled={count === 0 ? true : false}
      >
        {" "}
        Decrement{" "}
      </button>
    </div>
  );
}
