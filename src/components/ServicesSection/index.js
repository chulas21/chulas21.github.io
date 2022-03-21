import React from 'react';
import Tilt from 'react-tilt';
import SkillsCard from '../SkillCard';
import fast from '../../assets/fast.png';
import devices from '../../assets/devices.png';
import teamwork from '../../assets/teamwork.png';
import workflow from '../../assets/workflow.png';
import "./ServicesSection.css";

//==================== LEFT ITEM ====================//
const LeftItem = ({ title, img, content }) => {
  return (
    <div className="leftItem">
      <Tilt className="leftItemCard">
        <img alt="fast" src={img} />
        <h3 className="leftItemTitle">{title}</h3>
      </Tilt>
      <p className="leftItemContent">{content}</p>
    </div>
  );
};
//==================== RIGHT ITEM ====================//
const RightItem = ({ title, img, content }) => {
  return (
    <div className="rightItem">
      <p className="rightItemContent">{content}</p>
      <Tilt className="rightItemCard">
        <img alt="fast" src={img} />
        <h3 className="rightItemTitle">{title}</h3>
      </Tilt>
    </div>
  );
};

function ServicesSection() {
  return (
    <div className="servicesSection">
      <span className="servicesHeader">What can i do?</span>
      <LeftItem
        img={fast}
        title="Fast & Functional Solutions"
        content="Create fully functional MVP for your Startup/Bussiness"
      />
      <RightItem
        img={devices}
        title="Flexible Solutions"
        content="Develop both mobile and desktop solutions acording to the clients requeriments"
      />
      <LeftItem
        img={teamwork}
        title="Great Team Working"
        content="Work with others to build a team that exceedes the expectations"
      />
      <RightItem
        img={workflow}
        title="Improoved Workflow"
        content="Use agile methodologies to improve the development process to the limits"
      />
      <SkillsCard/>
    </div>
  );
}

export default ServicesSection;
