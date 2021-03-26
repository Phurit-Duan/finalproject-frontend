import axios from "axios";
import React, { useState } from "react";

import "./Vision.css";
import VisionImage from "./images/Vision-Image.png";
import MenuBar from "./MenuBar";
import VisionButton_U1 from "./images/Vision-Button-U1.png";
import VisionButton_U2 from "./images/Vision-Button-U2.png";
import VisionButton_N1 from "./images/Vision-Button-N1.png";
import VisionButton_N2 from "./images/Vision-Button-N2.png";
import LoadingImage from "./images/Magnify.svg"
import PreviousImage from "./images/Previous.png";

function Detect (){

    const initialResult = [];
    const [Result, setResult] = React.useState(initialResult);
    const [image, setImage] = useState({ preview: "", raw: "" ,name: "",open: ""});
    const [showImage, setShowImage] = React.useState(true)
    const [showButtons, setShowButtons] = React.useState(true)
    const [showLoading, setShowLoading] = React.useState(false)
    const [showPrevious, setShowPrevious] = React.useState(false)


    const VisionImages = () => (<img src={VisionImage} className="VisionImage" alt="" />)
    const ShowLoading = () => (<img src={LoadingImage} className="VisionLoading" alt=""/>)

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
        setShowButtons(false);
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        axios.post(`http://35.247.150.245:8000/object_detection_api/`,formData)
        .then(res => {
            console.log(res.data.objects); 
            setShowLoading(false);
            var length=1;
            for( var key in res.data.objects) {
                console.log(key)
                if(Object.keys(res.data.objects).length === 1)
                    initialResult.push(key)
                else
                    initialResult.push(length + ". " + key)
                ++length;
            }
            setResult(Result.concat(initialResult));
            setShowPrevious(true);
        })
        .catch((error) => {
            setShowLoading(false);
            setResult(Result.concat("Error"));
            setShowPrevious(true);
        })
    };

    const ShowButtons = () => (
        <div>
            <label htmlFor="upload-button">
                <img src={VisionButton_U1} className="VisionButton_U" alt=""
                    onMouseOver={(e) => (e.currentTarget.src = VisionButton_U2)}
                    onMouseOut={(e) => (e.currentTarget.src = VisionButton_U1)}>   
                </img>
            </label>
            <img src={VisionButton_N1} className="VisionButton_N" alt="" 
                onClick={handleUpload}  
                onMouseOver={(e) => (e.currentTarget.src = VisionButton_N2)}
                onMouseOut={(e) => (e.currentTarget.src = VisionButton_N1)}>
            </img>
        </div>
    )

    const RefeshPage = () => {
        window.location.reload(); 
    }
        
    const ShowPrevious = () => (
        <div>
            <img src={PreviousImage} className="VisionPrevious" alt=""
            onClick={RefeshPage}/>
        </div>
    )

    return(
        <div>
            <MenuBar/>
            <h1 className="VisionHead">Object Detection</h1>
            <div className="VisionContainer">
                { showImage ? <VisionImages /> : null }
                
                <input 
                    type="file" 
                    id="upload-button" 
                    style={{ display: "none" }} 
                    onChange={handleChange} >    
                </input> 
                {image.preview ? (
                    <img src={image.preview} alt="" className="VisionImagePreview" /> ) : 
                    (<span/>)
                }
                { showPrevious ? <ShowPrevious /> : null }
                { showButtons ? <ShowButtons /> : null }
                { showLoading ? <ShowLoading /> : null }
                <ul>
                    {Result.map(item => (
                        <li className="DetectResult" key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="Footer"></div>
        </div>
    );
}
export default Detect;
