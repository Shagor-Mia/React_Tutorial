import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogData } from "../data";

function Blogs() {
  const navigate = useNavigate();
  const [blogs] = useState(blogData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="all">
      <h1>Blog Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More...
              </Link>
            </article>
          );
        })}
      </section>
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

export default Blogs;
