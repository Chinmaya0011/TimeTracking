import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styles from '../../assets/styles/Home/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>Employee Management CMS</div>
        <div className={styles.links}>
          <Link to="/" className={styles.footerLink}>Home</Link>
          <Link to="/features" className={styles.footerLink}>Features</Link>
          <Link to="/pricing" className={styles.footerLink}>Pricing</Link>
          <Link to="/about" className={styles.footerLink}>About</Link>
          <Link to="/contact" className={styles.footerLink}>Contact</Link>
        </div>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink}>
            <FaFacebookF size={20} />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaTwitter size={20} />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Employee Management CMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
