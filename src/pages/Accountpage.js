// src/components/AccountPage.js
import React, { useState } from 'react';
import './AccuntPage.css';

const AccountPage = ({ user, setUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // In a real application, you would send the updated user data to the server
    // and update the user information in the backend database.

    // For this example, we'll just simulate the update by setting the new data.
    // In a real application, you would also handle errors and loading states.
    setUser({
      ...user,
      ...formData,
    });

    setEditMode(false);
  };

  return (
    <div className="account-container">
      <header>
        <h1>Student Profile</h1>
      </header>

      <section className="account-content">
        <div className="profile">
          <div className="profile-picture"></div>
          <div className="profile-details">
            {!editMode ? (
              <div>
                {/* Display user information */}
                <p>
                  <strong>Name:</strong> {`${user.firstName} ${user.lastName}`}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <button onClick={handleEditClick}>Edit</button>
              </div>
            ) : (
              <div>
                {/* Edit user information form */}
                <label>
                  <strong>First Name:</strong>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <strong>Last Name:</strong>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <strong>Email:</strong>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <button onClick={handleSaveClick}>Save</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
