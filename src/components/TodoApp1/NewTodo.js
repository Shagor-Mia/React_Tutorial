import React, { useState } from "react";

export default function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const HandleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const HandleSub = (e) => {
    e.preventDefault();
    props.onTodo(todo);
  };

  return (
    <div>
      <form onSubmit={HandleSub}>
        <label> NewTodo: </label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={HandleInputChange}
        />
        <button>Add tod</button>
      </form>
    </div>
  );
}
