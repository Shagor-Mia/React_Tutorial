import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AddBlog from "../pages/AddBlog";
import Errors from "../pages/Errors";
import Navbar from "../Layout/Navbar";
import "../pages/protected.css";
import Protected from "./Protected";

function Index() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(!isLoggedIn);
          }}
        >
          Log Out{""}
        </button>
      ) : (
        <button
          onClick={() => {
            setLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-blog"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="*" element={<Errors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
