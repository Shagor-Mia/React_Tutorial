import React, { useCallback, useState } from "react";
import Message from "./Message";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [Toggle, setToggle] = useState(false);
  console.log("rendering");

  const handleIncr = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      {Toggle ? "On" : "Off"}
      <button
        onClick={() => {
          setToggle(!Toggle);
        }}
      >
        Toggle
      </button>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incr
      </button>
      <Message mesage={count} handleIncr={handleIncr} />
    </div>
  );
}
