import React, {useState} from "react";

const MakePost = (props) => {
const [title, setTitle]= useState("")
const [content, setContent]=useState("")
const [tags, setTags]= useState("")

  return (
  <form>
      <input placeholder="Title"></input>
      <input placeholder="Content"></input>
      <input placeholder="Tags"></input>
      <button type="submit">Submit</button>

  </form>
  );
};

export default MakePost;
