import React from "react";
import Caroussel from "./Caroussel"


import "./Studied.css"

export default function Studied(){

  let One = (<div>hi</div>)
  let Two = (<div>hi</div>)
  let Three = (<div>hi</div>)
  let Four = (<div>hi</div>)
  let Five = (<div>hi</div>)
  let Six = (<div>hi</div>)
  

      return (  
        <div className="Studied" >
 
            <h2 >
            i studied <span className="this">this</span>            
            </h2>
            <Caroussel slideOne={One} slideTwo={Two} slideThree={Three} slideFour={Four} slideFive={Five} slideSix={Six} />
        </div>
  )
}
