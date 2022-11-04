import React from "react";
import { registerUser } from "../apiFunctions";

const Register = (props) => {

  async function handleSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const name = event.target[2].value
    const location = event.target[3].value
    const registeringUser = await registerUser(username, password, name, location)
    
    // const token = registeringUser.token
    // localStorage.removeItem('token')
    // localStorage.setItem('token', token)
  }

  return (
    <div id="registering">
    <div id="signUp"> SIGN UP </div>
    <div>Welcome please create a username and password</div>
    <form id="reg" onSubmit={handleSubmit}>
        <input type="text"  placeholder="UserName" className="username" />
        <input type="password" placeholder="Password" className="username"/>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your location"/>
        <button type="submit"> SUBMIT </button>
    </form>
    </div>
    )
  }

export default Register;
