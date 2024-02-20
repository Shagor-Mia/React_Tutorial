import React, { useState } from "react";
import Message from "./Message";

export default function Memo() {
  const [count, setCount] = useState(0);
  console.log("rendering");
  return (
    <div>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incr
      </button>
      <Message mesage={count} />
    </div>
  );
}
