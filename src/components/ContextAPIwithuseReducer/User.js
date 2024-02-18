import React from "react";
import "./context.css";
import { UseUsersContext } from "./hooks/UseUsersContext";
export default function User({ user }) {
  const { deleteUser } = UseUsersContext();
  const { id, name } = user;

  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <article className="User">
      <h4>{id}</h4>
      <p>{name}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </article>
  );
}
