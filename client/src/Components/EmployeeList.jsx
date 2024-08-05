import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';
import styles from '../assets/styles/EmployeeList.module.css';
import ActionArea from './ActionArea';
import EmployeeTable from './EmployeeTable';

const EmployeeList = () => {
  const {
    employees,
    loading,
    error,
  } = useContext(EmployeeContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.employeeList}>
      <h1 className={styles.heading}>Chinmaya S93MKPRSXM</h1>

      <ActionArea setSearchQuery={setSearchQuery} setGenderFilter={setGenderFilter} />

      {employees.length > 0 ? (
        <EmployeeTable searchQuery={searchQuery} genderFilter={genderFilter} />
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
