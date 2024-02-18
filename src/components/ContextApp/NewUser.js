import React, { useState } from "react";
import { UseUsersContext } from "./hooks/UseUsersContext";

function NewUser() {
  const { setUser } = UseUsersContext();
  const [username, setUsername] = useState("");

  const handleUSerName = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const NewUser = { id: new Date().getTime().toString(), name: username };
    setUser((prevUser) => [...prevUser, NewUser]);
    setUsername("");
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUSerName}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default NewUser;
