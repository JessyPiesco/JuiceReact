import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> JuiceBox</h2>
      <div className="links">
      <NavLink to= "/">
        Posts
        </NavLink>
        <NavLink to ="/login">
          Login/Register
        </NavLink>

      </div>
      
    </div>
  );
};

export default Navbar;
