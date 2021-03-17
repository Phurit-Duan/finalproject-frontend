import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import React, {useState} from "react";
import Chatbot from "react-chatbot-kit";

import "./Chatbot2.css";

import ChatbotLoadingImage from "./images/ChatbotMagnify.svg"

function Chatbots (){
    const chatListUser = [];
    const chatListBot = [];
    const [textUser, setTextUser] = React.useState("");
    const [textBot, setTextBot] = React.useState("");
    const [chatUser, setChatUser] = React.useState(chatListUser);
    const [chatBot, setChatBot] = useState({ text: "", open: false});
    const [showLoading, setShowLoading] = React.useState(false)
    
    const ShowLoading = () => (<img src={ChatbotLoadingImage} className="ChatbotLoadingImage" alt=""/>)
    const ChatBot = () => ( <label className="ChatBot">{chatBot.text}</label>)
    
    const handleChange = e => {
        setTextUser(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(textUser==""){
            console.log("blank")
        }
        else{
            const newChatUser = chatUser.concat({textUser, id: uuidv4() });
            setChatUser(newChatUser);
            setShowLoading(true);
            setChatBot({ text: "", open: true})
            const formData = new FormData();
            formData.append("text", textUser);
            axios.post(`http://127.0.0.1:8000/nlp_test/`,formData)
            .then(res => {
                setShowLoading(false);
                setTextBot("Result = " + res.data.tag); 
                setChatBot({ text: "Result = " + res.data.tag, open: true})
            })
            .catch((error) => {
                setShowLoading(false);
                setChatBot({ text: "Error !!", open: true})
                setTextBot("Error !!")
            })
            setTextUser("")   

        }   
    }
    
    return(
        <div>
            <label className="ChatbotPage"></label>
            <h1 className="ChatbotHead">Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" 
                        value={textUser} 
                        onChange={handleChange} 
                        placeholder="Type your message here..."
                        className="ChatbotInput"/>
                </label>
                <input type="submit" 
                    value="Submit" 
                    className="ChatbotSubmit"
                    />
            </form>
            
            { showLoading ? <ShowLoading /> : null }
            
            
        </div>
    );
}
export default Chatbots;
