import React, {useState, useEffect} from "react";
import {Navbar, Posts} from "./"

const Main = () => {
  const [posts, setPosts] = useState([]);
    
  useEffect(() => {
      async function fetchPosts() {
          const allPosts = await getPosts();
          setPosts(allPosts);
      }
      fetchPosts();
  }, [])

  return (
    <div id="main">
<Navbar/>
<Posts posts={posts}/>

  </div>
  );
};

export default Main;


