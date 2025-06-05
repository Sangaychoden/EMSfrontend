
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/editprofile.css";
import defaultPic from "../profile.jpg";
import { FaCamera, FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [previewUrl, setPreviewUrl] = useState(defaultPic);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const employeeId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        
        if (!employeeId) {
          throw new Error("Employee ID not found");
        }

        const response = await fetch(
          `http://localhost:8765/EMSUSERMICROSERVICE/api/employee/by-employee-id/${employeeId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setEmployee(data);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phoneNumber);
        if (data.photo) {
          setPreviewUrl(`http://localhost:8765/EMSUSERMICROSERVICE/images/${data.photo}`);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching employee data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const employeeId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      if (!employeeId) {
        throw new Error("Employee ID not found");
      }

      const updateResponse = await fetch(
        `http://localhost:8765/EMSUSERMICROSERVICE/api/employee/update/${employee.id}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber: phone
          })
        }
      );

      if (!updateResponse.ok) {
        throw new Error(`Profile update failed: ${updateResponse.status}`);
      }

      const updatedData = await updateResponse.json();
      setEmployee(updatedData);
      setSuccessMessage("Profile updated successfully!");
      setShowSuccessModal(true);
    } catch (err) {
      setError(err.message);
      console.error("Error updating profile:", err);
    }
  };

  const handlePasswordSave = async () => {
    try {
      const employeeId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      if (!employeeId) {
        throw new Error("Employee ID not found");
      }

      if (newPassword !== confirmPassword) {
        throw new Error("New passwords don't match");
      }

      const response = await fetch(
        `http://localhost:8765/EMSUSERMICROSERVICE/api/employee/${employeeId}/change-password`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            oldPassword,
            newPassword,
            confirmPassword
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Password change failed");
      }

      setSuccessMessage("Password changed successfully!");
      setShowSuccessModal(true);
      setShowPasswordPopup(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
      console.error("Error changing password:", err);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    if (successMessage === "Profile updated successfully!") {
      navigate('/employee/profile');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!employee) {
    return <div>No employee data found</div>;
  }

  return (
    <div className="dashboard-container2">
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      <div className="main-content2">
        <Navbar />

        <div className="edit-profile-container">
          <div style={{marginLeft:'-350px'}} className="edit-profile-header">
            <FaArrowLeft style={{marginTop:'-5px'}} className="back-arrow" onClick={handleBackClick} />
            <h2  >Edit Profile</h2>
          </div>

          <div className="profile-pic-section">
            <img src={previewUrl} alt="Profile" className="profile-pic" />
          </div>

          <div className="edit-form">
            <label>Name:</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

            <label>Email:</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email"
            />

            <label>Phone Number:</label>
            <input 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              type="tel"
            />

            <p
              className="change-password-link"
              onClick={() => setShowPasswordPopup(true)}
            >
              Change Password
            </p>

            <button 
              className="save-button"
              onClick={handleSaveChanges}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>

      {showPasswordPopup && (
        <div className="password-popup-overlay">
          <div className="password-popup">
            <IoClose
              className="popup-close-icon"
              onClick={() => setShowPasswordPopup(false)}
            />
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button 
              className="popup-save-button" 
              onClick={handlePasswordSave}
            >
              Save
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-modal-content">
              <IoClose
                className="modal-close-icon"
                onClick={closeSuccessModal}
              />
              <div className="success-icon">✓</div>
              <h3>Success!</h3>
              <p>{successMessage}</p>
              <button 
                className="modal-ok-button"
                onClick={closeSuccessModal}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;