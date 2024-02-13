import React from "react";
import propTypes from "prop-types";

export default function User(props) {
  return (
    <>
      <h3> one User</h3>
      <p>props.user</p>
    </>
  );
}

User.propTypes = {
  user: propTypes.object,
};

// User.defaultProps = {
//   name: "default name",
//   id: 0,
// };
