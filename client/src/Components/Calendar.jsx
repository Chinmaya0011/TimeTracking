import React, { useState } from 'react';
import styles from '../assets/styles/Calendar.module.css'; // Import your CSS module
import Modal from './Modal';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Helper functions to handle month navigation
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const today = new Date();

  // Create an array of days for the calendar
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Handle day click
  const handleDayClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
    // You can also add functionality to show more details about the selected date
  };

  return (
    <div className={styles.calendar}>
      <header className={styles.header}>
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </header>
      <div className={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className={styles.weekday}>{day}</div>
        ))}
      </div>
      <div className={styles.days}>
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className={styles.day}></div>
        ))}
        {daysArray.map(day => {
          const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
          const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
          return (
            <div
              key={day}
              className={`${styles.day} ${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
      {selectedDate && (
        <div className={styles.selectedDateInfo}>
          <h3>Selected Date:</h3>
          <p>{selectedDate.toDateString()}</p>
          {/* Add more details or actions related to the selected date */}
        </div>
      )}
    </div>
  );
};

export default Calendar;
