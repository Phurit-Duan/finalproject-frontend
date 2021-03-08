import axios from 'axios';
import React, { useState } from "react";

import "./Object.css";
import ObjectImage from "./images/Object-Image.png";
import MenuBar from "./MenuBar";
import DetectButton_U1 from "./images/Object-Button-U1.png";
import DetectButton_U2 from "./images/Object-Button-U2.png";
import DetectButton_N1 from "./images/Object-Button-N1.png";
import DetectButton_N2 from "./images/Object-Button-N2.png";
import LoadingImage from "./images/Magnify.svg"

function Classify (){
    const [image, setImage] = useState({ preview: "", raw: "" ,name: ""});
    const [showImage, setShowImage] = React.useState(true)
    const [showButton, setShowButton] = React.useState(true)
    const [showLoading, setShowLoading] = React.useState(false)
    const [showResult, setShowResult] = useState({ text: "", open: false});

    const DetectImages = () => (<img src={ObjectImage} className="ObjectImage" alt="" />)
    const ShowLoading = () => (<img src={LoadingImage} className="ObjectLoadingImage" alt=""/>)

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
            setShowResult({ text: "Result = " + res.data.result[0][2], open: true})
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
                <img src={DetectButton_U1} className="ObjectButton_U" alt=""
                    onMouseOver={(e) => (e.currentTarget.src = DetectButton_U2)}
                    onMouseOut={(e) => (e.currentTarget.src = DetectButton_U1)}>   
                </img>
            </label>
            <img src={DetectButton_N1} className="ObjectButton_N" alt="" onClick={handleUpload}
                onMouseOver={(e) => (e.currentTarget.src = DetectButton_N2)}
                onMouseOut={(e) => (e.currentTarget.src = DetectButton_N1)}>
            </img>
        </div>
    )

    const ShowResult = () => (
        <div className="ObjectResult">
            {showResult.text}
        </div>
    )
    
    return(
        <div className="Object">
            <MenuBar/>
            <div className="ObjectFooter"></div>
            <label className="ObjectPage"></label>
            <h1 className="ObjectHead">Object Classification</h1>
            { showButton ? <ShowButton /> : null }
            { showImage ? <DetectImages /> : null }
            <input 
                type="file" 
                id="upload-button" 
                style={{ display: "none" }} 
                onChange={handleChange} />  
            <label>
                {image.preview ? (
                    <img src={image.preview} alt="" height="16vw" className="ObjectImagePreview" /> ) : 
                    (<span/>)
                }
                { showLoading ? <ShowLoading /> : null }
                { showResult.open ? <ShowResult/> : null }
            </label>
        </div>
    );
}
export default Classify;
