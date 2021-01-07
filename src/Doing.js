import React, {useState}  from "react";

import Caroussel from "./Caroussel";
import Dot from "./img/Dot.png"
import login from "./img/login.PNG"
import telaMenu from "./img/telaMenu.PNG"
import telaOrder from "./img/telaOrder.PNG"
import modelo from "./img/modelo.PNG"
import saveLogic from "./img/saveLogic.PNG"


import "./Doing.css"

export default function Doing(){
   const [hover, setHover]= useState(false)

   function handleHover() {
        setHover(true);      
    }
  
  let One = (
  <div>
    <img src={login} alt="login" className="OSPortfolio"/>
   
  </div>
  )

  let Two = (
  <div>
    <img src={telaMenu} alt="login" className="OSPortfolio"/>
  </div>
  )
  let Three = (
  <div>
    <img src={telaOrder} alt="login" className="OSPortfolio"/>
  </div>
  )
  let Four = (
  <div>
    <img src={saveLogic} alt="login" className="OSPortfolio"/>
  </div>
  )
  let Five = (
  <div>
    <img src={modelo} alt="login" className="OSPortfolio"/>
  </div>
  )
 
  
      return (  
        <div className="Doing" >
          <div className="DotGroup">
            <img src={Dot} alt="Dot" className="firstDot"/>
            <img src={Dot} alt="Dot" className="Dot"/>
            <img src={Dot} alt="Dot" className="Dot"/>
            <img src={Dot} alt="Dot" className="Dot"/>

          </div>
            <h2 >
            i'm doing <span className={hover ? "this colorActive " : "this"} onMouseEnter={handleHover}>this</span>
            </h2>
            <div className="row">
              <div className="col descriptionCol">
                <span className="semicolons">"</span>
                <span>in the last 4 months i've been passionately building <strong>digital</strong> and <strong>programming</strong> skills; currently, i'm developing an OS restaurant software for managing orders (preview 👉🏻)</span><span className="semicolons">"</span>
              </div>
              <div className="col carousselCol">
                <Caroussel slideOne={One} slideTwo={Two} slideThree={Three} slideFour={Four} slideFive={Five}  />
              </div>
            </div>

         </div>
            
  )
}