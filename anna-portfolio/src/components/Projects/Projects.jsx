import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section becomes at least 20% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once triggered, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // trigger when 20% visible
      }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    // Cleanup
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  // Also allow manual triggering when navbar link is clicked
  useEffect(() => {
    const handleNavClick = () => {
      // Check if the URL hash indicates this section
      if (window.location.hash === '#projects') {
        setIsVisible(true);
      }
    };
    
    // Listen for hash changes (happens when navbar links are clicked)
    window.addEventListener('hashchange', handleNavClick);
    
    // Check on initial load too
    handleNavClick();
    
    return () => {
      window.removeEventListener('hashchange', handleNavClick);
    };
  }, []);

  return (
    <div 
      id="projects" 
      ref={projectsRef}
      className={`${styles.projectsSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={`${styles.container} ${isVisible ? styles.animate : ''}`}>
        <div className={`${styles.projectContent} ${isVisible ? styles.animate : ''}`}>
          <h2 className={`${styles.pixelTitle} ${isVisible ? styles.animate : ''}`}>Furni - Furniture Marketplace</h2>
          <p className={`${isVisible ? styles.animate : ''}`}>
         A modern web application for sourcing furniture.
            This platform connects furniture enthusiasts and allows them
            to list items they're trying to find, whether they've screenshotted 
            something online or taken a picture of it at a flea market, Furni can 
            help them source it.
          </p>
          
          <div className={`${styles.projectDetails} ${isVisible ? styles.animate : ''}`}>
            <div className={styles.techStack}>
              <h3>Technologies Used</h3>
              <ul>
                <li className={`${isVisible ? styles.animate : ''}`}>React</li>
                <li className={`${isVisible ? styles.animate : ''}`}>Node.js</li>
                <li className={`${isVisible ? styles.animate : ''}`}>Express</li>
                <li className={`${isVisible ? styles.animate : ''}`}>MongoDB</li>
                <li className={`${isVisible ? styles.animate : ''}`}>CSS Modules</li>
              </ul>
            </div>
            
            <div className={styles.features}>
              <h3>Key Features</h3>
              <ul>
                <li className={`${isVisible ? styles.animate : ''}`}>User authentication</li>
                <li className={`${isVisible ? styles.animate : ''}`}>Furniture listings with images</li>
                <li className={`${isVisible ? styles.animate : ''}`}>Search and filter functionality</li>
                <li className={`${isVisible ? styles.animate : ''}`}>Responsive design</li>
                <li className={`${isVisible ? styles.animate : ''}`}>User profiles</li>
              </ul>
            </div>
          </div>
          
          <div className={`${styles.links} ${isVisible ? styles.animate : ''}`}>
            <a href="https://github.com/yourusername/furni" target="_blank" rel="noopener noreferrer" className={styles.button}>
              View Code
            </a>
            <a href="https://furni-demo.netlify.app" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Live Demo
            </a>
          </div>
        </div>
        
        <div className={`${styles.imageGallery} ${isVisible ? styles.animate : ''}`}>
          <img 
            src="/Furni_Home.png" 
            alt="Furni Home Page" 
            className={`${styles.galleryImage} ${styles.image1} ${isVisible ? styles.animate : ''}`}
          />
          <img 
            src="/Furni_Item.png" 
            alt="Furni Item Page" 
            className={`${styles.galleryImage} ${styles.image2} ${isVisible ? styles.animate : ''}`}
          />
          <img 
            src="/Furni_Index.png" 
            alt="Furni Index Page" 
            className={`${styles.galleryImage} ${styles.image3} ${isVisible ? styles.animate : ''}`}
          />
          <img 
            src="/Furni_Signup.png" 
            alt="Furni Signup Page" 
            className={`${styles.galleryImage} ${styles.image4} ${isVisible ? styles.animate : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;