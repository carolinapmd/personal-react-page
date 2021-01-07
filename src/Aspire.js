import React, {useState} from "react";

import "./Aspire.css"

export default function Aspire(){
   const [hover, setHover]= useState(false)

   function handleHover() {
        setHover(true);      
    }

      return (  
        <div className="Aspire" >
            <h2  >
            <small>and</small> i aspire to <span className={hover ? "this colorActive " : "this"} onMouseEnter={handleHover}>achieve</span>
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