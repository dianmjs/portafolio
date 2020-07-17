import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-info bg-info">
        <h4 className="navbar-brand navbarTitle ">Diana Marcela Jaramillo</h4>
        <div className="d-flex">
          <NavLink className="btn btn-info mr-2" to="/" exact>
            Home
          </NavLink>
          <NavLink className="btn btn-info mr-2" to="/about">
            About
          </NavLink>
          <NavLink className="btn btn-info mr-2" to="/projects">
            {" "}
            Projects
          </NavLink>
          <NavLink className="btn btn-info mr-2" to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
