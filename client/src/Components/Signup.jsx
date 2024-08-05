import React from 'react';
import styles from '../assets/styles/Signup.module.css'; // Import CSS Module

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm}>
        <h2 className={styles.signupTitle}>Create an Account</h2>
        <div className={styles.signupFormGroup}>
          <label className={styles.signupLabel} htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className={styles.signupInput}
            placeholder="Enter your name"
          />
        </div>
        <div className={styles.signupFormGroup}>
          <label className={styles.signupLabel} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={styles.signupInput}
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.signupFormGroup}>
          <label className={styles.signupLabel} htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className={styles.signupInput}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={styles.signupButton}>Sign Up</button>
        <div className={styles.signupLinks}>
          <a href="/login" className={styles.loginLink}>Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
