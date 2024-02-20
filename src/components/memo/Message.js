import React, { memo } from "react";

const Message = ({ mesage }) => {
  console.log("message rendering");
  return <p>send{mesage}message</p>;
};

export default memo(Message);
