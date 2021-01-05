import React from "react";

import "./PortfolioCard.css"

export default function PortfolioCard(props){
      return (  
        <div className="PortfolioCard col" >
            <div class="card" >
                
                    <div class="card-body">
                        <h5 class="card-title">{props.role}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
            
  )
}