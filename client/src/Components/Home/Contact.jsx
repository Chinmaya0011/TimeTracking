import React from 'react';
import styles from '../../assets/styles/Home/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <form>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className={styles.formGroup}>
          <label>Message:</label>
          <textarea />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
