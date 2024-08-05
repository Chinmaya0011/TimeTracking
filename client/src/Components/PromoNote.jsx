import React from 'react';
import styles from '../assets/styles/PromoNote.module.css'; // Ensure this CSS file exists

const PromoNote = () => {
  return (
    <div className={styles.promoNoteContainer}>
      <h2 className={styles.heading}>Create a Website for Your Business</h2>
      <p className={styles.subheading}>Starting from just ₹999!</p>
    </div>
  );
};

export default PromoNote;
