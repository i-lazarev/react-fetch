import React from "react";

//THIS IS A PURE  <COMPONENT | FUNCTION>
export default function Image(props) {
  const imageUrl = "https://picsum.photos/800/600?image=" + props.source.id;
  console.log("Render Image");
  return <img src={imageUrl} alt="This is a pic" />;
}
