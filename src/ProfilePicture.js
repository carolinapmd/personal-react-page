import React, {useState} from "react";
import "./ProfilePicture.css"
import photo from "./img/profilePhoto.jpg"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';




export default function ProfilePicture(){
    const [scroll, setScroll]= useState(false)

   function handleScroll() {
     if (window.scrollY >= 10) {
       setScroll(true);      
     }else {
       setScroll(false)
     }
    }
    
    window.addEventListener("scroll", handleScroll);

    
    useEffect(() => {
      Aos.init({
        duration:1000});}, []);

   
    

  
      return (
          <div className="ProfilePicture ">
              <h1>
                  hi, i'm <span data-text="carolina" className={scroll ? "name colorActive " : "name"} >carolina</span>
                  </h1>
                <h2 >
                    this is <span className="me">me</span>
                </h2>
                <div className="row photo" >
                    <div data-aos="fade-right"  className="col-7 profileText">
                        <br/>
                        <p  className="description">aspiring <span>designer | front-end developer</span>, from Castelo Branco, Portugal.</p>
                    </div>
                    <div data-aos="fade-left"  className="col-5">
                        <img src={photo} alt="carolina"/>
                    </div>
                </div>
            </div>
    )
    

}
