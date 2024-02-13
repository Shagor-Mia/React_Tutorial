import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      {console.log("rendering")}
      <h1>Count:{count}</h1>
      <button
        style={{ margin: "1rem", padding: "0.2rem" }}
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
      <button
        style={{ margin: "1rem", padding: "0.2rem" }}
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
      <button
        style={{ margin: "1rem", padding: "0.2rem" }}
        onClick={() => setLoading(!loading)}
      >
        isLoading...
      </button>
    </div>
  );
}

export default UseEffect;
