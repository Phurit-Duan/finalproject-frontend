
import DetectButton_U1 from "./images/Detect-Button-U1.png";
import DetectButton_U2 from "./images/Detect-Button-U2.png";
import DetectButton_N1 from "./images/Detect-Button-N1.png";
import DetectButton_N2 from "./images/Detect-Button-N2.png";

import axios from 'axios';
import "./Detect.css";
import React, { useState } from "react";


export default function DetectUpload() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    axios.post("api/uploadfile", formData);
  };

  const getImage = function (url) {
    return axios
      .get(url, {
        responseType: 'arraybuffer'
      })
      .then(response => new Buffer(response.data, 'binary').toString('base64'))
  }

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" height="16vw" className="ImagePreview" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <img src={DetectButton_U1} className="DetectButton_U" alt=""
              onMouseOver={(e) => (e.currentTarget.src = DetectButton_U2)}
              onMouseOut={(e) => (e.currentTarget.src = DetectButton_U1)}
            />
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <img src={DetectButton_N1} className="DetectButton_N" alt="" onClick={handleUpload}
        onMouseOver={(e) => (e.currentTarget.src = DetectButton_N2)}
        onMouseOut={(e) => (e.currentTarget.src = DetectButton_N1)}
      />
    </div>
    
  );
}