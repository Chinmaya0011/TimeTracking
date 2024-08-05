import React, { useState } from 'react';
import { FaSave, FaEdit, FaTimes, FaUserCircle, FaBarcode } from 'react-icons/fa';
import styles from '../assets/styles/Settings.module.css'; // Ensure this CSS file exists

const Settings = () => {
  const initialData = {
    adminName: 'Chinmaya Kumar Mishra',
    mobile: '7077835119',
    email: 'imchinu17@gmail.com',
    upiId: '7077835119@upi',
    address: 'New York',
    profilePicUrl: 'https://www.linkedin.com/in/finasor/',
    uploadedProfilePic: null,
    uploadedUpiBarcode: null,
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setIsEditing(false); // Disable editing after saving
  };

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setFormData({ ...formData, [key]: e.target.result });
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(initialData);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.heading}>Admin Settings</h1>
      <form onSubmit={handleSubmit} className={styles.settingsForm}>
        <div className={styles.formGroup}>
          <label htmlFor="adminName" className={styles.label}>Admin Name</label>
          <input
            type="text"
            id="adminName"
            className={styles.input}
            value={formData.adminName}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobile" className={styles.label}>Mobile</label>
          <input
            type="tel"
            id="mobile"
            className={styles.input}
            value={formData.mobile}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="upiId" className={styles.label}>UPI ID</label>
          <input
            type="text"
            id="upiId"
            className={styles.input}
            value={formData.upiId}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>Address</label>
          <input
            type="text"
            id="address"
            className={styles.input}
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="profilePicUrl" className={styles.label}>Profile Picture URL</label>
          <input
            type="text"
            id="profilePicUrl"
            className={styles.input}
            value={formData.profilePicUrl}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.formGroup}>
          {isEditing ? (
            <label htmlFor="uploadedProfilePic" className={styles.uploadLabel}>
              Upload Profile Picture
              <input
                type="file"
                id="uploadedProfilePic"
                className={styles.fileInput}
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'uploadedProfilePic')}
              />
            </label>
          ) : (
            <div className={styles.profilePicContainer}>
              {formData.uploadedProfilePic ? (
                <img src={formData.uploadedProfilePic} alt="Uploaded Profile" className={styles.profilePic} />
              ) : (
                <FaUserCircle className={styles.profilePic} />
              )}
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="uploadedUpiBarcode" className={styles.label}>Upload UPI Barcode</label>
          {isEditing ? (
            <label htmlFor="uploadedUpiBarcode" className={styles.uploadLabel}>
              Upload Barcode Image
              <input
                type="file"
                id="uploadedUpiBarcode"
                className={styles.fileInput}
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'uploadedUpiBarcode')}
              />
            </label>
          ) : (
            <div className={styles.profilePicContainer}>
              {formData.uploadedUpiBarcode ? (
                <img src={formData.uploadedUpiBarcode} alt="UPI Barcode" className={styles.profilePic} />
              ) : (
                <FaBarcode className={styles.profilePic} />
              )}
            </div>
          )}
        </div>

        <div className={styles.buttonContainer}>
  {isEditing ? (
    <>
      <button type="submit" className={styles.saveButton}>
        <FaSave /> Save
      </button>
      <button type="button" className={styles.cancelButton} onClick={handleCancel}>
        <FaTimes /> Cancel
      </button>
    </>
  ) : (
    <div className={styles.nonEditingContainer}>
      <button type="button" className={styles.editButton} onClick={() => setIsEditing(true)}>
        <FaEdit /> Edit
      </button>
      <div className={styles.forgotPassword}>
        <a href="/forgot-password" className={styles.forgotPasswordLink}>Forgot Password?</a>
      </div>
    </div>
  )}
</div>

      </form>
    </div>
  );
};

export default Settings;
