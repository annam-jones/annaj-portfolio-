import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <h2 className={styles.pixelTitle}>
            CONTACT<br />ME
          </h2>
          
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Name</h3>
              <p>Anna Jones</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>
                <a href="mailto:annamariajones@live.co.uk" className={styles.emailLink}>
                  annamariajones@live.co.uk
                </a>
              </p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Location</h3>
              <p>London, England</p>
            </div>
          </div>
          
          <div className={styles.thankYouBox}>
            <p className={styles.thankYou}>Thank you!</p>
          </div>
          
          <div className={styles.links}>
            <a href="mailto:annamariajones@live.co.uk" className={styles.button}>
              Send Email
            </a>
            <a href="/Anna_Jones_CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Download CV
            </a>
          </div>
        </div>
        
        <div className={styles.codeSnippet}>
          <div className={styles.codeLine}>
            <span className={styles.constWord}>const</span> <span className={styles.contactVar}>contact</span> <span className={styles.equals}>=</span>
          </div>
          <div className={styles.codeLine}>{'{'}</div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.propertyName}>name</span>:
            <span className={styles.redDot}></span>
            <span className={styles.stringValue}>"Anna Jones"</span>,
          </div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.propertyName}>email</span>:
            <span className={styles.redDot}></span>
            <span className={styles.stringValue}>"annamariajones@live.co.uk"</span>,
          </div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.propertyName}>location</span>:
            <span className={styles.redDot}></span>
            <span className={styles.stringValue}>"London, England"</span>,
          </div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.propertyName}>status</span>:
            <span className={styles.stringValue}>"Open to opportunities"</span>,
          </div>
          <div className={styles.codeLine}>{'}'}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;