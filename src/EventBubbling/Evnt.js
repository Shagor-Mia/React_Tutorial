import React from "react";
import "../components/index.css";

export default function Event() {
  const ChildClick = (event) => {
    event.stopPropagation();
    console.log("child event", event);
  };
  const ParentClick = (event) => {
    console.log("parent event", event);
  };
  return (
    <div className="parent" onClick={ParentClick}>
      <h1>Welcome Everyone</h1>
      <button onClick={ChildClick}>+</button>
    </div>
  );
}
