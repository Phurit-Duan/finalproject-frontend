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
    const [image, setImage] = useState({ preview: "", raw: "" ,name: "",open: ""});
    const [showImage, setShowImage] = React.useState(true)
    const [showButton, setShowButton] = React.useState(true)
    const [showLoading, setShowLoading] = React.useState(false)
    const [showResult1, setShowResult1] = useState({ text: "", open: false});
    const [showResult2, setShowResult2] = useState({ text: "", open: false});
    const [showResult3, setShowResult3] = useState({ text: "", open: false});

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
            setShowResult1({ text: "1. " + res.data.result[0][1]+" : "+res.data.result[0][2]+" %", open: true})
            setShowResult2({ text: "2. " + res.data.result[1][1]+" : "+res.data.result[1][2]+" %", open: true})
            setShowResult3({ text: "3. " + res.data.result[2][1]+" : "+res.data.result[2][2]+" %", open: true})
        })
        .catch((error) => {
            setShowButton(false);
            setShowLoading(false);
            setShowResult1({ text: "Error", open: true})
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

    const ShowResult1 = () => (
        <div>
            <label className="ObjectHeader">Result</label>
            <div className="ObjectResult">
                {showResult1.text}
            </div>
        </div>
    )
    const ShowResult2 = () => (
        <div className="ObjectResult">
            {showResult2.text}
        </div>
    )
    const ShowResult3 = () => (
        <div className="ObjectResult">
            {showResult3.text}
        </div>
    )
    
    return(
        <div className="Object">
            <MenuBar/>
            <div className="ObjectFooter"></div>
            <label className="ObjectPage"></label>
            <h1 className="ObjectHead">Image Classification</h1>
            { showButton ? <ShowButton /> : null }
            { showImage ? <DetectImages /> : null }
            <input 
                type="file" 
                id="upload-button" 
                style={{ display: "none" }} 
                onChange={handleChange} />  
            <label>
                {image.preview ? (
                    <img src={image.preview} alt="" className="ObjectImagePreview" /> ) : 
                    (<span/>)
                }
                { showLoading ? <ShowLoading /> : null }
                { showResult1.open ? <ShowResult1/> : null }
                { showResult2.open ? <ShowResult2/> : null }
                { showResult3.open ? <ShowResult3/> : null }
            </label>
           
        </div>
    );
}
export default Classify;
