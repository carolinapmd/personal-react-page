import React from "react";

import "./ContactForm.css"

export default function ContactForm(){
      return (  
        <div className="ContactForm" >
            <h3 className="contactMe">
                say <span className="emphasis">
                    hello
                </span>.
            </h3>
            <form>
                <input className="form-control" placeholder="(your full name)" />
                <input type="email" className="form-control" placeholder="(your email)" />
                <textarea className="form-control" placeholder="(your message)" rows="4"></textarea>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
            
  )
}