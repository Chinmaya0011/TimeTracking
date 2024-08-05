// src/components/ContactPopup.js
import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '../assets/styles/ContactPopup.module.css';

const ContactPopup = ({ onClose, employees }) => {
  return (
    <div className={styles.popup}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
        <FaWhatsapp />
      </a>
      <a href="tel:yourphonenumber" className={styles.iconButton}>
        <FaPhone />
      </a>
      <a href="mailto:youremail@example.com" className={styles.iconButton}>
        <FaEnvelope />
      </a>
      <div className={styles.employeeInfo}>
        <h4>Total Employees: {employees.length}</h4>
      </div>
    </div>
  );
};

export default ContactPopup;
