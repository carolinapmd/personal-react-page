import React from "react";
import "./Contacts.css"
import { FaGithub, FaWhatsapp, FaTelegramPlane,  FaLinkedinIn} from 'react-icons/fa';
import { SiGmail} from 'react-icons/si';



export default function Contacts() {







    return(
        <div className="Contacts">            
            <a href="mailto: carolina.pmd@gmail.com" target="_blank" rel="noreferrer"className="contactIcon">
                <SiGmail /> 
                </a>
            <a  href="https://wa.me/351966973920"  target="_blank" rel="noreferrer" className="contactIcon">
            <FaWhatsapp /> 
                </a>
            <a  href="https://t.me/carolinapmd"  target="_blank" rel="noreferrer" className="contactIcon">
            <FaTelegramPlane /> 
                </a>
            <a  href="https://linkedin.com/in/carolina-domingues"  target="_blank"  rel="noreferrer"className="contactIcon">
            <FaLinkedinIn /> 
                </a>
            <a  href="https://github.com/carolinapmd"  target="_blank"rel="noreferrer" className="contactIcon">
            <FaGithub /> 
                </a>
        </div>
    )
}