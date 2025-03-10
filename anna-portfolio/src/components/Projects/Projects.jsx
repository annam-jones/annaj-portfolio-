import React from 'react';
import './Projects.module.css'; 

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
     
        <div className="project-card">
          <h2>Project 1</h2>
          <p>Description of project 1</p>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <p>Description of project 2</p>
        </div>
      
      </div>
    </div>
  );
};

export default Projects;