import React from "react";
import "./ImageUpload.css";

const ImageWidget = ({ src ,alt}) => {
    console.log("ImageWidget "+ alt)
    return(
        <div>
            <img className="ImageWidget" src={src} alt={alt} />
        </div>
    )
} 

export default ImageWidget;