import axios from 'axios';
import "./Detect.css";
import React, { useState } from "react";

import "./Detect.css";
import DetectBG from "./images/Detect-BG.png";
import DetectImage from "./images/Detect-Image.png";
import DetectButton_U1 from "./images/Detect-Button-U1.png";
import DetectButton_U2 from "./images/Detect-Button-U2.png";
import DetectButton_N1 from "./images/Detect-Button-N1.png";
import DetectButton_N2 from "./images/Detect-Button-N2.png";

function Detect (){
    const [image, setImage] = useState({ preview: "", raw: "" ,name: ""});
    const [hiddenImage, setHiddenImage] = React.useState(true)

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
                name: e.target.files[0].name
            });
            setHiddenImage(false)
        }
        
    };

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        axios.get(`http://127.0.0.1:8000/test/`)
        .then(res => console.log(res))
        .catch(error => console.err(error));
    };

    const Hidden = () => (
          <img src={DetectImage} className="DetectImage" alt="" ></img>
      )
    
    return(
        <div className="Detect">
            <img src={DetectBG} className="DetectBG" alt="" />
            <label htmlFor="upload-button">
                <img src={DetectButton_U1} className="DetectButton_U" alt=""
                    onMouseOver={(e) => (e.currentTarget.src = DetectButton_U2)}
                    onMouseOut={(e) => (e.currentTarget.src = DetectButton_U1)}>   
                </img>
            </label>
            <input 
                type="file" 
                id="upload-button" 
                style={{ display: "none" }} 
                onChange={handleChange} />
                { hiddenImage ? <Hidden /> : null }
            <label>
                {image.preview ? (
                    <img src={image.preview} alt="" height="16vw" className="ImagePreview" /> ) : 
                    (<span/>)
                }
            </label>
            <img src={DetectButton_N1} className="DetectButton_N" alt="" onClick={handleUpload}
                onMouseOver={(e) => (e.currentTarget.src = DetectButton_N2)}
                onMouseOut={(e) => (e.currentTarget.src = DetectButton_N1)}>
            </img>
        </div>
    );
}
export default Detect;
