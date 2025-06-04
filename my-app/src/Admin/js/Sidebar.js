

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
    { name: "Dashboard", icon: <MdDashboard className="icon" />, link: "/admin/dashboard" },
    { name: "Task", icon: <FaTasks className="icon" />, link: "/admin/task" },
    { name: "Leave", icon: <FaUserFriends className="icon" />, link: "/admin/leave" },
    { name: "Employees", icon: <FaUsers className="icon" />, link: "/admin/employee" },
    { name: "Announcement", icon: <FaBullhorn className="icon" />, link: "/admin/announce" },
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
