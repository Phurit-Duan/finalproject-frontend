import React, { useState } from "react";
import axios from "axios";

import "./ImageUpload.css";
import UploadButton1 from "../images/Image-Upload_1.svg";
import UploadButton2 from "../images/Image-Upload_2.svg";
import CheckButton1 from "../images/Check-Button_1.svg";
import CheckButton2 from "../images/Check-Button_2.svg";
import RemoveButton1 from "../images/Remove-Button_1.svg";
import RemoveButton2 from "../images/Remove-Button_2.svg";

const ImageUploadTHCash = (props) => {
  const ImageList = [{src: "", alt:""}];
  const [Image, setImage] = useState({ preview: "", raw: "" ,name: ""});
  const [showButton, setShowButton] = React.useState(true)
  const [showButtons, setShowButtons] = React.useState(true)

  const ImageUpload = [
    {
      text: "upload-button-thcash",
      handler: props.actionProvider.createClientMesssage,
      id: "upload-button-thcash",
    }
  ];

  const handleChange = e => {
    setShowButton(false)
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
    const ClientMesssage = props.actionProvider.createClientMesssage("ยกเลิก")
    props.actionProvider.setClientMessage(ClientMesssage)
    props.actionProvider.handleBotAnswer("คุณได้ยกเลิกการทำ Thai Banknotes Detection แล้ว")
  }

  const handleUpload = e => {
    setShowButtons(false)
    e.preventDefault();
    const ClientMesssage = props.actionProvider.createClientMesssage("อัปโหลดรูปภาพ : "+Image.name)
    props.actionProvider.setClientMessage(ClientMesssage)
    const formData = new FormData();
    formData.append("image", Image.raw);
    axios.post(`http://35.247.150.245:8000/buai-banknotes-process-image/`,formData)
    .then(res => {
      console.log(res.data.result)
      setImage({preview: "", raw: "",name: ""});
      var result= ""
      if(res.data.result.length === 0)
      {
        props.actionProvider.handleBotAnswer("ไม่พบธนบัตรไทยในรูปภาพนี้")
      }
      else{
        for( var i in res.data.result) {
          var string = res.data.result[i]
          var spaces = string.search(" ");
          var bath   = string.search("b");
          var number = string.substr(0,spaces)
          var Thcash = string.substr(spaces,bath-1)
          console.log("Thcash "+Thcash)
          console.log(number+" "+Thcash)
          result += "ธนบัตร "+Thcash+" บาท จำนวน "+number+" ใบ"
        }
        ImageList.push({src: Image.raw, alt: Image.name})
        props.actionProvider.handleBotAnswer("รูปนี้มี"+result)
      }
    })
    .catch((error) => {
      setImage({preview: "", raw: "",name: ""});
      const clientMessage = props.actionProvider.createClientMesssage("เกิดข้อผิดพลาด ในการอัปโหลด")
      props.actionProvider.setClientMessage(clientMessage)
      props.actionProvider.handleBotAnswer("ไม่สามารถทำ Thai Banknote Detection ได้")
      
    })
  };

  const UploadPreview = () => (
    <div>
      <input 
        id="upload-button-thcash" 
        type="file" 
        style={{ display: "none" }}
        onChange={handleChange}
        accept=".jpg,.jpeg,.png"
      />  
      <label htmlFor="upload-button-thcash">
        <img src={UploadButton2} className="UploadButton" alt=""
        onMouseOver={(e) => (e.currentTarget.src = UploadButton1)}
        onMouseOut={(e) => (e.currentTarget.src = UploadButton2)}>   
        </img>
      </label>
      <img src={RemoveButton1} className="CancelButton" alt=""
        onClick={CancelButton}
        onMouseOver={(e) => (e.currentTarget.src = RemoveButton2)}
        onMouseOut={(e) => (e.currentTarget.src = RemoveButton1)}>   
        </img>
    </div>
  )

  const CancelButton = () =>{
    setShowButton(false)
    const ClientMesssage = props.actionProvider.createClientMesssage("ยกเลิก")
    props.actionProvider.setClientMessage(ClientMesssage)
    props.actionProvider.handleBotAnswer("คุณได้ยกเลิกการทำ Thai Banknotes Detection แล้ว")
  }
  
  const buttonsMarkup = ImageUpload.map((option) => (
    <div>
      {showButton ? <UploadPreview/> :null}
    </div>
  ));

  return (
    <div className="options-container">
      <div className="ImageUploadThCashContainer">
        {buttonsMarkup}
        {Image.preview ? (
          <div className="ImagePreviewContainer">
            <img src={Image.preview} alt="" className="ImagePreview"/>
            {showButtons ? <div className="ImageButton"><ShowButtons/></div> :null}
          </div> ) : null 
        }
      </div>
    </div>
    );
};
export default ImageUploadTHCash;
