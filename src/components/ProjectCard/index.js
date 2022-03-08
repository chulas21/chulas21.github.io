import React,{ useState } from 'react'
import Modal from 'react-modal'
import './ProjectCard.css'

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ProjectCard({ project }) {
  const [show, setShow] = useState(false);

  function openDialog() {
    setShow(true);
    console.log("opened");
  }
  function closeDialog() {
    setShow(false);
  }
  function openUrl() {
    window.open(project.url, "__blank");
  }

  return (
    <div className="ProjectCardContainer">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1 className="project-header">{project.name}</h1>
        </div>
        <div className="flip-card-back" onClick={()=>{openDialog()}}>
          <img
            className="projectLogo"
            alt="projectLogo"
            src={project.logo}
            width="100"
            height="100"
          />
        </div>
      </div>
      <Modal
        isOpen={show}
        onRequestClose={closeDialog}
        overlayClassName="overlay"
        className="modal"
        style={customStyles}
      >
        <h2 className="modalHeader">{project.name}</h2>
        <div className="modalContent">
          <p className="modalText">{project.about}</p>
          <p className="modalText">{project.technologies}</p>
        </div>
        {project.deployed ? (
          <div className="btnVisit" onClick={openUrl}>
            Visit
          </div>
        ) : (
          <p className="modalDisclaimer">{project.disclaimer}</p>
        )}
      </Modal>
    </div>
  );
}

export default ProjectCard
