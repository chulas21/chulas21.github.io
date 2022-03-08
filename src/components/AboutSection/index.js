import React from 'react';
import Typical from 'react-typical';
import downArrow from '../../assets/down-arrow.png';
import './AboutSection.css';
import MainCard from '../MainCard';

function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="headerContainer">
        <span className="smallHeader">Hi I'm</span>
        <span className="mainHeader">Francisco Prato</span>
        <Typical
          className="positionHeader"
          loop={Infinity}
          wrapper="span"
          steps={[
            "FullStack Developer",
            1000,
            "FrontEnd Developer",
            1000,
            "Mobile Developer",
            1000,
          ]}
        />
      </div>
      <MainCard />
    </div>
  );
}

export default AboutSection
