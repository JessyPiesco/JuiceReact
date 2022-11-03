import React from "react";

const Tags = (props) => {
  const tags =props.tags

  return (
    <div>
    <div>{tags.map((tag)=>{
      return (
        <div key={`tag-${tag.id}`}> {tag.name}</div>
      )
    })} </div></div>
  );
};

export default Tags;
