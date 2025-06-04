
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";  // Changed from Link to NavLink
// import "../css/sidebar.css";
// import {
//   FaTasks,
//   FaUserFriends,
//   FaUsers,
//   FaBullhorn,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import pic from "../profile.png"; // Adjust the path as necessary

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const menuItems = [
//     { name: "Dashboard", icon: <MdDashboard className="icon" />, link: "/employee/dashboard" },
//     { name: "Task", icon: <FaTasks className="icon" />, link: "/employee/task" },
//     { name: "Leave", icon: <FaUserFriends className="icon" />, link: "/employee/leave" },
//   ];

//   return (
//     <div className="sidebar-container1">
//       <div className="sidebar1">
//         <div className="logo">
//         <img src={pic} alt="Logo" />
//       </div>
//       <div className="welcome-text1">
//         <h4>Welcome Back, Karma</h4>
//         <span>UI/UX Designer</span>
//       </div>

//         <ul className="menu1">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <NavLink 
//                 to={item.link} 
//                 className={({ isActive }) => isActive ? "menu-link1 active" : "menu-link1"}
//               >
//                 {item.icon} {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//         <button className="logout1">
//           <FaSignOutAlt className="icon" /> Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/sidebar.css";
import {
  FaTasks,
  FaUserFriends,
  FaUsers,
  FaBullhorn,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import defaultPic from "../profile.png"; // Default image if no photo exists

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [employee, setEmployee] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(defaultPic);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const employeeId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        
        if (!employeeId) return;

        const response = await fetch(
          `http://localhost:8765/EMSUSERMICROSERVICE/api/employee/by-employee-id/${employeeId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.ok) {
          const data = await response.json();
          setEmployee(data);
          if (data.photo) {
            setPhotoUrl(`http://localhost:8765/EMSUSERMICROSERVICE/images/${data.photo}`);
          }
        }
      } catch (err) {
        console.error("Error fetching employee data:", err);
      }
    };

    fetchEmployeeData();
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="icon" />, link: "/employee/dashboard" },
    { name: "Task", icon: <FaTasks className="icon" />, link: "/employee/task" },
    { name: "Leave", icon: <FaUserFriends className="icon" />, link: "/employee/leave" },
  ];

  return (
    <div className="sidebar-container1">
      <div className="sidebar1">
        <div className="logo">
          <img src={photoUrl} alt="Profile" className="sidebar-profile-pic" />
        </div>
        <div className="welcome-text1">
          <h4>Welcome Back, {employee?.name || 'User'}</h4>
          <span>{employee?.employeeTitle || 'Employee'}</span>
        </div>

        <ul className="menu1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.link} 
                className={({ isActive }) => isActive ? "menu-link1 active" : "menu-link1"}
              >
                {item.icon} {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="logout1">
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;