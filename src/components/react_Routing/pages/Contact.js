import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="all">
      <h2>Contact Page</h2>
      <p>hello .this is contact page for you.</p>
      <p>you can contact frome this page.</p>
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to homepage
      </button>
    </div>
  );
}

export default Contact;
