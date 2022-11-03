import React, { useEffect, useState } from "react";
import { getPosts } from "../apiFunctions";

const Posts = () => {
    

  return (
    <div>
    <div id="posts">
      <h2> I am posts</h2>
    </div>
    <div>{user.post.title}</div>
    
    </div>
  );
};

export default Posts;