import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const DummyToDo = ["todo1", "todo2"];
const Home = () => {
  const [ToDo, setTodos] = useState(DummyToDo);

  const HandleNewTodo = (NewTODO) => {
    setTodos([...ToDo, NewTODO]);
  };
  return (
    <div>
      <NewTodo onTodo={HandleNewTodo} />
      <Todos todos={ToDo} />
    </div>
  );
};
export default Home;
