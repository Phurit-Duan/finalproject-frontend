import axios from "axios";
import React, { useState } from "react";

import "./F_Vision.css";
import "./Footer.css";

import MenuBar from "./MenuBar";
import VisionImage from "./images/Vision-Image.svg";
import VisionButton_U1 from "./images/Vision-Button-U1.png";
import VisionButton_U2 from "./images/Vision-Button-U2.png";
import VisionButton_N1 from "./images/Vision-Button-N1.png";
import VisionButton_N2 from "./images/Vision-Button-N2.png";
import LoadingImage from "./images/Magnify.svg"
import PreviousImage from "./images/Previous.png";

function Amulet (){

    const initialResult = [];
    const [Result, setResult] = React.useState(initialResult);
    const [image, setImage] = useState({ preview: "", raw: "" ,name: "",open: ""});
    const [showImage, setShowImage] = React.useState(true)
    const [showButtons, setShowButtons] = React.useState(true)
    const [showResults, setShowResults] = React.useState(false)
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
        axios.post(`http://35.247.150.245:8000/buai-amulet-process-image/`,formData)
        .then(res => {
            console.log(res.data);
            console.log(res.data.result[0][0]); 
            setShowLoading(false);
            for(var no=1;no<=Object.keys(res.data.result).length;no++){
                console.log(no)
                if(res.data.result[no-1][0] === 'LPS17')
                    initialResult.push(`${no}. หลวงพ่อสุดเสือเผ่น 2517 : ${res.data.result[no-1][2]} %`)
                else if(res.data.result[no-1][0] === 'LPS21')
                    initialResult.push(`${no}. หลวงพ่อสุดเสือเผ่น 2521 : ${res.data.result[no-1][2]} %`)
                else if(res.data.result[no-1][0] === 'LPS23')
                    initialResult.push(`${no}. หลวงพ่อสุดเสือเผ่น 2523 : ${res.data.result[no-1][2]} %`)
                else if(res.data.result[no-1][0] === 'LPS59')
                    initialResult.push(`${no}. หลวงพ่อสุดเสือเผ่น 2529 : ${res.data.result[no-1][2]} %`)
                else if(res.data.result[no-1][0] === 'LPSN')
                    initialResult.push(`${no}. หลวงพ่อสุดเสือเผ่นน้อย : ${res.data.result[no-1][2]} %`)
            }
            setResult(Result.concat(initialResult));
            setShowResults(true);
            setShowPrevious(true);
        })
        .catch((error) => {
            setShowLoading(false);
            setResult(Result.concat("Error"));
            setShowResults(true);
            setShowPrevious(true);
        })
    };

    const ShowButtons = () => (
        <div className="VisionButton">
            <label htmlFor="upload-button">
                <img src={VisionButton_U1} alt=""
                    onMouseOver={(e) => (e.currentTarget.src = VisionButton_U2)}
                    onMouseOut={(e) => (e.currentTarget.src = VisionButton_U1)}>   
                </img>
            </label>
            <img src={VisionButton_N1} alt="" 
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

    const ShowResults = () => (
        <div className="ShowResultAmulet"> 
            <ul>
                {Result.map(item => (
                    <li className="ClassifyResult" key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )

    return(
        <div>
            <MenuBar/>
            <div className="VisionHead">
                <h1>Buddhist Amulet Classification</h1>
                <p className="VisionLineH"></p>
            </div>
            <div className="VisionInfoContainer">
                <h1 className="VisionInfoHead">Buddhist Amulet Classification</h1>
                <div className="VisionInfoText">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    คือ Image Classification ที่จำแนกพระเครื่องทั้งหมด 
                    5 รุ่น ได้แก่ หลวงพ่อสุดเสือเผ่น 2559, หลวงพ่อสุดเสือเผ่น 2517, หลวงพ่อสุด
                    เสือเผ่น 2523, หลวงพ่อสุดเสือเผ่น 2521 และหลวงพ่อสุดเสือเผ่นน้อย  ***การอัปโหลดรูปภาพ ใช้ได้เฉพาะกับนามสกุล .jpg เท่านั้น
                </div>
            </div>
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
                { showResults ? <ShowResults /> : null }
            </div>
            <div className="Footer-V">
            <div className="Footer">
                <h1>Developed by</h1>
                <p>- Faculty of Engineering, Bangkok University</p>
                <div>- The icon "Magnify" is provided by <a href="https://loading.io/icon/" title="Freepik">loading.io</a></div>
                <div>- Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </div>
        </div>
    );
}
export default Amulet;
