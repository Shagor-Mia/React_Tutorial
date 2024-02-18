import React, { useRef } from "react";

export default function Useref() {
  const userNameRef = useRef();
  const userPassRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const userPass = userPassRef.current.value;

    console.log(userName);
    console.log(userPass);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">userName:</label>
        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={userPassRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
