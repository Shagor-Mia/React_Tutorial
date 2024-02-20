import React, { memo } from "react";

const Message = ({ mesage, handleIncr }) => {
  console.log("message rendering");
  return (
    <div>
      <p>send{mesage}message</p>
      <button onClick={handleIncr}>MessageIncr</button>
    </div>
  );
};

export default memo(Message);
