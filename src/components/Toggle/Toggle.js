import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        borderRadius: "0.3rem",
        backgroundColor: "pink",
      }}
    >
      {toggle && (
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          style={{
            margin: "0.3rem",
            padding: "0.5rem",
            borderRadius: "0.3rem",
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
