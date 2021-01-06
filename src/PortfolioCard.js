import React from "react";
import "./PortfolioCard.css"
import { FaGithub } from "react-icons/fa";

export default function PortfolioCard(props){

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
                <a href={props.data.link} target="_blank" rel="noreferrer" className="btn btn-light" role="button" aria-pressed="true">Go somewhere</a>
                <a href="" target="_blank" rel="noreferrer">{FaGithub}</a>
              </div>
            </div>
        </div>
            
  )
}