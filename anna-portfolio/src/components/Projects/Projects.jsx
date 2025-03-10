import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.projectContent}>
          <h2 className={styles.pixelTitle}>Furni - Furniture Marketplace</h2>
          <p>
            A modern web application for sourcing furniture.
            This platform connects furniture enthusiasts and allows them
            to list items they're trying to find, whether they've screenshotted 
            something online or taken a picture of it at a flea market, Furni can 
            help them find it.
          </p>
          
          <div className={styles.projectDetails}>
            <div className={styles.techStack}>
              <h3>Technologies Used</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>CSS Modules</li>
              </ul>
            </div>
            
            <div className={styles.features}>
              <h3>Key Features</h3>
              <ul>
                <li>Furniture listings with images</li>
                <li>Responsive design</li>
                <li>Full CRUD</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.links}>
            <a href="https://github.com/yourusername/furni" target="_blank" rel="noopener noreferrer" className={styles.button}>
              View Code
            </a>
            <a href="https://furni-demo.netlify.app" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Live Demo
            </a>
          </div>
        </div>
        
        <div className={styles.imageGallery}>
          <img 
            src="/Furni_Home.png" 
            alt="Furni Home Page" 
            className={`${styles.galleryImage} ${styles.image1}`}
          />
          <img 
            src="/Furni_Item.png" 
            alt="Furni Item Page" 
            className={`${styles.galleryImage} ${styles.image2}`}
          />
          <img 
            src="/Furni_Index.png" 
            alt="Furni Index Page" 
            className={`${styles.galleryImage} ${styles.image3}`}
          />
          <img 
            src="/Furni_Signup.png" 
            alt="Furni Signup Page" 
            className={`${styles.galleryImage} ${styles.image4}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;