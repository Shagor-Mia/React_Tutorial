import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Blogs from "./Blogs";
import "./route.css";
import Errors from "./errors";
import Navbar from "../NavBar";
import Blog from "./Blog";
import User from "./User";

export const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="*" element={<Errors />} />
          {/* <Route path="/user/:userid" element={<User />} />
           */}
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
