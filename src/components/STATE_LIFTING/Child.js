import React from "react";

export default function Child(props) {
  const data2 = "i am from child";
  props.onChild(data2);
  return (
    <div>
      <h1>Hello</h1>
      <p>{props.data}</p>
    </div>
  );
}
