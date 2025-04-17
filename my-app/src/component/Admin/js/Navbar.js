import React from "react";
import "../css/Navbar.css";
import { MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  // Get today's date
  const today = new Date();
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div style={{fontSize:"14px", fontWeight:"bold",marginRight:"930px", marginTop:"10px", color:"#4A6D7C", borderBottom:"1px solid #4A6D7C" }}>EMS</div>
          <span className="date">
            <MdDateRange /> {formattedDate}
          </span>
          <span className="profile-icon">
            <IoMdPerson />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
