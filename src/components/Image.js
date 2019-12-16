import React from "react";

//THIS IS A PURE  <COMPONENT | FUNCTION>
export default function Image(props) {
    const {id, author, author_url, post_url}=props.source
  const imageUrl = "https://picsum.photos/800/600?image=" + id
  console.log("Render Image");
  return (<>
  <img src={imageUrl} alt="This is a pic" />
<p><a href={author_url}>{author}</a> | <a href={post_url}>Photo</a></p>
</>)
}
