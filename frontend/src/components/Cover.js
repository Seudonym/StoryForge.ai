import React from "react";

function CenteredImage({ imageUrl, alt }) {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <img src={imageUrl} alt={alt} className="h-72" />
    </div>
  );
}

export default CenteredImage;
