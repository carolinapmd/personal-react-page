import './App.css';
import ProfilePicture from "./ProfilePicture";
import Studied from "./Studied";
import Did from "./Did";
import Doing from "./Doing";
import Aspire from "./Aspire";

import lineDot from "./img/lineCircle.png"

import Contacts from "./Contacts"
import ContactForm from "./ContactForm"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';


function App() {

useEffect(() => {
  Aos.init({ offset: 400,
    duration:2000});}, []);

  return (
    <div className="App">
            <Contacts />
      <div className="wrapper">
       
          <div  className="container">
            <img className="headerImg" src={lineDot} alt="divider"/>
            <div >
            <ProfilePicture />
            </div>

            <div data-aos="fade-up">
            <Studied/>

            </div>
            <div data-aos="fade-up">
            <Did/>

            </div>
            <div data-aos="fade-up">
            <Doing/>

            </div>
            <div data-aos="fade-up">
            <Aspire/>

            </div>
            <div data-aos="fade-up">
            <ContactForm/>

            </div>
            <hr/>
            <div className="row">
              <div className="col">
            <p className="coderNote">This React website is <a href="https://github.com/carolinapmd/personal-react-page" target="_blank" rel="noreferrer">open-sourced</a> and was built by <a href="https://www.linkedin.com/in/carolina-domingues/" target="_blank" rel="noreferrer">Carolina Domingues</a>. 💻</p>
                              </div>
              <div className="col">
            <p className="updatedDate">
             ◽ January 2021 ◽ 
            </p>

              </div>
            </div>
          </div>
      
      </div>
    </div>
  );
}

export default App;
