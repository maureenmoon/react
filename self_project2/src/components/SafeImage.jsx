import React from "react";

function SafeImage({ src, alt, className }) {
  const safeSrc = src && src.trim() !== "" ? src : "/images/defaultImg.png";

  return <img src={safeSrc} alt={alt || "Image"} className={className} />;
}

export default SafeImage;
