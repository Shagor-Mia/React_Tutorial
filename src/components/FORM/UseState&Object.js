import React, { useState } from "react";
import "./style.css";
export default function Form2() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const HandleAll = (e) => {
    // const fieldName = e.target.name;
    // if (fieldName === "name") {
    //   setUser({ name: e.target.value, email, password });
    // }
    // if (fieldName === "email") {
    //   setUser({ name, email: e.target.value, password });
    // }
    // if (fieldName === "password") {
    //   setUser({ name, email, password: e.target.value });
    // }

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    console.log("form is submitted");
    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={HandleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={HandleAll}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={HandleAll}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={HandleAll}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
