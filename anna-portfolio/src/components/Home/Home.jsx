// Home.jsx
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.contentOverlay}>
        {/* Optional overlay content, like a title or call-to-action */}
      </div>
    </div>
  );
};

export default Home;