import React, {useState} from "react";

import "./Aspire.css"

export default function Aspire(){
  const [scroll, setScroll]= useState(false)

   function handleScroll() {
     if (window.scrollY >= 3500) {
       setScroll(true);      
     }else {
       setScroll(false)
     }
    }
window.addEventListener("scroll", handleScroll);


      return (  
        <div className="Aspire" >
            <h2  >
            <small>and</small> i aspire to <span className={scroll ? "this colorActive " : "this"} >achieve</span>
            </h2>
         <div className="statement">
           <p>
             my full <span className="emphasis">
               potential
             </span> as a
           </p>
           <p className="roles">
             web designer | front-end developer
           </p>
         </div>
         
         <h4>would love to hear your thoughts.</h4>
         <hr/>
        </div>
      )            
              
}