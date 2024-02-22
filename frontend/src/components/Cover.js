import React from "react";

function CenteredImage(props) {
  return (
    <div
      className={`w-full h-72 flex items-center justify-center ${
        props.imgVisible ? "" : "hidden"
      }`}
    >
      <img src={props.imageUrl} alt={props.alt} className="h-72" />
    </div>
  );
}

export default CenteredImage;
