import React, {useState} from "react";
import { createPost } from "../apiFunctions";

const MakePost = (props) => {
const [title, setTitle]= useState("")
const [content, setContent]=useState("")
const [tags, setTags]= useState("")

async function handleSubmit(event){
// event.preventDefault();
try {
// const token = localStorage.getItem("token");
const newPost = await createPost( title, content, tags)
console.log(newPost, "line 13")
} catch (error) {
  console.log(error)

}
}

  return (
    <div>
  <form onSubmit={(event)=>{
    event.preventDefault();
    handleSubmit()
  }}>
      <input placeholder="Title"
      id="title"
      type="text"
      value= {title}
      onChange={(event) => {
        setTitle(event.target.value)
        console.log(title, "title makepost")
      }}
      required
      />
      <input placeholder="Content"
      id="content"
      type="text"
      value= {content}
      onChange={(event) => {
        setContent(event.target.value)
      }}
      required/>
      <input placeholder="Tags"
      id="tags"
      type="text"
      value= {tags}
      onChange={(event) => {
        setTags(event.target.value)
      }}
      />
      <button onSubmit ={handleSubmit} type="submit">Submit</button>

  </form>
  </div>
  );
};

export default MakePost;
