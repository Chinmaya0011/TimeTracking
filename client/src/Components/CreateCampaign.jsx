import React, { useContext, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import style from '../assets/styles/CreateCampaign.module.css';
import { EmployeeContext } from '../Context/EmployeeContext';

const CreateCampaign = () => {
  const { employees } = useContext(EmployeeContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedEmployee((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((email) => email !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !tags || !link || !image || selectedEmployee.length === 0) {
      setError('All fields are required');
      return;
    }
    setError('');
    
    const campaignData = {
      title,
      description,
      tags,
      link,
      image, // You might need to send the image as a file, not a URL
      employees: selectedEmployee,
    };

    try {
      // Replace the URL with your API endpoint
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaignData),
      });

      if (!response.ok) {
        throw new Error('Failed to create campaign');
      }

      setSuccess('Campaign created successfully!');
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className={style.settingsContainer}>
      <h1 className={style.heading}>Create Campaign</h1>
      <form className={style.settingsForm} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <div className={style.labelContainer}>
            <label className={style.label} htmlFor="title">Title</label>
          </div>
          <input
            type="text"
            id="title"
            className={style.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <div className={style.labelContainer}>
            <label className={style.label} htmlFor="description">Description</label>
          </div>
          <textarea
            id="description"
            className={style.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <div className={style.labelContainer}>
            <label className={style.label} htmlFor="tags">Tags</label>
          </div>
          <input
            type="text"
            id="tags"
            className={style.input}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <div className={style.labelContainer}>
            <label className={style.label} htmlFor="link">Link</label>
          </div>
          <input
            type="url"
            id="link"
            className={style.input}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <div className={style.labelContainer}>
            <label className={style.label}>Upload Image</label>
          </div>
          <label htmlFor="upload" className={style.uploadLabel}>
            <FaUpload className={style.uploadIcon} /> Choose Image
            <input
              type="file"
              id="upload"
              className={style.fileInput}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
          {image && (
            <div className={style.profilePicContainer}>
              <img src={image} alt="Campaign" className={style.profilePic} />
            </div>
          )}
        </div>
        <div className={style.formGroup}>
          <div className={style.labelContainer}>
            <label className={style.label}>Select Employees</label>
          </div>
          <div className={style.checkboxGroup}>
            {employees.map((employee) => (
              <div key={employee._id} className={style.checkboxItem}>
                <input
                  type="checkbox"
                  id={`employee-${employee._id}`}
                  value={employee.email}
                  checked={selectedEmployee.includes(employee.email)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`employee-${employee._id}`} className={style.checkboxLabel}>
                  {employee.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        {selectedEmployee.length > 0 && (
          <div className={style.selectedEmployee}>
            <p>Selected Employees:</p>
            <ul>
              {selectedEmployee.map((email) => {
                const employee = employees.find((emp) => emp.email === email);
                return employee ? <li key={employee._id}>{employee.name}</li> : null;
              })}
            </ul>
          </div>
        )}
        {error && <p className={style.error}>{error}</p>}
        {success && <p className={style.success}>{success}</p>}
        <div className={style.buttonContainer}>
          <button type="submit" className={style.saveButton}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
