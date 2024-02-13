import React, { Component } from "react";

export default class EVENThandlerClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }

  HandleOnChange = (e) => {
    // console.log(e.target.value);
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        console.log(this.state.changeValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.HandleOnChange} />
        <p>{this.state.changeValue}</p>
      </div>
    );
  }
}
