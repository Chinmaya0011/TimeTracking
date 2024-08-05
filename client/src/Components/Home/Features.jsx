import React from 'react';
import { FaUser, FaClock, FaMoneyBillWave, FaRobot, FaUsers, FaChartLine, FaBullhorn } from 'react-icons/fa';
import styles from '../../assets/styles/Home/Features.module.css';

const Features = () => {
  return (
    <div className={styles.features}>
      <h2>Features</h2>
      <p>Our CMS offers a comprehensive suite of features to streamline your business operations.</p>
      <div className={styles.featureList}>
        <div className={styles.featureItem}>
          <FaUser className={styles.icon} />
          <h3>Employee Login</h3>
          <p>Secure and easy login for employees.</p>
        </div>
        <div className={styles.featureItem}>
          <FaClock className={styles.icon} />
          <h3>Tracking</h3>
          <p>Track employee performance and attendance.</p>
        </div>
        <div className={styles.featureItem}>
          <FaMoneyBillWave className={styles.icon} />
          <h3>Salary Management</h3>
          <p>Efficient payroll management and processing.</p>
        </div>
        <div className={styles.featureItem}>
          <FaRobot className={styles.icon} />
          <h3>AI Features</h3>
          <p>Advanced AI features for better insights.</p>
        </div>
        <div className={styles.featureItem}>
          <FaUsers className={styles.icon} />
          <h3>HR Management</h3>
          <p>Comprehensive HR tools for management.</p>
        </div>
        <div className={styles.featureItem}>
          <FaChartLine className={styles.icon} />
          <h3>Digital Marketing</h3>
          <p>Boost your business with digital marketing tools.</p>
        </div>
        <div className={styles.featureItem}>
          <FaBullhorn className={styles.icon} />
          <h3>Marketing</h3>
          <p>Effective marketing strategies to grow your business.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
