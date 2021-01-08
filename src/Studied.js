import React, {useState} from "react";
import Caroussel from "./Caroussel"
import line4Dot from "./img/line4Dot.png"


import "./Studied.css"

export default function Studied(){

   const [scroll, setScroll]= useState(false)

   function handleScroll() {
     if (window.scrollY >= 800) {
       setScroll(true);      
     }else {
       setScroll(false)
     }
    }

window.addEventListener("scroll", handleScroll);

  let One = (
  <div className="education">
    <p> <span className="educationDate">present</span> | <span className="educationLocation" >RafaOutSystems</span></p>
    <p className="educationTitle" >OutSystems Masterclass</p>
    <hr/>
    <p className="educationSubtitle" >Traditional Web Development</p>
      </div>
      )
  let Two = (
  <div className="education">
    <p> <span className="educationDate">present</span> | <span className="educationLocation" >InWeb</span></p>
    <p className="educationTitle" >Graphic Design</p>
    <hr/>
    <p className="educationSubtitle" >Adobe Photoshop | Adobe Illustrator | Adobe Premier | Filmora </p>
      </div>
      )
  let Three = (
  <div className="education">
    <p> <span className="educationDate">nov 2020</span> | <span className="educationLocation" >SheCodes</span></p>    
    <p className="educationTitle" >React Development</p>
    <hr/>
    <p className="educationSubtitle" >HTML | Javascript | Bootstrap | API | GitHub | Hosting | React</p>
      </div>
      )
  let Four = (
  <div className="education">
    <p> <span className="educationDate">oct 2020</span> | <span className="educationLocation" >InWeb</span></p>
    <p className="educationTitle" >Digital Marketing Specialization</p>
    <hr/>
    <p className="educationSubtitle" >Marketing 3.0 | Social Media | Marketing and Advertising | Digital Communication |</p>
      </div>
      )
  let Five = (
  <div className="education">
    <p> <span className="educationDate">sep 2016</span> | <span className="educationLocation" >FCTUC</span></p>
    <p className="educationTitle" >Master’s Degree in Civil Engineering</p>
    <hr/>
    <p className="educationSubtitle" >Urban Planning, Transports and Communication Networks</p>    
      </div>
      )
 

      return (  
        <div className="Studied" >
          <div className="dividerLine">
                      <img className="line4Dot" src={line4Dot} alt="divider"/>
          </div> 
            <h2 >
            i studied <span className={scroll ? "this colorActive " : "this"} >this</span>            
            </h2>
            <div className="row">
              <div className="col carousselCol">
                <Caroussel slideOne={One} slideTwo={Two} slideThree={Three} slideFour={Four} slideFive={Five}  />
              </div>
              <div className="col descriptionCol">
              <span className="semicolons">" </span>
              <span>
                 with a civil engineering background, i'm able to bring a logical perspective to coding, as well as problem solving and critical thinking
                </span>
              <span className="semicolons">"</span>
              </div>
            </div>
            <div>
            </div>
        </div>
  )
}
