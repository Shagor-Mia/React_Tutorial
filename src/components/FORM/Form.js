import React, { useState } from "react";
import "./style.css";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const HandleSubmit = (e) => {
    console.log("form is submitted");
    let userinfo = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userinfo);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration</h1>
      <br />
      <form action="" onSubmit={HandleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
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
            onChange={handleMail}
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
            onChange={handlePass}
            required
          />
        </div>

        <button type="submit" id="btn">
          Register
        </button>
      </form>
    </div>
  );
}
