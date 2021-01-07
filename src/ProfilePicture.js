import React, {useState} from "react";
import "./ProfilePicture.css"
import photo from "./img/profilePhoto.jpg"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';




export default function ProfilePicture(){
    const [hover, setHover]= useState(false)
    
    useEffect(() => {
      Aos.init({
        duration:1000});}, []);

    function showPhoto() {
        setHover(true);
      
    }

    function hidePhoto() {
        
        setHover(false)
    }
  
    

    if (hover) {
      return (
          <div className="ProfilePicture ">
              <h1>
                  hi, i'm <span data-text="carolina" className={hover ? "name colorActive " : "name"} >carolina</span>
                  </h1>
                <div className="row photo" >
                    <div data-aos="fade-right"  className="col-7 profileText">
                        <br/>
                        <p  className="description">aspiring <span>designer | front-end developer</span>, from Castelo Branco, Portugal.</p>
                    </div>
                    <div data-aos="fade-left"  className="col-5">
                        <img src={photo} alt="carolina" onMouseLeave={hidePhoto}/>
                    </div>
                </div>
            </div>
    )
    } 
    
    else {
        return(
            <div className="ProfilePicture" >
                <h1>
                 hi, i'm <span data-text="carolina" className={hover ? "name colorActive " : "name"} >carolina</span>
                </h1>
                <h2 onMouseEnter={showPhoto} >
                    this is <span className="me">me</span>
                </h2>
            </div>
        )

    }
}
