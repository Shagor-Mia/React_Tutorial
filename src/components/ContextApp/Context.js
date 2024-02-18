import React, { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { UsersContext } from "./context/UsersContext";

export default function Context() {
  const [users, setUser] = useState([
    { id: 1, name: "Sagor" },
    { id: 2, name: "Amin" },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUser }}>
      <div>
        <h1>Context</h1>
        <NewUser />
        <Users />
      </div>
    </UsersContext.Provider>
  );
}
