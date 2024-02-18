import React from "react";
import "./context.css";
import { UseUsersContext } from "./hooks/UseUsersContext";
export default function User({ user }) {
  const { users, setUser } = UseUsersContext();
  const { id, name } = user;

  const handleDelete = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUser(filteredUser);
  };
  return (
    <article className="User">
      <h4>{id}</h4>
      <p>{name}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </article>
  );
}
