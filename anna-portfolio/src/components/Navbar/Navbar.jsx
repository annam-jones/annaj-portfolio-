import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const handleScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={styles.navbarVertical}>
      <ul>
        <li>
          <a 
            onClick={() => handleScrollTo('home')}
            className={styles.navLink}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            onClick={() => handleScrollTo('about')}
            className={styles.navLink}
          >
            About
          </a>
        </li>
        <li>
          <a 
            onClick={() => handleScrollTo('projects')}
            className={styles.navLink}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            onClick={() => handleScrollTo('contact')}
            className={styles.navLink}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;