import './App.css';
import Fade from 'react-reveal/Fade';
import ProfilePicture from "./ProfilePicture";
import Studied from "./Studied";
import Did from "./Did";
import Doing from "./Doing";
import Aspire from "./Aspire";

import lineDot from "./img/lineCircle.png"
import line4Dot from "./img/line4Dot.png"
import Contacts from "./Contacts"
import ContactForm from "./ContactForm"





function App() {
  return (
    <div className="App">
            <Contacts />
      <div className="wrapper">
        <Fade>
          <div className="container">
            <img className="headerImg" src={lineDot} alt="divider"/>
            <h1>
              hi, i'm <span data-text="carolina" className="name" >carolina</span>
            </h1>
            <ProfilePicture />
            <img className="line4Dot" src={line4Dot} alt="divider"/>
            <Studied/>
            <Did/>
            <Doing/>
            <Aspire/>
            <ContactForm/>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
