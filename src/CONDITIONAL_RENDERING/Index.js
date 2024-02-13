import React, { Component } from "react";
import "../components/index.css";
import Home from "./home-page";
import Login from "./Login-page";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    // let element;
    // if (isLoggedIn) {
    //   element = <Home />;
    // } else {
    //   element = <Login />;
    // }
    // return <div>{element}</div>;

    return <div>{isLoggedIn ? <Home /> : <Login />}</div>;

    // let element = isLoggedIn ? <Home /> : <Login />;
    // return <div>{element}</div>;
  }
}
