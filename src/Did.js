import React, {useState} from "react";

import "./Did.css"
import PortfolioCard from "./PortfolioCard";

export default function Did(){

  const[CivilClicked, setCivilClicked] = useState(true)

  function showCivilPortfolio(event){
    event.preventDefault()
    setCivilClicked(true)
  }

  function showDevPortfolio(event){
    event.preventDefault()
    setCivilClicked(false)
  }

  if(CivilClicked) {    
    return (  
      <div className="Did" >
            <h2 >
            i did <span className="this">this</span>
            </h2>
            <span className="roleOption">
              <button className="active civilButton" onClick={showCivilPortfolio}>as a civil engineer</button> | <button className="devButton" onClick={showDevPortfolio}>as a developer</button>
              </span>
            <div className="CardGroup row">
            <PortfolioCard role="civil"/>
            <PortfolioCard role="civil"/>
            <PortfolioCard role="civil"/>
            <PortfolioCard role="civil"/>
            </div>
        </div>
            
            )
          } else {
            return (  
              <div className="Did" >
                    <h2 >
                    i did <span className="this">this</span>
                    </h2>
                    <span className="roleOption">
                      <button className="civilButton" onClick={showCivilPortfolio}>as a civil engineer</button> | <button className="active devButton" onClick={showDevPortfolio}>as a developer</button>
                      </span>
                    <div className="CardGroup row">
                    <PortfolioCard role="dev"/>
                    <PortfolioCard role="dev"/>
                    <PortfolioCard role="dev"/>
                    <PortfolioCard role="dev"/>
                    </div>
                </div>
                    
                    )

          }
}