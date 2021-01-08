import React, {useState} from "react";
import {db} from "./firebase"

import "./ContactForm.css"

export default function ContactForm(){
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const[loader, setLoader] = useState(false)
    
    const [scroll, setScroll]= useState(false)

   function handleScroll() {
     if (window.scrollY >= 4000) {
       setScroll(true);      
     }else {
       setScroll(false)
     }
    }
window.addEventListener("scroll", handleScroll);



function handleNameChange(event){
    setName(event.target.value)
}
function handleEmailChange(event){
    setEmail(event.target.value)
}
function handleMessageChange(event){
    setMessage(event.target.value)
}

function handleSubmit(event){
    event.preventDefault();
    setLoader(true)
    db.collection("contacts").add({
        name:name,
        email:email,
        message:message,
    }).then(handleResponse).catch((error)=> {alert(error.message); setLoader(false);
    });

    setName("")
    setEmail("")
    setMessage("")
};

function handleResponse(){
    alert("Thanks for contacting! 👍");
    setLoader(false)
}   



return (  
        <div className="ContactForm" >
            <h2 className="contactMe">
                say <span className={scroll ? "emphasis colorActive " : "emphasis"} >
                    hello
                </span>.
            </h2>
            <form className="form" onSubmit={handleSubmit}>
                <input className="form-control nameInput" placeholder="(your full name)" value={name} onChange={handleNameChange} />
                <input type="email" className="form-control emailInput" placeholder="(your email)" value={email} onChange={handleEmailChange} />
                <textarea className="form-control messageInput" placeholder="(your message)" value={message} onChange={handleMessageChange}  rows="4"></textarea>
                <button type="submit" className="btn btn-light" style={{ background: loader ? "none" : "#cecece"}}>send</button>
            </form>
            
        </div>
            
  )
}