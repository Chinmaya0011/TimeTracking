import React from 'react';
import styles from '../../assets/styles/Home/About.module.css';
import { FaRegLightbulb, FaBullhorn, FaHandshake, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About Us</h2>
      <div className={styles.info}>
        <div className={styles.mission}>
          <FaRegLightbulb className={styles.icon} />
          <h3>Our Mission</h3>
          <ul>
            <li>Deliver cutting-edge solutions to streamline business operations.</li>
            <li>Enhance efficiency through innovation and exceptional service.</li>
          </ul>
        </div>
        <div className={styles.vision}>
          <FaBullhorn className={styles.icon} />
          <h3>Our Vision</h3>
          <ul>
            <li>Be the leading provider of comprehensive management solutions.</li>
            <li>Empower businesses to achieve their full potential.</li>
          </ul>
        </div>
        <div className={styles.values}>
  <FaHandshake className={styles.icon} />
  <h3>Our Values</h3>
  <ul>
    <li>
      <strong>Integrity:</strong> We adhere to the highest ethical standards, ensuring honesty and transparency in all our interactions.
    </li>
    <li>
      <strong>Innovation:</strong> We embrace creativity and continuously seek new ideas to drive progress and stay ahead in our industry.
    </li>
   
    
  </ul>
</div>

<div className={styles.team}>
  <FaUsers className={styles.icon} />
  <h3>Our Team</h3>
  <ul>
    <li>
      We are a diverse group of professionals with a shared passion for technology and a commitment to delivering outstanding results.
    </li>
    <li>
      Our team comprises experts from various fields, including software development, design, and project management, ensuring a well-rounded approach to every project.
    </li>
   
 
  </ul>
</div>

      </div>
    </div>
  );
};

export default About;
