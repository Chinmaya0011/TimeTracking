import React from 'react';
import { FaDollarSign, FaStar, FaBriefcase } from 'react-icons/fa';
import styles from '../../assets/styles/Home/Pricing.module.css';

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <h2>Pricing</h2>
      <p>Choose the plan that fits your needs best.</p>
      <div className={styles.pricingList}>
        <div className={styles.pricingItem}>
          <FaDollarSign className={styles.icon} />
          <h3>Free</h3>
          <p>Basic access to core features.</p>
          <ul>
            <li>Employee Login</li>
            <li>Basic Tracking</li>
            <li>Limited Support</li>
          </ul>
          <button className={styles.button}>Sign Up</button>
        </div>
        <div className={styles.pricingItem}>
          <FaStar className={styles.icon} />
          <h3>Premium</h3>
          <p>Advanced features and priority support.</p>
          <ul>
            <li>Employee Login</li>
            <li>Advanced Tracking</li>
            <li>Priority Support</li>
            <li>Salary Management</li>
            <li>AI Features</li>
          </ul>
          <button className={styles.button}>Upgrade</button>
        </div>
        <div className={styles.pricingItem}>
          <FaBriefcase className={styles.icon} />
          <h3>Enterprise</h3>
          <p>All features with personalized solutions.</p>
          <ul>
            <li>All Premium Features</li>
            <li>Custom Solutions</li>
            <li>Dedicated Account Manager</li>
            <li>Custom Integrations</li>
          </ul>
          <button className={styles.button}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
