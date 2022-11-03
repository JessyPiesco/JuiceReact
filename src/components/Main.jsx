import React, {useState, useEffect} from "react";
import { getPosts, getTags } from "../apiFunctions";
import {Navbar, Posts, Tags} from "./"


const Main = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags]= useState([])

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

  return (
    <div id="main">
<Navbar/>
<Posts posts={posts} tags={tags} />


  </div>
  );
};

export default Main;
