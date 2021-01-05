import React from "react";

import "./PortfolioCard.css"

export default function PortfolioCard(props){
      return (  
        <div className="PortfolioCard col" >
            <div className="card" >
                
                    <div className="card-body">
                        <h5 className="card-title">{props.role}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button href="#" className="btn btn-primary">Go somewhere</button>
                    </div>
            </div>
        </div>
            
  )
}