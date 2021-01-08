import React, {useState} from "react";


import "./Did.css"
import PortfolioCard from "./PortfolioCard";

import moradia1 from "./img/moradia1.PNG"
import moradia2 from "./img/moradia2.PNG"
import moradia2rendered from "./img/moradia2rendered.jpg"
import pavilhao from "./img/pavilhao.PNG"
import paragem from "./img/paragem.JPG"
import predio from "./img/predio.PNG"
import workshop from "./img/workshop.PNG"
import plusWireframe from "./img/plusWireframe.PNG"
import plusWeatherApp from "./img/plusWeatherApp.PNG"
import reactWeatherApp from "./img/reactWeatherApp.PNG"
import pageWireframe from "./img/pageWireframe.PNG"
import wordpressWireframe from "./img/wordpressWireframe.PNG"

export default function Did(){

  const[civilClicked, setCivilClicked] = useState(false)

     const [scroll, setScroll]= useState(false)

   function handleScroll() {
     if (window.scrollY >= 1400) {
       setScroll(true);      
     }else {
       setScroll(false)
     }
    }

window.addEventListener("scroll", handleScroll);

  let civilPortfolio = [
    {
    image: moradia2rendered,
    title: "3D home building",
    description: "3D developed on SketchUp",
    date: "aug 2019"
  },
  {
    image: predio,
    title: "3D buildings",
    description: "3D developed on SketchUp",
    date: "aug 2019"
  },
    {
    image: moradia2,
    title: "3D home building",
    description: "3D developed on SketchUp",
    date: "jul 2019"
  },
  {
  image: moradia1,
  title: "3D home building",
  description: "3D developed on SketchUp",
  date: "jul 2019"
},
{
  image: paragem,
  title: "3D bus stop",
  description: "3D developed on SketchUp",
  date: "jul 2019"
},
{
  image: pavilhao,
  title: "3D pavilion",
  description: "3D developed on SketchUp",
  date: "oct 2017"
},
]

let devPortfolio = [
  {
    image: pageWireframe,
    title: "Personal page wireframe",
    description: "Wireframe developed for the present website",
    date: "jan 2021",
    link: "https://www.figma.com/file/Pvm3hOVN8qtmwDOhpHwzBB/Personal-page?node-id=3%3A2"
  },
  {
    image: reactWeatherApp,
    title: "React JS Weather App",
    description: "Weather App developed for SheCodes React final project",
    date: "nov 2020",
    link: "https://ecstatic-sammet-fe081c.netlify.app/"
  },
  {
    image: wordpressWireframe,
    title: "Personal page wireframe",
    description: "Wireframe developd for Marketing course",
    date: "oct 2020",
    link: "https://carolinadomingues510353.invisionapp.com/freehand/Pgina-Pessoal-fkSPJH8GK"
  },
  {
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
  },
  {
    image: workshop,
    title: "SheCodes Workshop project",
    description: "This was my first ever introduction to HTML/CSS/Javascript",
    date: "aug 2020",
    link: "https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/000/064/297/original/workshop_final_project.html?1596387671"
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
            i did <span className={scroll ? "this colorActive " : "this"} >this</span>
            </h2>
            <span className="roleOption">
              <button className="active civilButton" onClick={showCivilPortfolio}>as a civil engineer</button> | <button className="devButton" onClick={showDevPortfolio}>as a developer</button>
              </span>
            <div className="CardGroup row">
                    <PortfolioCard data={civilPortfolio[0]} role="civil"/>
                    <PortfolioCard data={civilPortfolio[1]} role="civil" />
                    <PortfolioCard data={civilPortfolio[2]} role="civil" />
                    <PortfolioCard data={civilPortfolio[3]} role="civil" />
                    <PortfolioCard data={civilPortfolio[4]} role="civil" />
                    <PortfolioCard data={civilPortfolio[5]} role="civil" />

            </div>
        </div>
            
            )
          } else {
            return (  
              <div className="Did" >
                    <h2 >
                    i did <span className={scroll ? "this colorActive " : "this"} >this</span>
                    </h2>
                    <span className="roleOption">
                      <button className="civilButton" onClick={showCivilPortfolio}>as a civil engineer</button> | <button className="active devButton" onClick={showDevPortfolio}>as a developer</button>
                      </span>
                    <div className="CardGroup row">
                    <PortfolioCard data={devPortfolio[0]} role="dev"/>
                    <PortfolioCard data={devPortfolio[1]} role="dev"/>
                    <PortfolioCard data={devPortfolio[2]} role="dev"/>
                    <PortfolioCard data={devPortfolio[3]} role="dev"/>
                    <PortfolioCard data={devPortfolio[4]} role="dev"/>
                    <PortfolioCard data={devPortfolio[5]} role="dev"/>
                    </div>
                </div>
                    
                    )

          }
}