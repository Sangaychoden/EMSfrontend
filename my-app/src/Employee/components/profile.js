
// import React, { useState, useEffect } from "react";
// import Sidebar from "./sidebar1";
// import Navbar from "./navbar1";
// import "../css/profile.css";
// import defaultPic from "../profile.png";
// import { FaCamera, FaArrowLeft, FaEdit } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Profile = () => {
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const employeeId = localStorage.getItem('userId');
//         const token = localStorage.getItem('token');
        
//         if (!employeeId) {
//           throw new Error("Employee ID not found");
//         }

//         const response = await fetch(
//           `http://localhost:8765/EMSUSERMICROSERVICE/api/employee/by-employee-id/${employeeId}`,
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             }
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setEmployee(data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching employee data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="dashboard-container2">
//         <div className="sidebar-with-welcome2">
//           <Sidebar />
//         </div>
//         <div className="main-content2">
//           <Navbar />
//           <div className="profile-container">
//             <p>Loading profile data...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="dashboard-container2">
//         <div className="sidebar-with-welcome2">
//           <Sidebar />
//         </div>
//         <div className="main-content2">
//           <Navbar />
//           <div className="profile-container">
//             <p className="error-message">Error: {error}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!employee) {
//     return (
//       <div className="dashboard-container2">
//         <div className="sidebar-with-welcome2">
//           <Sidebar />
//         </div>
//         <div className="main-content2">
//           <Navbar />
//           <div className="profile-container">
//             <p>No employee data found</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container2">
//       {/* Sidebar */}
//       <div className="sidebar-with-welcome2">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="main-content2">
//         <Navbar />

//         <div className="profile-container">
//           <div className="profile-header">
//             <Link to="/dashboard">
//               <FaArrowLeft className="back-icon" />
//             </Link>
//             <div className="profile-pic-section">
//               <img
//                 src={employee.photo || defaultPic}
//                 alt="Profile"
//                 className="profile-pic"
//               />
//               <div className="camera-icon">
//                 <FaCamera />
//               </div>
//             </div>
//             <div className="profile-info">
//               <h3>{employee.name}</h3>
//               <p>{employee.employeeTitle}</p>
//             </div>
//             <Link to="/employee/editprofile" className="edit-btn">
//               Edit Details <FaEdit className="edit-icon" />
//             </Link>
//           </div>

//           <div className="profile-details">
//             <div className="personal-info box">
//               <h4><i className="fas fa-user"></i> Personal Information</h4>
//               <div className="info-grid">
//                 <p><strong>Employee Name:</strong> {employee.name}</p>
//                 <p><strong>Email:</strong> {employee.email}</p>
//                 <p><strong>Phone Number:</strong> {employee.phoneNumber}</p>
//                 <p><strong>Employee Title:</strong> {employee.employeeTitle}</p>
//                 <p><strong>Employee Type:</strong> {employee.employeeType}</p>
//               </div>
//             </div>

//             <div className="achievements box">
//               <h4><i className="fas fa-trophy"></i> Achievements</h4>
//               <ul className="achievements-list">
//                 {employee.achievements ? (
//                   employee.achievements.split('\n').map((achievement, index) => (
//                     <li key={index}>{achievement}</li>
//                   ))
//                 ) : (
//                   <li>No achievements recorded yet</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/profile.css";
import defaultPic from "../profile.png";
import { FaCamera, FaArrowLeft, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setShowSaveButton(true);
    }
  };

  const handleSavePhoto = async () => {
    if (!selectedFile || !employee) return;

    const formData = new FormData();
    formData.append('photo', selectedFile);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        `http://localhost:8765/EMSUSERMICROSERVICE/api/employee/${employee.id}/upload-photo`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setEmployee({ ...employee, photo: result.photoUrl.split('/').pop() });
      setPreviewUrl(`http://localhost:8765/EMSUSERMICROSERVICE${result.photoUrl}`);
      setShowSaveButton(false);
      setSelectedFile(null);
    } catch (err) {
      setError(err.message);
      console.error("Error uploading photo:", err);
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setPreviewUrl(employee.photo 
      ? `http://localhost:8765/EMSUSERMICROSERVICE/images/${employee.photo}`
      : defaultPic);
    setShowSaveButton(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container2">
        <div className="sidebar-with-welcome2">
          <Sidebar />
        </div>
        <div className="main-content2">
          <Navbar />
          <div className="profile-container">
            <p>Loading profile data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container2">
        <div className="sidebar-with-welcome2">
          <Sidebar />
        </div>
        <div className="main-content2">
          <Navbar />
          <div className="profile-container">
            <p className="error-message">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="dashboard-container2">
        <div className="sidebar-with-welcome2">
          <Sidebar />
        </div>
        <div className="main-content2">
          <Navbar />
          <div className="profile-container">
            <p>No employee data found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container2">
      {/* Sidebar */}
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content2">
        <Navbar />

        <div className="profile-container">
          <div className="profile-header">
            <Link to="/employee/dashboard">
              <FaArrowLeft className="back-icon1" />
            </Link>
            <div className="profile-pic-section">
              <img
                src={previewUrl || defaultPic}
                alt="Profile"
                className="profile-pic1"
              />
              <div className="camera-icon">
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <label htmlFor="file-input">
                  <FaCamera />
                </label>
              </div>
              {showSaveButton && (
                <div className="photo-actions">
                  <button onClick={handleSavePhoto} className="save-btn">
                    <FaSave /> Save
                  </button>
                  <button onClick={handleCancelUpload} className="cancel-btn">
                    <FaTimes /> Cancel
                  </button>
                </div>
              )}
            </div>
            <div className="profile-info">
              <h3>{employee.name}</h3>
              <p>{employee.employeeTitle}</p>
            </div>
            <Link to="/employee/editprofile" className="edit-btn">
              Edit Details <FaEdit className="edit-icon" />
            </Link>
          </div>

          <div className="profile-details">
            <div className="personal-info box">
              <h4><i className="fas fa-user"></i> Personal Information</h4>
              <div className="info-grid">
                <p><strong>Employee Name:</strong> {employee.name}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone Number:</strong> {employee.phoneNumber}</p>
                <p><strong>Employee Title:</strong> {employee.employeeTitle}</p>
                <p><strong>Employee Type:</strong> {employee.employeeType}</p>
              </div>
            </div>

            <div className="achievements box">
              <h4><i className="fas fa-trophy"></i> Achievements</h4>
              <ul className="achievements-list">
                {employee.achievements ? (
                  employee.achievements.split('\n').map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))
                ) : (
                  <li>No achievements recorded yet</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;