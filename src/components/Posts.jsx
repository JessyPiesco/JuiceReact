import React, { useEffect, useState } from "react";
import { getPosts, deletePost} from "../apiFunctions";
import { NavLink, useResolvedPath } from "react-router-dom";
import {Tags} from "./"

const Posts = (props) => {
const posts = props.posts
const tags =props.tags

async function handleDelete(event) {
  event.preventDefault()
  const toDelete = event.target.posts.id
  const token = localStorage.getItem('token')
  const deleted = await deletePost(token)
  // if(deleted.success){
  //   navigate("/")
  // }
  console.log("DeletePost", deletePost)
  console.log(deleted)
}

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

    <button onClick={(event)=>{handleDelete(event)}}>delete post</button>

    </div>)

    })}</div>

    </div>
  );
};

export default Posts;
