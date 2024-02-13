import React from "react";
import Todos2 from "./Todos2";

export default function Todo(props) {
  console.log(props.todos);
  return (
    <div>
      {props.todos.map((i, index) => (
        <Todos2 key={index} todo={i} />
      ))}
      <h1>I am Todo</h1>
    </div>
  );
}
