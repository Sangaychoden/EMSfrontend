import React, { useState } from "react";
import "../css/Announce.css"; // Import CSS
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // For navigation

const Announce = () => {

    const navigate = useNavigate();
  


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
  <Sidebar />

      {/* Main Content */}
      <div className="maincontent" >
        {/* Navbar */}
        <div style={{marginRight:'1109px', marginTop:'-20px'}}> 
 <Navbar />
 </div> 

 {/* Tabs */}
 <div className="tabs-container" style={{marginTop:'-600px'}}>
          <button onClick={() => navigate("/announcements")}>Announcements</button>
          <button onClick={() => navigate("/events")}>Upcoming Events</button>
        </div>


        {/* Two Column Layout */}
        <div className="grid-container">
          {/* Latest Announcements */}
          <div className="announcements-section">
            <h4>Latest Announcements</h4>
            <div className="announcement-card">
              <h5>System Upgrade Scheduled</h5>
              <p>System maintenance is scheduled for March 20th from 12 AM to 3 AM.</p>
              <button className="view-more-btn">View More</button>
            </div>

            <div className="announcement-card">
              <h5>Office Relocation</h5>
              <p>Our IT department is moving to a new address from April 1st.</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="events-section">
            <h4>Events</h4>
            <div className="event-card">
              <h5>Tech Innovation Summit</h5>
              <p>Join us on April 10-12 for AI and cybersecurity discussions.</p>
              <button className="view-more-btn">View More</button>
            </div>

            <div className="event-card">
              <h5>Company Hackathon</h5>
              <p>Compete in a 24-hour hackathon and win cash prizes on May 18-19.</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announce;