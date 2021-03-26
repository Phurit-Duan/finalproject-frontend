import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import React, {useState} from "react";

import "./Chatbot.css";
import ChatListBot from "./ChatbotInput";
import ChatbotLoadingImage from "./images/ChatbotMagnify.svg"

function Chatbot (){
    var num=1;
    const chatListUser = [];
    const chatListBot = [];
    const [textUser, setTextUser] = React.useState("");
    const [textBot, setTextBot] = React.useState("");
    const [chatUser1, setChatUser1] = useState({ text: "", open: false});
    const [chatBot1, setChatBot1] = useState({ text: "", open: false});
    const [chatUser2, setChatUser2] = useState({ text: "", open: false});
    const [chatBot2, setChatBot2] = useState({ text: "", open: false});
    const [chatUser3, setChatUser3] = useState({ text: "", open: false});
    const [chatBot3, setChatBot3] = useState({ text: "", open: false});
    const [showLoading, setShowLoading] = React.useState(false)
    const ShowLoading = () => (<img src={ChatbotLoadingImage} className="ChatbotLoadingImage" alt=""/>)
    
    const handleChange = e => {
        setTextUser(e.target.value);
    };
    const handleSubmit = e => {

        e.preventDefault();
        if(textUser==""){
            console.log("blank")
        }
        else{
            setShowLoading(true);
            if(num==1){
                const textUser1 = textUser;
                setChatUser1({ text: textUser1, open: true})
            }
            else if(num==2){
                const textUser2 = textUser;
                setChatUser2({ text: textUser2, open: true})
            }

            else if(num==3){
                const textUser3 = textUser;
                setChatUser3({ text: textUser3, open: true})
            }

            const formData = new FormData();
            formData.append("text", textUser);
            axios.post(`http://127.0.0.1:8000/test_text/`,formData)
            .then(res => {
                setShowLoading(false);
                setTextBot("Result = " + res.data.result);
                if(num==1){
                    const textBot1 = textBot;
                    setChatBot1({ text: textBot1, open: true})
                }
                else if(num==2){
                    const textBot2 = textBot;
                    setChatBot1({ text: textBot2, open: true})
                }
                else if(num==3){
                    const textBot3 = textBot;
                    setChatBot1({ text: textBot3, open: true})
                }
            })
            .catch((error) => {
                setShowLoading(false);
                setTextBot("Error !!")
                if(num==1){
                    const textBot1 = textBot;
                    setChatBot1({ text: textBot1, open: true})
                }
                else if(num==2){
                    const textBot2 = textBot;
                    setChatBot1({ text: textBot2, open: true})
                }
                else if(num==3){
                    const textBot3 = textBot;
                    setChatBot1({ text: textBot3, open: true})
                } 
            
            })
            setTextUser("") 
            num=num+1; 
            console.log(num)   
        }
        
        
    }

    const ChatUser1 = () => (<div className="ChatUser1">{chatUser1.text}</div>)
    const ChatUser2 = () => (<div className="ChatUser2">{chatUser2.text}</div>)
    const ChatUser3 = () => (<div className="ChatUser3">{chatUser3.text}</div>)
    const ChatBot1 = () => (<div className="ChatBot1">{chatBot1.text}</div>)
    const ChatBot2 = () => (<div className="ChatBot2">{chatBot2.text}</div>)
    const ChatBot3 = () => (<div className="ChatBot3">{chatBot3.text}</div>)
    



    
    return(
        <div>
            <label className="ChatbotPage"></label>            <h1 className="ChatbotHead">Chatbot</h1>
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
            { chatUser1.open ? <ChatUser1/> : null }
            { chatBot1.open ? <ChatBot1/> : null }
            { chatUser2.open ? <ChatUser2/> : null }
            { chatBot2.open ? <ChatBot2/> : null }
            { chatUser3.open ? <ChatUser3/> : null }
            { chatBot3.open ? <ChatBot3/> : null }
        </div>
    );
}
export default Chatbot;