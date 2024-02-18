import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { blogData } from "../data";

function Blog() {
  const { title } = useParams();
  const location = useLocation();

  // const [bodyData, setBodyData] = useState("");
  // useEffect(() => {
  //   const BlogData = blogData.filter((blog) => blog.title === title);
  //   setBodyData(BlogData[0].body);
  // }, []);

  return (
    <div>
      <h1>{title}</h1>
      {/* <p>{bodyData.slice(0, 500)}</p> */}
      <p>{location.state.body.slice(0, 500)}</p>
    </div>
  );
}

export default Blog;
