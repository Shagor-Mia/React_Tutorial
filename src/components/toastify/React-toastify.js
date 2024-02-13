import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Toastify() {
  const handleNewTodo = () => {
    toast("new todo is added.");
  };
  const handleDeleteTodo = () => {
    toast("new todo is added.");
  };
  return (
    <div style={{ marginTop: "5rem", textAlign: "center" }}>
      <h1>Toastify</h1>
      <button
        style={{ padding: ".3rem", borderRadius: ".5rem", marginRight: "2rem" }}
        onClick={handleNewTodo}
      >
        Add NewTodo
      </button>
      <button
        style={{ padding: ".3rem", borderRadius: ".5rem" }}
        onClick={handleDeleteTodo}
      >
        Delete Todo
      </button>
      <ToastContainer />
    </div>
  );
}
