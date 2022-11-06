import React, { useEffect, useState } from "react";
import { getPosts } from "../apiFunctions";
import { NavLink, useResolvedPath } from "react-router-dom";
import {Tags} from "./"

const Posts = (props) => {
const posts = props.posts
const tags =props.tags

  return (
    <div>
    <div id="posts">
      <h2>Your Posts</h2>
      <NavLink to="/makepost"> New Post </NavLink>
    </div>
    <div id="posts">{posts.map((post)=>{
        console.log(post, "line 17")
      return(
    <div className="IPosts" key={`post-${post.id}`}>
    <div>{post.title}</div>
    <div>Created by: {post.author.username}</div>
    <div>{post.content}</div>
    <Tags tags={post.tags}/>

    </div>)

    })}</div>

    </div>
  );
};

export default Posts;
