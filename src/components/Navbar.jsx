import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn
  const loggedIn = props.loggedIn
  return (
    <div id="navbar">
      <h2> JuiceBox</h2>
      <div className="links">
      <NavLink id= "npost" to= "/">
        Posts
        </NavLink>
        {loggedIn ?
      (
        <NavLink className="logout" onClick={()=>{
          localStorage.removeItem("token");
          setLoggedIn(false);
        }}>LogOut</NavLink>
      ) :   ( <NavLink id="nlogin" to ="/login">
          Login/Register
        </NavLink>)
      }


      </div>

    </div>
  );
};

export default Navbar;
