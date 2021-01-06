import React from "react";
import Caroussel from "./Caroussel";
import Dot from "./img/Dot.png"

import "./Doing.css"

export default function Doing(){
  
  let One = (<div>hi</div>)
  let Two = (<div>hi</div>)
  let Three = (<div>hi</div>)
  let Four = (<div>hi</div>)
  let Five = (<div>hi</div>)
  
      return (  
        <div className="Doing" >
          <div className="DotGroup">
            <img src={Dot} alt="Dot" className="firstDot"/>
            <img src={Dot} alt="Dot" className="Dot"/>
            <img src={Dot} alt="Dot" className="Dot"/>
            <img src={Dot} alt="Dot" className="Dot"/>

          </div>
            <h2  >
            i'm doing <span className="this">this</span>
            </h2>
            <div className="row">
              <div className="col descriptionCol">
                <span className="semicolons">"</span>
                <span>in the last 4 months i've been passionately building <strong>digital</strong> and <strong>programming</strong> skills; i am currently developing an OS restaurant software for managing orders </span><span className="semicolons">"</span>
              </div>
              <div className="col carousselCol">
                <Caroussel slideOne={One} slideTwo={Two} slideThree={Three} slideFour={Four} slideFive={Five} slideSix="null" />
              </div>
            </div>

         </div>
            
  )
}