import React, { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  const [users, setUser] = useState();

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");

    setUser(response.data);
  };

  useEffect(() => {
    getAllUsers();
  });
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <article key={user.id}>
              <h3>FullName: {user.name}</h3>
              <p> Email: {user.email}</p>
            </article>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
