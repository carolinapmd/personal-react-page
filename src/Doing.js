import React from "react";
import Caroussel from "./Caroussel";

import "./Doing.css"

export default function Doing(){
  
  let One = (<div>hi</div>)
  let Two = (<div>hi</div>)
  let Three = (<div>hi</div>)
  let Four = (<div>hi</div>)
  let Five = (<div>hi</div>)
  let Six = (<div>hi</div>)
  
      return (  
        <div className="Doing" >
            <h2  >
            i'm doing <span className="this">this</span>
            </h2>
             <div className="CarousselComp">
            <Caroussel slideOne={One} slideTwo={Two} slideThree={Three} slideFour={Four} slideFive={Five} slideSix={Six} />
            </div>
         
        </div>
            
  )
}