import React, {useState} from "react";
import { logInUser } from "../apiFunctions";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({getLoggedInUser}) => {
  const [userName, setUserName]= useState([]);


  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const logingUser = await logInUser(username, password);
    const token = logingUser.token;
    localStorage.setItem("token", token);
    setUserName(userName)
    getLoggedInUser()
    navigate("/");
  }

  return (
    <div id="login">
     <div className="signTitle">Please Sign In</div>
     <form className="signTitle" onSubmit={handleSubmit}>
        <input type="text" placeholder="UserName" className="username"></input>
        <input type="password" placeholder="Password" className="password"></input>
        <button type="submit" className="sButton">
        {" "}
        SUBMIT
        {" "}</button>

     </form>
     <NavLink to="register"> New User </NavLink>
    </div>
  );
};

export default Login;
