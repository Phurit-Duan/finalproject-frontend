import React, { useState } from "react";
import axios from "axios";

import "./ImageUpload.css";
import UploadButton1 from "../images/Image-Upload.png";
import UploadButton2 from "../images/Image-Upload2.png";
import CheckButton1 from "../images/Check-Button1.png";
import CheckButton2 from "../images/Check-Button2.png";
import RemoveButton1 from "../images/Remove-Button1.png";
import RemoveButton2 from "../images/Remove-Button2.png";

const ImageUpload = (props) => {
  const ImageList = [];
  const [Image, setImage] = useState({ preview: "", raw: "" ,name: ""});
  const [ImageChat, setImageChat] = useState(ImageList);

  const ImageUpload = [
    {
      text: "upload-button",
      handler: props.actionProvider.createClientMesssage,
      id: "upload-button",
    }
  ];

  const handleChange = e => {
    if (e.target.files.length) {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
            name: e.target.files[0].name
        });
    }
  };

  const ShowButtons = () => (
    <div>
      <img src={RemoveButton1} onClick={RemovePreview} className="ImageButton_R" alt="" 
        onMouseOver={(e) => (e.currentTarget.src = RemoveButton2)}
        onMouseOut={(e) => (e.currentTarget.src = RemoveButton1)}>
      </img>
      <img src={CheckButton1} onClick={handleUpload} className="ImageButton_C" alt=""
        onMouseOver={(e) => (e.currentTarget.src = CheckButton2)}
        onMouseOut={(e) => (e.currentTarget.src = CheckButton1)}>   
      </img>
    </div>
  )

  const RemovePreview = () => {
    setImage({preview: "", raw: "",name: ""})
  }

  const handleUpload = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", Image.raw);
    //axios.post(`http://35.247.150.245:8000/process_image/`,formData)
    axios.post(`http://127.0.0.1:8000/process_image/`,formData)
    .then(res => { 
      const clientMessage = props.actionProvider.createClientMesssage(Image.raw)
      console.log(Image.raw)
      props.actionProvider.setClientMessage(clientMessage)
      ImageList.push(URL.createObjectURL(Image.raw))
      props.actionProvider.handleBotAnswer("Image Classification : "+res.data.result[0][1]+" = "+res.data.result[0][2]+" %")
      setImage({preview: "", raw: "",name: ""});
      setImageChat(ImageChat.concat(ImageList));
    })
    .catch((error) => {
      console.log("Error"); 
      const clientMessage = props.actionProvider.createClientMesssage("Error")
      props.actionProvider.setClientMessage(clientMessage)
      setImage({preview: "", raw: "",name: ""});
    })
  };
  
  const buttonsMarkup = ImageUpload.map((option) => (
    <div>
      <input 
        id="upload-button" 
        type="file" 
        style={{ display: "none" }}
        onChange={handleChange}
      />  
      <label htmlFor="upload-button">
        <img src={UploadButton1} className="UploadButton" alt=""
        onMouseOver={(e) => (e.currentTarget.src = UploadButton2)}
        onMouseOut={(e) => (e.currentTarget.src = UploadButton1)}>   
        </img>
      </label>
    </div>
  ));

  return (
    <div>
      <div className="ImageUploadContainer">{buttonsMarkup}</div>
      {Image.preview ? (
        <div className="ImagePreviewContainer">
          <img src={Image.preview} alt="" className="ImagePreview"/>
          <ShowButtons className="ImageButton" />
        </div> ) : null
      }
      <div className="ImageChatContainer">
        <ul>
          {ImageChat.map(item => (
            <li className="ImageChatList" key={item}><img src={item} alt="" className="ImageChat" ></img></li>
          ))}
        </ul> 
      </div>
    </div>
    );
};

export default ImageUpload;
