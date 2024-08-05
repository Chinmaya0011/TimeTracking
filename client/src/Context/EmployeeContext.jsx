import React, { createContext, useState, useEffect } from 'react';

// Access the environment variable for API URL
const apiUrl = `${window.location.protocol}//${window.location.hostname}:1000`;

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [notifications, setNotifications] = useState([]); // State for notifications

  // Fetch employees from the API
  const fetchEmployees = async () => {
    setLoading(true); // Set loading to true at the beginning
    try {
      const response = await fetch(`${apiUrl}/api/employees`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Sync employees with local storage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  // Persist employees to local storage
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Notification handler
  const sendNotification = () => {
    const newNotification = `Notification at ${new Date().toLocaleTimeString()}`;
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  // Set interval for notifications
  useEffect(() => {
    const interval = setInterval(sendNotification, 100000); // Every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handleUpdate = async (id, updatedEmployee) => {
    try {
      const response = await fetch(`${apiUrl}/api/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployee),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(employees.map((emp) => (emp._id === id ? data : emp)));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/employees/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      await response.json();
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleView = (id) => {
    console.log('View employee with ID:', id);
  };

  const handleAdd = () => {
    window.location.href = '/Register'; // Use window.location.href for redirection
  };

  const handlePrint = () => {
    console.log('Print employee list');
  };

  const handleDownload = () => {
    console.log('Download employee list');
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsapp = (phone) => {
    const encodedPhone = encodeURIComponent(phone);
    window.location.href = `https://wa.me/${encodedPhone}`;
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleOpenCalculator = () => {
    setShowCalculator(true);
  };

  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };

  const handleRefresh = async () => {
    setIsRefresh(true);
    await fetchEmployees(); // Fetch the latest employees
    setTimeout(() => {
      setIsRefresh(false);
    }, 600); // Match the duration of the animation
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        error,
        showCalculator,
        isRefresh,
        notifications, // Provide notifications state
        handleAdd,
        handlePrint,
        handleDownload,
        handleEmail,
        handleWhatsapp,
        handleCall,
        handleUpdate,
        handleDelete,
        handleView,
        handleOpenCalculator,
        handleCloseCalculator,
        handleRefresh,
        fetchEmployees, // Pass fetchEmployees as value
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeProvider, EmployeeContext };
