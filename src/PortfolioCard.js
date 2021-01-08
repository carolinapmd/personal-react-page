import React, {useState} from "react";
import "./PortfolioCard.css"

export default function PortfolioCard(props){
  const [hover, setHover]= useState(false)
    
       function handleHover() {
            setHover(true);      
        }
       function handleLeave() {
            setHover(false);      
        }

 

  if(props.data.link !== undefined) {

    
    return (  
      <div className="PortfolioCard col" >
      <div className="card" >
        <a href={props.data.link} target="_blank" rel="noreferrer">
          <img src={props.data.image} alt={props.data.image} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{ filter: hover ? "blur(1.5px)" : "none"}} />
          
          </a>
        <a href={props.data.link} target="_blank" rel="noreferrer">
          <div className="more" style={{ visibility: hover ? "visible" : "hidden"}}>see more</div>
          </a>
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
         
            <img src={props.data.image} alt={props.data.image}/>
            
            
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