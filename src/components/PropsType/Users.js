import React, { useState } from "react";
import User from "./User";

export default function Users() {
  const [user, setUser] = useState({
    name: "Shagor mia",
    id: 12321,
  });

  return (
    <>
      <h2>Users</h2>
      <User user={user} />
    </>
  );
}
