import React, { useState } from "react";
import "../css/Dashboard.css"; // Import the CSS file
import { FaTasks, FaUserFriends, FaUsers, FaBullhorn, FaSignOutAlt, FaUserPlus, FaArrowDown } from "react-icons/fa";
import { MdDashboard, MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
// import logo from "../Admin/logo.png"; // Adjust the path as necessary
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Navbar from "./Navbar"; // Import the Navbar component
import TaskCompletionGraph from "./graph";
const Dashboard = () => {
    const [view, setView] = useState("monthly");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />
      

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}

        <Navbar />

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
          <h6 style={{marginTop:'40px', marginLeft:'20px'}}>Employee Task Completion Over Time</h6>
          {/* <button className="filter-btn"><MdDateRange /> Monthly</button> */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" , marginLeft:'20px' }}>
  <div style={{ position: "relative", display: "flex", alignItems: "center", marginTop: "20px" }}>
    {/* Icon inside the container */}
    <MdDateRange
      style={{
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#555",
        pointerEvents: "none", // Let clicks go to the select
      }}
    />
    
    <select
      value={view}
      onChange={(e) => setView(e.target.value)}
      style={{
        padding: "6px 12px 6px 32px", // extra left padding for icon
        width: "140px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "14px",
        backgroundColor: "#f9f9f9",
        cursor: "pointer",
        appearance: "none",
      }}
    >
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
   
  </div>
</div>

<div style={{marginLeft:'10px'}}>
<TaskCompletionGraph />
</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
