// import React from "react";
// import "./Sidebar.css"; // Import the CSS file
// import { FaTasks, FaUserFriends, FaUsers, FaBullhorn, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
// import { MdDashboard, MdDateRange } from "react-icons/md";
// // import { IoMdPerson } from "react-icons/io";
// import logo from "../Admin/logo.png"; // Adjust the path as necessary

// const Sidebar = () => {
//   return (
//     <div className="sidebar-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">
//           <img src={logo} alt="Logo" />

//         {/* <div><h3>EMS</h3></div> */}

//         </div>

        
//         <ul className="menu">
//           <li className="active"><MdDashboard className="icon" /> Dashboard</li>
//           <li><FaTasks className="icon" /> Task</li>
//           <li><FaUserFriends className="icon" /> Leave</li>
//           <li><FaUsers className="icon" /> Employees</li>
//           <li><FaBullhorn className="icon" /> Announcement</li>
//         </ul>
//         <button className="logout">
//           <FaSignOutAlt className="icon" /> Logout
//         </button>
//       </div>


//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import {
//   FaTasks,
//   FaUserFriends,
//   FaUsers,
//   FaBullhorn,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import logo from "../Admin/logo.png";

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const menuItems = [
//     { name: "Dashboard", icon: <MdDashboard className="icon" />, link: "/" },
//     { name: "Task", icon: <FaTasks className="icon" />, link: "/task" },
//     { name: "Leave", icon: <FaUserFriends className="icon" />, link: "/leave" },
//     { name: "Employees", icon: <FaUsers className="icon" />, link: "/employees" },
//     { name: "Announcement", icon: <FaBullhorn className="icon" />, link: "/announcement" },
//   ];

//   return (
//     <div className="sidebar-container">
//       <div className="sidebar">
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//         </div>
//         <ul className="menu">
//           {menuItems.map((item) => (
//             <li
//               key={item.name}
//               className={activeItem === item.name ? "active" : ""}
//               onClick={() => setActiveItem(item.name)}
//             >
//               <Link to={item.link} className="menu-link">
//                 {item.icon} {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <button className="logout">
//           <FaSignOutAlt className="icon" /> Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";  // Changed from Link to NavLink
import "../css/Sidebar.css";
import {
  FaTasks,
  FaUserFriends,
  FaUsers,
  FaBullhorn,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import logo from "../images/logo.png"; // Adjust the path as necessary

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="icon" />, link: "/" },
    { name: "Task", icon: <FaTasks className="icon" />, link: "/task" },
    { name: "Leave", icon: <FaUserFriends className="icon" />, link: "/leave" },
    { name: "Employees", icon: <FaUsers className="icon" />, link: "/employee" },
    { name: "Announcement", icon: <FaBullhorn className="icon" />, link: "/announce" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.link} 
                className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              >
                {item.icon} {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="logout">
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
