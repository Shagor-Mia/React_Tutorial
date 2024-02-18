import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="linked">
        Home
      </NavLink>
      <NavLink to="/add-blog" className="linked">
        Add Blog
      </NavLink>
      <NavLink to="/about" className="linked">
        about
      </NavLink>
    </nav>
  );
}

export default Navbar;
