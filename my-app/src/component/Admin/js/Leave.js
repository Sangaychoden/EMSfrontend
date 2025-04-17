import React, { useState, useRef } from "react";
import "../css/Leave.css"; // Import the CSS file
import { FaCalendarAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Leave = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const dateInputRef = useRef(null); // Reference for the date picker

  const leaveRequests = [
    { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1002, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1003, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-15", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1004, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-18", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1005, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-20", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
  ];

  // Filter leave requests based on selected date
  const filteredRequests = leaveRequests.filter(request => request.startDate === selectedDate);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // This works in modern browsers
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div style={{ marginRight: '1130px' }}> 
          <Navbar />
        </div> 

        {/* Dashboard Content */}
        <div className="content " style={{ marginTop: '-600px' }}>
          <div className="header-container">
            <h4>Leave Requests</h4>
            
         {/* Date Picker */}
         <button className="date-btn" onClick={openDatePicker}>
              <FaCalendarAlt /> {selectedDate}
            </button>
            <input
              type="date"
              ref={dateInputRef}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="hidden-date-picker"
            />
          </div>

          {/* Leave Request Table */}
          <div className="leave-table">
            <table>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Approver</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.length > 0 ? (
                  filteredRequests.map((request, index) => (
                    <tr key={index}>
                      <td>{request.id}</td>
                      <td>{request.name}</td>
                      <td>{request.type}</td>
                      <td>{request.startDate}</td>
                      <td>{request.endDate}</td>
                      <td>{request.approver}</td>
                      <td>{request.reason}</td>
                      <td className="pending-status">{request.status}</td>
                      <td>...</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests on this date.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Leave;
