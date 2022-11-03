import React, { useEffect, useState } from "react";
import { getPosts } from "../apiFunctions";
import {Tags} from "./"

const Posts = (props) => {
const posts = props.posts
const tags =props.tags

  return (
    <div>
    <div id="posts">
      <h2>Your Posts</h2>
    </div>
    <div id="posts">{posts.map((post)=>{
      return(
    <div className="IPosts" key={`post-${post.id}`}>
    <div> {post.title}</div>
    <div>{post.content}</div>
    <Tags tags={post.tags}/>

    </div>)

    })}</div>

    </div>
  );
};

export default Posts;
