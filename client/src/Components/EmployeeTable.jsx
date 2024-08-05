import React, { useContext, useState } from 'react';
import styles from '../assets/styles/EmployeeListTable.module.css';
import { FaEdit, FaEye, FaEnvelope, FaWhatsapp, FaPhone, FaCreditCard, FaChartLine, FaTrashAlt, FaAddressBook } from 'react-icons/fa';
import EmployeeModal from './EmployeeModal';
import { EmployeeContext } from '../Context/EmployeeContext';

const EmployeeTable = ({ searchQuery, genderFilter }) => {
  const { employees, handleEmail, handleWhatsapp, handleCall, handlePayment } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showContactPopup, setShowContactPopup] = useState(null);

  const handleView = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  const handleContactClick = (employee) => {
    if (showContactPopup === employee._id) {
      setShowContactPopup(null); // Close popup if clicking on the same employee
    } else {
      setShowContactPopup(employee._id); // Open popup for the selected employee
    }
  };

  const handleClosePopup = () => {
    setShowContactPopup(null);
  };

  // Filter employees based on search query and gender filter
  const filteredEmployees = employees.filter(employee => {
    const matchesSearchQuery = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                               employee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenderFilter = genderFilter === '' || employee.gender === genderFilter;

    return matchesSearchQuery && matchesGenderFilter;
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={employee._id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.gender}</td>
              <td>{employee.position}</td>
              <td>{employee.address}</td>
              <td className={styles.actions}>
                <button
                  onClick={() => handleView(employee)}
                  className={`${styles.actionButton} ${styles.viewButton}`}
                  title="View Details"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleContactClick(employee)}
                  className={`${styles.actionButton} ${styles.contactButton}`}
                  title="Contact"
                >
                  <FaAddressBook />
                </button>
                {showContactPopup === employee._id && (
                  <div className={styles.contactPopup}>
                    <button
                      onClick={() => handleEmail(employee.email)}
                      className={`${styles.actionButton} ${styles.emailButton}`}
                      title="Send Email"
                    >
                      <FaEnvelope />
                    </button>
                    <button
                      onClick={() => handleWhatsapp(employee.mobile)}
                      className={`${styles.actionButton} ${styles.whatsappButton}`}
                      title="Send WhatsApp"
                    >
                      <FaWhatsapp />
                    </button>
                    <button
                      onClick={() => handleCall(employee.mobile)}
                      className={`${styles.actionButton} ${styles.callButton}`}
                      title="Make Call"
                    >
                      <FaPhone />
                    </button>
                    <button
                      onClick={handleClosePopup}
                      className={`${styles.actionButton} ${styles.closePopupButton}`}
                      title="Close"
                    >
                      ×
                    </button>
                  </div>
                )}
                <button
                  onClick={() => handlePayment(employee._id)}
                  className={`${styles.actionButton} ${styles.paymentButton}`}
                  title="Process Payment"
                >
                  <FaCreditCard />
                </button>
                <button
                  onClick={() => {/* Handle analysis click here */}}
                  className={`${styles.actionButton} ${styles.analysisButton}`}
                  title="Analyze Data"
                >
                  <FaChartLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <EmployeeModal employee={selectedEmployee} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EmployeeTable;
