import React, { useState } from "react";
import "./faq2.css";
export default function FAQ2({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);
  return (
    <article className="faq2">
      <div>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "+" : "-"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
}
