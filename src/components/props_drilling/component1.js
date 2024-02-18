import React, { useState } from "react";
import Component2 from "./component2";
import { UserContext } from "./UserContext";

export default function Component1() {
  const [user, setUser] = useState({ id: 101, name: "Shagor" });
  const [text, setText] = useState("this react js.");

  return (
    <div>
      <h2>Component1</h2>
      <UserContext.Provider value={{ user, text }}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
}
