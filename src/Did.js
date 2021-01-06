import React, {useState} from "react";


import "./Did.css"
import PortfolioCard from "./PortfolioCard";

import workshop from "./img/workshop.PNG"
import plusWireframe from "./img/plusWireframe.PNG"
import plusWeatherApp from "./img/plusWeatherApp.PNG"
import reactWeatherApp from "./img/reactWeatherApp.PNG"
import pageWireframe from "./img/pageWireframe.PNG"
import wordpressWireframe from "./img/wordpressWireframe.PNG"

export default function Did(){

  const[civilClicked, setCivilClicked] = useState(false)
  
  let civilPortfolio = [{
    image: "image 0",
    title: "title 0",
    description: "description 0",
    link: "link 0"
  },
  {
    image: "image 1",
    title: "title 1",
    description: "description 1",
    link: "description 1"
  }, {
    image: "image 2",
    title: "title 2",
    description: "description 2",
    link: "description 2"
  },{
    image: "image 3",
    title: "title 3",
    description: "description 3",
    link: "description 3"
  }
]

let devPortfolio = [{
    image: workshop,
    title: "SheCodes Workshop project",
    description: "This was my first ever introduction to HTML/CSS/Javascript",
    date: "aug 2020",
    link: "https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/000/064/297/original/workshop_final_project.html?1596387671"
  },{
    image: plusWireframe,
    title: "Weather App Wireframe",
    description: "Wireframe developed for SheCodes Plus project",
    date: "sep 2020",
    link: "https://carolinadomingues510353.invisionapp.com/freehand/Weather-App-2G1HfowFk"
  },{
    image: plusWeatherApp,
    title: "Vanilla JS Weather App",
    description: "Weather App developed for SheCodes Plus final project",
    date: "sep 2020",
    link: "https://competent-noyce-f5f049.netlify.app/"
  },{
    image: wordpressWireframe,
    title: "Personal page wireframe",
    description: "Wireframe developd for Marketing course",
    date: "oct 2020",
    link: "https://carolinadomingues510353.invisionapp.com/freehand/Pgina-Pessoal-fkSPJH8GK"
  },{
    image: reactWeatherApp,
    title: "React JS Weather App",
    description: "Weather App developed for SheCodes React final project",
    date: "nov 2020",
    link: "https://ecstatic-sammet-fe081c.netlify.app/"
  },{
    image: pageWireframe,
    title: "Personal page wireframe",
    description: "Wireframe developed for the present website",
    date: "jan 2020",
    link: "https://www.figma.com/file/Pvm3hOVN8qtmwDOhpHwzBB/Personal-page?node-id=3%3A2"
  },
]
  function showCivilPortfolio(event){
    event.preventDefault()
    setCivilClicked(true)
  }

  function showDevPortfolio(event){
    event.preventDefault()
    setCivilClicked(false)
  }

  if(civilClicked) {    
    return (  
      <div className="Did" >
            <h2 >
            i did <span className="this">this</span>
            </h2>
            <span className="roleOption">
              <button className="active civilButton" onClick={showCivilPortfolio}>as a civil engineer</button> | <button className="devButton" onClick={showDevPortfolio}>as a developer</button>
              </span>
            <div className="CardGroup row">
            <PortfolioCard data={civilPortfolio[0]}/>

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
                    <PortfolioCard data={devPortfolio[0]}/>
                    <PortfolioCard data={devPortfolio[1]}/>
                    <PortfolioCard data={devPortfolio[2]}/>
                    <PortfolioCard data={devPortfolio[3]}/>
                    <PortfolioCard data={devPortfolio[4]}/>
                    <PortfolioCard data={devPortfolio[5]}/>
                    </div>
                </div>
                    
                    )

          }
}