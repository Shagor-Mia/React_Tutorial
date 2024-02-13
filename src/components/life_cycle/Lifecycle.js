import React, { Component } from "react";

//Mounting-> constructor->render->DidMounting
//Update:-> props/state -> render ->DidUpdate
//Unmount:

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>Lifecycle</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increase
        </button>
      </>
    );
  }
}
