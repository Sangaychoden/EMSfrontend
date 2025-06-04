import React from "react";
import "../../Admin/css/Dashboard.css"; // Import the CSS file
import { FaTasks, FaUserFriends, FaUsers, FaBullhorn, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { MdDashboard, MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
// import logo from "../Admin/logo.png"; // Adjust the path as necessary
import Sidebar from "../js/Navbar"; // Import the Sidebar component
import Navbar from "../js/Sidebar"; // Import the Navbar component

const Dashboard = () => {
  return (
    <div className="dashboard-container5">
      {/* Sidebar */}
      <Sidebar />
      

      {/* Main Content */}
      <div className="main-content5">
        {/* Navbar */}

        <Navbar />
        {/* <div className="navbar">
          <span className="date"><MdDateRange /> 9 March</span>
          <span className="profile-icon"><IoMdPerson /></span>
        </div> */}

        {/* Dashboard Content */}
        <div className="content" style={{marginTop:"-600px"}}>
          <h2>Welcome, HR</h2>
          <div className="cards">
            <div className="card">
              <FaUsers className="card-icon active" />
              <p>Active Employees</p>
              <h3>15</h3>
            </div>
            <div className="card">
              <FaUserFriends className="card-icon leave" />
              <p>Employees on Leave Today</p>
              <h3>5</h3>
            </div>
            <div className="card">
              <FaUserPlus className="card-icon joined" />
              <p>Recently Joined</p>
              <h3>10</h3>
            </div>
          </div>
          <h6>Employee Task Completion Over Time</h6>
          <button className="filter-btn"><MdDateRange /> Monthly</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
