import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Component4() {
  const { user, text } = useContext(UserContext);

  return (
    <div>
      <h4>component4</h4>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <h2>{text}</h2>
    </div>
  );
}
