import React, { Component, createRef } from "react";

export default class Userform extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.state = {};
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.userNameRef.current);
    console.log(e.target.elements.UserName.value);
    console.log(e.target.elements.password.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Form-name">
          <label htmlFor="UserName"> UserName:</label>
          <input type="text" id="UserName" ref={this.userNameRef} />
        </div>
        <div className="Form-pass">
          <label htmlFor="password"> Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
