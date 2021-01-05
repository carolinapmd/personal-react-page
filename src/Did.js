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
              <a className="active" href="#" onClick={showCivilPortfolio}>as a civil engineer</a> | <a href="" onClick={showDevPortfolio}>as a developer</a>
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
                      <a href="" onClick={showCivilPortfolio}>as a civil engineer</a> | <a href="#" className="active" onClick={showDevPortfolio}>as a developer</a>
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