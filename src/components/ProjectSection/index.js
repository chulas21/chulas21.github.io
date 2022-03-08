import React from 'react'
import './ProjectSection.css';
import ProjectCard from '../ProjectCard';
import projects from '../../assets/projects.js'
function ProjectSection(){
  
  return (
    <div className="projectSection">
      <span className="projectHeader">What I've done so far...</span>
      <div className="projectContainer">
        {projects.map((project, i) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default ProjectSection   
