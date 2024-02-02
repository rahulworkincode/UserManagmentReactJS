import React, { useState } from 'react';

const UserProfile = ({ user, onEditProfile, onLogout, onUpdateAuthInfo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    onEditProfile(editedData);
    onUpdateAuthInfo(editedData); // Update authentication info
    setEditMode(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {editMode ? (
        <div>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={editedData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" value={editedData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" name="password" value={editedData.password} onChange={handleChange} />
          </div>
          <button className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <button className="btn btn-secondary" onClick={handleEditProfile}>Edit Profile</button>
        </div>
      )}
      <button className="btn btn-danger mt-3" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
