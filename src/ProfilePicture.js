import React, {useState} from "react";
import "./ProfilePicture.css"
import photo from "./img/photo.png"

export default function ProfilePicture(){
    const [hover, setHover]= useState(false)


    function showPhoto(e) {
        setHover(true);
      
    }

    function hidePhoto() {
        
        setHover(false)
    }
  
    

    if (hover) {
      return (
          <div className="ProfilePicture">
                    
              <div className="row photo">
                  <div className="col-7 profileText">
                      <br/>
                      <div className="description">aspiring <span>designer | front-end developer</span>, from Castelo Branco, Portugal.</div>
                    </div>
                    <div className="col-5
                     ">
                    <img src={photo} alt="carolina" onMouseLeave={hidePhoto}/>
                    </div>

                </div>
                   
            </div>
    )
    } 
    
    else {
        return(
            <div className="ProfilePicture" >
                <h2 onMouseEnter={showPhoto} >
                    this is <span className="me">me</span>
                </h2>
            </div>
        )

    }
}
