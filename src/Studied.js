import React from "react";
import Caroussel from "./Caroussel"


import "./Studied.css"

export default function Studied(){

  let One = (<div className="education">
    <p> <span className="educationDate">sep 2016</span> | <span className="educationLocation" >FCTUC</span></p>
    <p className="educationTitle" >Master’s Degree in Civil Engineering</p>
    <hr/>
    <p className="educationSubtitle" >Urban Planning, Transports and Communication Networks</p>    
      </div>)
  let Two = (<div className="education">
    <p> <span className="educationDate">oct 2020</span> | <span className="educationLocation" >InWeb</span></p>
    <p className="educationTitle" >Digital Marketing Specialization</p>
    <hr/>
    <p className="educationSubtitle" >Marketing 3.0 | Social Media | Marketing and Advertising | Digital Communication |</p>

      </div>)
  let Three = (<div className="education">
    <p> <span className="educationDate">nov 2020</span> | <span className="educationLocation" >SheCodes</span></p>    
    <p className="educationTitle" >React Development</p>
    <hr/>
    <p className="educationSubtitle" >HTML | Javascript | Bootstrap | API | GitHub | Hosting | React</p>

      </div>)
  let Four = (<div className="education">
    <p> <span className="educationDate">present</span> | <span className="educationLocation" >InWeb</span></p>
    <p className="educationTitle" >Graphic Design</p>
    <hr/>
    <p className="educationSubtitle" >Adobe Photoshop | Adobe Illustrator | Adobe Premier | Filmora </p>

      </div>)
  let Five = (<div className="education">
    <p> <span className="educationDate">present</span> | <span className="educationLocation" >RafaOutSystems</span></p>
    <p className="educationTitle" >OutSystems Masterclass</p>
    <hr/>
    <p className="educationSubtitle" >Traditional Web Development</p>

      </div>)
 

      return (  
        <div className="Studied" >
 
            <h2 >
            i studied <span className="this">this</span>            
            </h2>
            <div className="row">
              <div className="col carousselCol">
                <Caroussel slideOne={One} slideTwo={Two} slideThree={Three} slideFour={Four} slideFive={Five} slideSix="null" />
              </div>
              <div className="col descriptionCol">
              <span className="semicolons">"</span>
              <span>
                with a civil engineering background, i bring an Engineering perspective to coding, from problem solving to logical thinking
                </span>
              <span className="semicolons">"</span>
              </div>
            </div>
            <div>
            </div>
        </div>
  )
}
