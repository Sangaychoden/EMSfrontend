import React, { useState, useRef } from "react";
import "../css/Leave.css"; // Import the CSS file
import { FaCalendarAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Leave = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const dateInputRef = useRef(null); // Reference for the date picker

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleDetailClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };
  
  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    setSelectedRequest((prev) => ({
      ...prev,
      status: updatedStatus
    }));
  };
  

  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
      { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1002, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1003, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-15", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1004, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-18", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
    { id: 1005, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-20", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
]);


  // const leaveRequests = [
  //   { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
  //   { id: 1002, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
  //   { id: 1003, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-15", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
  //   { id: 1004, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-18", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
  //   { id: 1005, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-20", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
  // ];

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
              style={{marginLeft:"-800px", marginTop:"45px"}}
              onFocus={(e) => e.target.blur()} // Prevents the date picker from showing up on focus
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
                      <td className="pending-status" style={{  color:
                      request.status === "Approved" ? "#008000" :
                      request.status === "Rejected" ? "#883C45" :
                                                  "#883C45", }}>  {request.status}</td>
                      <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
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


      {showModal && selectedRequest && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    fontFamily: 'Inter, sans-serif'
  }}>
    <div style={{
      backgroundColor: '#fff',
      width: '775px',
      maxHeight: '90vh',
      borderRadius: '5px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      padding: '32px',
      position: 'relative',
      overflowY: 'auto'
    }}>
      {/* Close button */}
      <button onClick={() => setShowModal(false)} style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer'
      }}>×</button>

      <h2 style={{
        marginBottom: '24px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#1f2937'
      }}>
        Leave Requests
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '16px'
      }}>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
          <input type="text" value={selectedRequest.name} disabled
            style={inputStyle} />
        </div>

        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
          <input type="text" value={selectedRequest.type} disabled
            style={inputStyle} />
        </div>

        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Start Date</label>
          <input type="text" value={selectedRequest.startDate} disabled
            style={inputStyle} />
        </div>

        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>End Date</label>
          <input type="text" value={selectedRequest.endDate} disabled
            style={inputStyle} />
        </div>

        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Approver</label>
          <input type="text" value={selectedRequest.approver} disabled
            style={inputStyleItalic} />
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Reason (optional)</label>
          <textarea value={selectedRequest.reason} disabled
            rows={3}
            style={{
              ...inputStyle,
              resize: 'none',
              fontStyle: 'italic'
            }} />
        </div>
      </div>

      {/* Status */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Status</label>
        <select
          value={selectedRequest.status}
          onChange={handleStatusChange}
          style={{
            ...inputStyle,
            color: getStatusColor(selectedRequest.status),
            fontWeight: 'bold',
          }}
        >
          <option value="Pending" style={{ color: 'red' }}>Pending</option>
          <option value="Approved" style={{ color: 'green' }}>Approved</option>
          <option value="Rejected" style={{ color: 'blue' }}>Rejected</option>
        </select>
      </div>

      {/* Update button */}
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => {
          setLeaveRequests(prev =>
            prev.map(req =>
              req.id === selectedRequest.id ? selectedRequest : req
            )
          );
          setShowModal(false);
        }} style={{
          backgroundColor: '#C9DEDD',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '12px',
          cursor: 'pointer',
          fontStyle:'bold',
          transition: 'background-color 0.3s ease',
        }}>
          Update
        </button>
      </div>
    </div>
  </div>
)}





    </div>
  );
};
const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  backgroundColor: '#f9fafb',
  fontSize: '12px',
  marginTop: '6px',
};

const inputStyleItalic = {
  ...inputStyle,
  fontStyle: 'italic',
  fontSize: '12px'
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return '#883C45';
    case 'Approved':
      return '#008000';
    case 'Rejected':
      return '#246392';
    default:
      return '#883C45';
  }
};


export default Leave;
