import React from "react";
import User from "./User";
import { UseUsersContext } from "./hooks/UseUsersContext";

export default function Users() {
  const { users } = UseUsersContext();

  return (
    <section className="Users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
}
