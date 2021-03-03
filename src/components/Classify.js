import axios from 'axios';
import React, { useState } from "react";

import "./Detect.css";
import DetectImage from "./images/Detect-Image.png";
import MenuBar from "./MenuBar";
import DetectButton_U1 from "./images/Detect-Button-U1.png";
import DetectButton_U2 from "./images/Detect-Button-U2.png";
import DetectButton_N1 from "./images/Detect-Button-N1.png";
import DetectButton_N2 from "./images/Detect-Button-N2.png";
import LoadingImage from "./images/Magnify.svg"

function Classify (){
    const [image, setImage] = useState({ preview: "", raw: "" ,name: ""});
    const [showImage, setShowImage] = React.useState(true)
    const [showButton, setShowButton] = React.useState(true)
    const [showLoading, setShowLoading] = React.useState(false)
    const [showResult, setShowResult] = useState({ text: "", open: false});

    const DetectImages = () => (<img src={DetectImage} className="DetectImage" alt="" />)
    const ShowLoading = () => (<img src={LoadingImage} className="DetectLoadingImage" alt=""/>)

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
                name: e.target.files[0].name
            });
            setShowImage(false)
        }
    };

    const handleUpload = e => {
        setShowLoading(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        axios.post(`http://127.0.0.1:8000/process_image/`,formData)
        .then(res => {
            console.log(res.data.result); 
            setShowButton(false);
            setShowLoading(false);
            setShowResult({ text: "Result = " + res.data.result[0,0], open: true})
        })
        .catch((error) => {
            setShowButton(false);
            setShowLoading(false);
            setShowResult({ text: "Error", open: true})
        })
    };

    const ShowButton = () => (
        <div>
            <label htmlFor="upload-button">
                <img src={DetectButton_U1} className="DetectButton_U" alt=""
                    onMouseOver={(e) => (e.currentTarget.src = DetectButton_U2)}
                    onMouseOut={(e) => (e.currentTarget.src = DetectButton_U1)}>   
                </img>
            </label>
            <img src={DetectButton_N1} className="DetectButton_N" alt="" onClick={handleUpload}
                onMouseOver={(e) => (e.currentTarget.src = DetectButton_N2)}
                onMouseOut={(e) => (e.currentTarget.src = DetectButton_N1)}>
            </img>
        </div>
    )

    const ShowResult = () => (
        <div className="DetectResult">
            {showResult.text}
        </div>
    )
    
    return(
        <div className="Detect">
            <MenuBar/>
            <div className="DetectFooter"></div>
            <label className="DetectPage"></label>
            <h1 className="DetectHead">Object Classification</h1>
            { showButton ? <ShowButton /> : null }
            { showImage ? <DetectImages /> : null }
            <input 
                type="file" 
                id="upload-button" 
                style={{ display: "none" }} 
                onChange={handleChange} />  
            <label>
                {image.preview ? (
                    <img src={image.preview} alt="" height="16vw" className="ImagePreview" /> ) : 
                    (<span/>)
                }
                { showLoading ? <ShowLoading /> : null }
                { showResult.open ? <ShowResult/> : null }
            </label>
        </div>
    );
}
export default Classify;
