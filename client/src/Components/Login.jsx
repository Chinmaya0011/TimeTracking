import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import styles from '../assets/styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.loginTitle}>Login</h2>
        <div className={styles.loginFormGroup}>
          <label className={styles.loginLabel}>
            <span>Email</span>
          </label>
          <input
            className={styles.loginInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.loginFormGroup}>
          <label className={styles.loginLabel}>
            <span>Password</span>
          </label>
          <input
            className={styles.loginInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.loginButton} type="submit">Login</button>
        <div className={styles.loginLinks}>
          <Link to="/forgot-password" className={styles.forgotPasswordLink}>Forgot Password?</Link>
          <Link to="/signup" className={styles.signupLink}>Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
