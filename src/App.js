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
  Aos.init({ duration:2000});}, []);

  return (
    <div className="App">
            <Contacts />
      <div className="wrapper">
       
          <div  className="container">
            <img className="headerImg" src={lineDot} alt="divider"/>
            <h1>
              hi, i'm <span data-text="carolina" className="name" >carolina</span>
            </h1>
            <div data-aos="fade-up">
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
            <p className="coderNote">This <a href="https://github.com/carolinapmd/personal-react-page" target="_blank" rel="noreferrer">website</a> was built by <a href="https://www.linkedin.com/in/carolina-domingues/" target="_blank" rel="noreferrer">Carolina Domingues</a>, with React. 💻</p>
            
          </div>
      
      </div>
    </div>
  );
}

export default App;
