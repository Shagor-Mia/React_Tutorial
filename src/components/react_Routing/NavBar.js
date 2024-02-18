import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="linked">
          Home
        </NavLink>
        <NavLink to="/contact" className="linked">
          Contact
        </NavLink>
        <NavLink to="/blogs" className="linked">
          Blog
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
