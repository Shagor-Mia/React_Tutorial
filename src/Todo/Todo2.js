import React from "react";

export default function Todo2(props) {
  props.onTodo2({ title: "I am new Todo." });
  return (
    <div>
      <h1>New Todo</h1>
    </div>
  );
}
