import React, { useContext, useState, useRef } from 'react';
import { 
  FaPlus, FaDownload, FaUsers, FaSearch, FaSyncAlt, FaCalculator, 
  FaBullhorn, FaBell, FaUserCircle, FaCog, FaCalendar
} from 'react-icons/fa';
import styles from '../assets/styles/ActionArea.module.css';
import Calculator from './Calculator';
import Modal from './Modal';
import { EmployeeContext } from '../Context/EmployeeContext';
import { Link } from 'react-router-dom';
import notiSound from "../assets/sounds/notification.mp3";
import Calendar from './Calendar';

const ActionArea = ({ setSearchQuery, setGenderFilter }) => {
  const {
    employees,
    handleAdd,
    handleDownload,
    handleRefresh, // Use handleRefresh from context
    showCalculator,
    handleOpenCalculator,
    handleCloseCalculator,
    isRefresh,
    notifications
  } = useContext(EmployeeContext);

  const [showCalendar, setShowCalendar] = useState(false);
  const audioRef = useRef(new Audio(notiSound));

  const handleOpenCalendar = () => setShowCalendar(true);
  const handleCloseCalendar = () => setShowCalendar(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  return (
    <div className={styles.actionArea}>
      <Link
        onClick={handleAdd} 
        className={`${styles.actionButton} ${styles.addButton}`}
        title="Add New"
        to={"/Register"}
      >
        <FaPlus />
      </Link>
      <button 
        onClick={handleDownload} 
        className={`${styles.actionButton} ${styles.downloadButton}`}
        title="Download"
      >
        <FaDownload />
      </button>
      <button 
        className={`${styles.actionButton} ${styles.countButton}`}
        title="Total Employees"
      >
        <FaUsers />
        <span className={styles.count}>{employees.length}</span>
      </button>
      <button 
        className={`${styles.actionButton} ${styles.notificationButton}`}
        title="Notifications"
      >
        <FaBell />
        {notifications.length > 0 && (
          <span className={styles.notificationCount}>{notifications.length}</span>
        )}
      </button>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input 
          type="text" 
          placeholder="Search..." 
          className={styles.searchInput}
          title="Search Employees"
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.filterContainer}>
        <select className={styles.filterSelect} title="Filter by Gender" onChange={handleGenderFilterChange}>
          <option value="">Filter by Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button 
          className={`${styles.actionButton} ${styles.refreshButton}`} 
          onClick={handleRefresh} // Use handleRefresh from context
          title="Refresh"
        >
          <FaSyncAlt className={`${styles.refresh} ${isRefresh ? styles.clicked : ''}`} />
        </button>
        <button 
          className={`${styles.actionButton} ${styles.calculatorButton}`} 
          onClick={handleOpenCalculator}
          title="Open Calculator"
        >
          <FaCalculator />
        </button>
        {showCalculator && (
          <Modal onClose={handleCloseCalculator}>
            <Calculator />
          </Modal>
        )}
        <button 
          className={`${styles.actionButton} ${styles.calendarButton}`} 
          onClick={handleOpenCalendar}
          title="Open Calendar"
        >
          <FaCalendar />
        </button>
        {showCalendar && (
          <Modal onClose={handleCloseCalendar}>
            <Calendar />
          </Modal>
        )}
        <Link 
          className={`${styles.actionButton} ${styles.campaignButton}`}
          title="Campaigns"
          to={"/ads"}
        >
          <FaBullhorn />
        </Link>
        {/* <Link 
          className={`${styles.actionButton} ${styles.profileButton}`}
          title="Profile"
          to={"/Profile"}
        >
          <FaUserCircle />
        </Link> */}
        <Link 
          className={`${styles.actionButton} ${styles.settingsButton}`}
          title="Settings"
          to={"/Setting"}
        >
          <FaCog />
        </Link>
      </div>
    </div>
  );
};

export default ActionArea;
