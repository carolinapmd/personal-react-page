import React from "react";
import "./PortfolioCard.css"

export default function PortfolioCard(props){

  if(props.data.link !== undefined) {

    return (  
      <div className="PortfolioCard col" >
          <div className="card" >
           
              <img src={props.data.image} alt={props.data.image}/>
              
            <div className="card-body">
              <small className="date"> ▪ {props.data.date} ▪ </small>
              <h5 className="card-title">{props.data.title}</h5>
              <p className="card-text">{props.data.description}</p>
            </div>
          </div>
      </div>            
)

  } else {

    return (  
      <div className="PortfolioCard col" >
          <div className="card" >
            <a href={props.data.link}>
              <img src={props.data.image} alt={props.data.image}/>
              </a>
            <div className="card-body">
              <small className="date"> ▪ {props.data.date} ▪ </small>
              <h5 className="card-title">{props.data.title}</h5>
              <p className="card-text">{props.data.description}</p>
            </div>
          </div>
      </div>            
)
  }
}