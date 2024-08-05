import React, { useState, useContext, useEffect } from 'react';
import Modal from './Modal'; // Assuming Modal is in the same directory
import styles from '../assets/styles/EmployeeModal.module.css'; // Ensure this CSS file exists for styling
import { FaTrash, FaEdit, FaSave, FaTimes, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for Analysis
import { EmployeeContext } from '../Context/EmployeeContext';

const EmployeeModal = ({ employee, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const { handleUpdate, handleDelete } = useContext(EmployeeContext);

  // Update editedEmployee when employee prop changes
  useEffect(() => {
    setEditedEmployee(employee);
  }, [employee]);

  // Handle input changes during editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  // Handle form submission to update employee
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(employee._id, editedEmployee); // Call handleUpdate from context
    setIsEditing(true); // Exit editing mode
  };

  // Early return if no employee data
  if (!employee) return null;

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContent}>
        <h2>{isEditing ? 'Edit Employee Details' : 'Employee Details'}</h2>

        <form onSubmit={isEditing ? handleSubmit : (e) => e.preventDefault()} className={styles.form}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={isEditing ? editedEmployee.name : employee.name}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={isEditing ? editedEmployee.email : employee.email}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          <label>
            Mobile:
            <input
              type="text"
              name="mobile"
              value={isEditing ? editedEmployee.mobile : employee.mobile}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={isEditing ? editedEmployee.gender : employee.gender}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={isEditing ? editedEmployee.position : employee.position}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={isEditing ? editedEmployee.address : employee.address}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={isEditing ? new Date(editedEmployee.startDate).toISOString().substr(0, 10) : new Date(employee.startDate).toISOString().substr(0, 10)}
              onChange={isEditing ? handleChange : undefined}
              disabled={!isEditing}
            />
          </label>
          {isEditing ? (
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.saveButton}
             >
                <FaSave /> Save
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setIsEditing(false)}
              >
                <FaTimes /> Cancel
              </button>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <button className={styles.editButton} onClick={() => setIsEditing(true)}>
                <FaEdit /> Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  handleDelete(employee._id);
                  onClose();
                }}
              >
                <FaTrash /> Delete
              </button>
              <button className={styles.analysisButton}>
                <FaChartLine /> Analysis
              </button>
            </div>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default EmployeeModal;
