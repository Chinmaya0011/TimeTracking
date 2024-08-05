import React from 'react';
import styles from '../../assets/styles/Home/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <h1>Streamline Your Employee Management</h1>
        <p>Our CMS helps you manage your employees efficiently and effectively.</p>
        <p>Track employee performance, manage payroll, and ensure compliance with our comprehensive suite of tools. Whether you're a small business or a large corporation, our CMS scales with your needs.</p>
        <div className={styles.buttons}>
          <button className={styles.ctaButton}>Learn More</button>
          <button className={styles.secondaryButton}>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
