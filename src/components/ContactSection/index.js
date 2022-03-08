import React from 'react'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import whatsapp from '../../assets/whatsapp.png'
import './ContactSection.css';

function ContactSection() {
  var pre = "<";
  var post = "/>";
  return (
    <div className="ContactPageContainer">
      <div className="contactCard">
        <h2 className="mainCardHeader">
          {pre}
          <span className="name">Get in touch!</span>
          {post}
        </h2>
        <div className="spinner">
          <img
            alt="Linkedin"
            src={linkedin}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/franprato-dev/",
                "_blank"
              );
            }}
          />
          <img
            alt="Github"
            src={github}
            onClick={() => {
              window.open("https://github.com/chulas21", "_blank");
            }}
          />
          <img
            alt="Gmail"
            src={gmail}
            onClick={() => {
              window.open("mailto:prattofrancisko@gmail.com", "_blank");
            }}
          />
          <img
            alt="Whatsapp"
            src={whatsapp}
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=2644431575",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
