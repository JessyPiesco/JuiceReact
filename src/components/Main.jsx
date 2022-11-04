import React, {useState, useEffect} from "react";
import { getPosts, getTags, logInUser } from "../apiFunctions";
import {Navbar, Posts, Tags, Login, Register, MakePost} from "./"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Main = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags]= useState([]);
  const [logIn, setLogIn] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  // const [token, setToken] = useState("")

  useEffect(() => {
      async function fetchPosts() {
          const allPosts = await getPosts();
          setPosts(allPosts);
      }
      fetchPosts();
  }, [])

  useEffect(() => {
    async function fetchTags() {
        const allTags = await getTags();
        setTags(allTags);
    }
    fetchTags();
}, [])

const getLoggedInUser = async () => {
  const token =localStorage.getItem("token")
  if (token){
  // const user = await logInUser(localStorage.getItem("token"));
  // setLogIn(user)
  setLoggedIn(true)}
}
useEffect (()=> {
  const token = localStorage.getItem("token")
  if (token){
    getLoggedInUser()
  }
}, [])

  return (
    <div id="main">
<Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />

<Routes>
  <Route path ="/login" element ={<Login getLoggedInUser={getLoggedInUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}/>
  <Route path="/" element={<Posts posts={posts} tags={tags}/>}/>
  <Route path="login/register" element={<Register />} />
  <Route path="/makepost" element={<MakePost/>}/>

</Routes>



  </div>
  );
};

export default Main;
