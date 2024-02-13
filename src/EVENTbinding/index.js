import React, { Component } from "react";

export default class EVENTbinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.HandleClick}>increase</button>
      </div>
    );
  }
}
