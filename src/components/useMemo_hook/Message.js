import React, { memo, useMemo } from "react";

const Message = ({ mesage, handleIncr }) => {
  console.log("message rendering");

  const calculatedNum = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 50000000; index++) {
      number++;
    }
    return number;
  }, []);
  return (
    <div>
      <h2>Number:{calculatedNum}</h2>
      <p>send{mesage}message</p>
      <button onClick={handleIncr}>MessageIncr</button>
    </div>
  );
};

export default memo(Message);
