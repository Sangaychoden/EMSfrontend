// // // // // import React, { useState, useRef } from "react";
// // // // // import "../css/Leave.css"; // Import the CSS file
// // // // // import { FaCalendarAlt } from "react-icons/fa";
// // // // // import Sidebar from "./Sidebar";
// // // // // import Navbar from "./Navbar";

// // // // // const Leave = () => {
// // // // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
// // // // //   const dateInputRef = useRef(null); // Reference for the date picker

// // // // //   const [selectedRequest, setSelectedRequest] = useState(null);
// // // // //   const [showModal, setShowModal] = useState(false);
// // // // //   const handleDetailClick = (request) => {
// // // // //     setSelectedRequest(request);
// // // // //     setShowModal(true);
// // // // //   };
  
// // // // //   const handleStatusChange = (e) => {
// // // // //     const updatedStatus = e.target.value;
// // // // //     setSelectedRequest((prev) => ({
// // // // //       ...prev,
// // // // //       status: updatedStatus
// // // // //     }));
// // // // //   };
  

// // // // //   const [leaveRequests, setLeaveRequests] = useState([
// // // // //     { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //       { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //     { id: 1002, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //     { id: 1003, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-15", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //     { id: 1004, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-18", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //     { id: 1005, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-20", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // // ]);


// // // // //   // const leaveRequests = [
// // // // //   //   { id: 1001, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //   //   { id: 1002, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-10", endDate: "2025-04-13", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //   //   { id: 1003, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-15", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //   //   { id: 1004, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-18", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //   //   { id: 1005, name: "Sangay Choden", type: "Regular Leave", startDate: "2025-04-05", endDate: "2025-04-20", approver: "HR Karma Dorji", reason: "-", status: "Pending" },
// // // // //   // ];

// // // // //   // Filter leave requests based on selected date
// // // // //   const filteredRequests = leaveRequests.filter(request => request.startDate === selectedDate);

// // // // //   const openDatePicker = () => {
// // // // //     if (dateInputRef.current) {
// // // // //       dateInputRef.current.showPicker(); // This works in modern browsers
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="dashboard-container">
// // // // //       {/* Sidebar */}
// // // // //       <Sidebar />

// // // // //       {/* Main Content */}
// // // // //       <div className="main-content">
// // // // //         {/* Navbar */}
// // // // //         <div style={{ marginRight: '1130px' }}> 
// // // // //           <Navbar />
// // // // //         </div> 

// // // // //         {/* Dashboard Content */}
// // // // //         <div className="content " style={{ marginTop: '-600px' }}>
// // // // //           <div className="header-container">
// // // // //             <h4>Leave Requests</h4>
            
// // // // //          {/* Date Picker */}
// // // // //          <button className="date-btn" onClick={openDatePicker}>
// // // // //               <FaCalendarAlt /> {selectedDate}
// // // // //             </button>
// // // // //             <input
// // // // //               type="date"
// // // // //               ref={dateInputRef}
// // // // //               value={selectedDate}
// // // // //               onChange={(e) => setSelectedDate(e.target.value)}
// // // // //               className="hidden-date-picker"
// // // // //               style={{marginLeft:"-800px", marginTop:"45px"}}
// // // // //               onFocus={(e) => e.target.blur()} // Prevents the date picker from showing up on focus
// // // // //             />
// // // // //           </div>

// // // // //           {/* Leave Request Table */}
// // // // //           <div className="leave-table">
// // // // //             <table>
// // // // //               <thead>
// // // // //                 <tr>
// // // // //                   <th>Employee ID</th>
// // // // //                   <th>Employee Name</th>
// // // // //                   <th>Leave Type</th>
// // // // //                   <th>Start Date</th>
// // // // //                   <th>End Date</th>
// // // // //                   <th>Approver</th>
// // // // //                   <th>Reason</th>
// // // // //                   <th>Status</th>
// // // // //                   <th>Details</th>
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 {filteredRequests.length > 0 ? (
// // // // //                   filteredRequests.map((request, index) => (
// // // // //                     <tr key={index}>
// // // // //                       <td>{request.id}</td>
// // // // //                       <td>{request.name}</td>
// // // // //                       <td>{request.type}</td>
// // // // //                       <td>{request.startDate}</td>
// // // // //                       <td>{request.endDate}</td>
// // // // //                       <td>{request.approver}</td>
// // // // //                       <td>{request.reason}</td>
// // // // //                       <td className="pending-status" style={{  color:
// // // // //                       request.status === "Approved" ? "#008000" :
// // // // //                       request.status === "Rejected" ? "#883C45" :
// // // // //                                                   "#883C45", }}>  {request.status}</td>
// // // // //                       <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
// // // // //                     </tr>
// // // // //                   ))
// // // // //                 ) : (
// // // // //                   <tr>
// // // // //                     <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests on this date.</td>
// // // // //                   </tr>
// // // // //                 )}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>


// // // // //       {showModal && selectedRequest && (
// // // // //   <div style={{
// // // // //     position: 'fixed',
// // // // //     top: 0,
// // // // //     left: 0,
// // // // //     width: '100%',
// // // // //     height: '100%',
// // // // //     backgroundColor: 'rgba(0, 0, 0, 0.4)',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     zIndex: 1000,
// // // // //     fontFamily: 'Inter, sans-serif'
// // // // //   }}>
// // // // //     <div style={{
// // // // //       backgroundColor: '#fff',
// // // // //       width: '775px',
// // // // //       maxHeight: '90vh',
// // // // //       borderRadius: '5px',
// // // // //       boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
// // // // //       padding: '32px',
// // // // //       position: 'relative',
// // // // //       overflowY: 'auto'
// // // // //     }}>
// // // // //       {/* Close button */}
// // // // //       <button onClick={() => setShowModal(false)} style={{
// // // // //         position: 'absolute',
// // // // //         top: '20px',
// // // // //         right: '20px',
// // // // //         background: 'none',
// // // // //         border: 'none',
// // // // //         fontSize: '20px',
// // // // //         cursor: 'pointer'
// // // // //       }}>×</button>

// // // // //       <h2 style={{
// // // // //         marginBottom: '24px',
// // // // //         fontSize: '20px',
// // // // //         fontWeight: 'bold',
// // // // //         color: '#1f2937'
// // // // //       }}>
// // // // //         Leave Requests
// // // // //       </h2>

// // // // //       <div style={{
// // // // //         display: 'grid',
// // // // //         gridTemplateColumns: '1fr 1fr',
// // // // //         gap: '16px',
// // // // //         marginBottom: '16px'
// // // // //       }}>
// // // // //         <div>
// // // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
// // // // //           <input type="text" value={selectedRequest.name} disabled
// // // // //             style={inputStyle} />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
// // // // //           <input type="text" value={selectedRequest.type} disabled
// // // // //             style={inputStyle} />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Start Date</label>
// // // // //           <input type="text" value={selectedRequest.startDate} disabled
// // // // //             style={inputStyle} />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>End Date</label>
// // // // //           <input type="text" value={selectedRequest.endDate} disabled
// // // // //             style={inputStyle} />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Approver</label>
// // // // //           <input type="text" value={selectedRequest.approver} disabled
// // // // //             style={inputStyleItalic} />
// // // // //         </div>

// // // // //         <div style={{ gridColumn: '1 / -1' }}>
// // // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Reason (optional)</label>
// // // // //           <textarea value={selectedRequest.reason} disabled
// // // // //             rows={3}
// // // // //             style={{
// // // // //               ...inputStyle,
// // // // //               resize: 'none',
// // // // //               fontStyle: 'italic'
// // // // //             }} />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Status */}
// // // // //       <div style={{ marginBottom: '24px' }}>
// // // // //         <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Status</label>
// // // // //         <select
// // // // //           value={selectedRequest.status}
// // // // //           onChange={handleStatusChange}
// // // // //           style={{
// // // // //             ...inputStyle,
// // // // //             color: getStatusColor(selectedRequest.status),
// // // // //             fontWeight: 'bold',
// // // // //           }}
// // // // //         >
// // // // //           <option value="Pending" style={{ color: 'red' }}>Pending</option>
// // // // //           <option value="Approved" style={{ color: 'green' }}>Approved</option>
// // // // //           <option value="Rejected" style={{ color: 'blue' }}>Rejected</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {/* Update button */}
// // // // //       <div style={{ textAlign: 'center' }}>
// // // // //         <button onClick={() => {
// // // // //           setLeaveRequests(prev =>
// // // // //             prev.map(req =>
// // // // //               req.id === selectedRequest.id ? selectedRequest : req
// // // // //             )
// // // // //           );
// // // // //           setShowModal(false);
// // // // //         }} style={{
// // // // //           backgroundColor: '#C9DEDD',
// // // // //           color: 'black',
// // // // //           border: 'none',
// // // // //           padding: '10px 20px',
// // // // //           borderRadius: '8px',
// // // // //           fontWeight: 'bold',
// // // // //           fontSize: '12px',
// // // // //           cursor: 'pointer',
// // // // //           fontStyle:'bold',
// // // // //           transition: 'background-color 0.3s ease',
// // // // //         }}>
// // // // //           Update
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // )}





// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // const inputStyle = {
// // // // //   width: '100%',
// // // // //   padding: '10px',
// // // // //   border: '1px solid #d1d5db',
// // // // //   borderRadius: '6px',
// // // // //   backgroundColor: '#f9fafb',
// // // // //   fontSize: '12px',
// // // // //   marginTop: '6px',
// // // // // };

// // // // // const inputStyleItalic = {
// // // // //   ...inputStyle,
// // // // //   fontStyle: 'italic',
// // // // //   fontSize: '12px'
// // // // // };

// // // // // const getStatusColor = (status) => {
// // // // //   switch (status) {
// // // // //     case 'Pending':
// // // // //       return '#883C45';
// // // // //     case 'Approved':
// // // // //       return '#008000';
// // // // //     case 'Rejected':
// // // // //       return '#246392';
// // // // //     default:
// // // // //       return '#883C45';
// // // // //   }
// // // // // };


// // // // // export default Leave;


// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import { CheckCircleIcon } from '@heroicons/react/solid';
// // // // import "../css/Leave.css"; // Import the CSS file
// // // // import { FaCalendarAlt } from "react-icons/fa";
// // // // import Sidebar from "./Sidebar";
// // // // import Navbar from "./Navbar";

// // // // const Leave = () => {
// // // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
// // // //   const dateInputRef = useRef(null); // Reference for the date picker

// // // //   const [selectedRequest, setSelectedRequest] = useState(null);
// // // //   const [showModal, setShowModal] = useState(false);

// // // //   const [remark, setRemark] = useState(""); // new state for optional remark

// // // //   const handleDetailClick = (request) => {
// // // //     setSelectedRequest(request);
// // // //     setRemark(request.adminRemark || "");
// // // //     setShowModal(true);
// // // //   };

// // // //   const handleStatusChange = (e) => {
// // // //     const updatedStatus = e.target.value;
// // // //     setSelectedRequest((prev) => ({
// // // //       ...prev,
// // // //       status: updatedStatus
// // // //     }));
// // // //   };
// // // // const [leaveRequests, setLeaveRequests] = useState([]);
// // // // const [isUpdating, setIsUpdating] = useState(false);
// // // // const [showSuccessPopup, setShowSuccessPopup] = useState(false);


// // // //   // Filter leave requests based on selected date
// // // //   // const filteredRequests = leaveRequests.filter(request => request.startDate === selectedDate);
// // // // // const filteredRequests = leaveRequests;
// // // // const filteredRequests = leaveRequests.filter((request) => {
// // // //   const selected = new Date(selectedDate);
// // // //   const start = new Date(request.startDate);
// // // //   const end = new Date(request.endDate);

// // // //   // Normalize all dates to remove time portion
// // // //   selected.setHours(0, 0, 0, 0);
// // // //   start.setHours(0, 0, 0, 0);
// // // //   end.setHours(0, 0, 0, 0);

// // // //   return selected >= start && selected <= end;
// // // // });



// // // //   const openDatePicker = () => {
// // // //     if (dateInputRef.current) {
// // // //       dateInputRef.current.showPicker(); // This works in modern browsers
// // // //     }
// // // //   };

// // // //  useEffect(() => {
// // // //   const fetchLeaveRequests = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves");
// // // //       if (!response.ok) {
// // // //         throw new Error(`HTTP error! status: ${response.status}`);
// // // //       }
// // // //       const data = await response.json();
// // // //       console.log("Fetched Leave Requests:", data);
// // // //       setLeaveRequests(data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching leave requests:", error);
// // // //     }
// // // //   };

// // // //   fetchLeaveRequests();
// // // // }, []);
// // // // console.log("Filtered:", selectedDate, filteredRequests);


// // // //   const handleUpdateStatus = async () => {
// // // //     if (!selectedRequest) return;

// // // //     setIsUpdating(true);
// // // //     try {
// // // //       const response = await fetch(
// // // //         `http://localhost:8765/LEAVEMICROSERVICE/api/admin/update/${selectedRequest.employeeId}?status=${selectedRequest.status}`,
// // // //         {
// // // //           method: "PUT",
// // // //           headers: {
// // // //             'Content-Type': 'application/json',
// // // //           },
// // // //           body: JSON.stringify({
// // // //             status: selectedRequest.status,
// // // //             remark: remark || null
// // // //           })
// // // //         }
// // // //       );

// // // //       if (!response.ok) {
// // // //         const errorText = await response.text();
// // // //         throw new Error(errorText || 'Failed to update leave status');
// // // //       }

// // // //       // Update local state
// // // //       setLeaveRequests(prev =>
// // // //         prev.map(req =>
// // // //           req.id === selectedRequest.id
// // // //             ? { ...req, status: selectedRequest.status, adminRemark: remark }
// // // //             : req
// // // //         )
// // // //       );

// // // //       setShowModal(false);
// // // //       setShowSuccessPopup(true);
// // // //       setRemark("");

// // // //       setTimeout(() => {
// // // //     setShowSuccessPopup(false);
   
// // // //   }, 2000);

// // // //     } catch (error) {
// // // //       console.error("Update error:", error);
// // // //       alert(`Update failed: ${error.message}`);
// // // //     } finally {
// // // //       setIsUpdating(false);
// // // //     }
// // // //   };

// // // //   const getStatusColor = (status) => {
// // // //   switch (status) {
// // // //     case 'PENDING':
// // // //       return '#883C45';
// // // //     case 'APPROVED':
// // // //       return '#008000';
// // // //     case 'REJECTED':
// // // //       return '#246392';
// // // //     default:
// // // //       return '#883C45';
// // // //   }
// // // // };


// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       {/* Sidebar */}
// // // //       <Sidebar />

// // // //       {/* Main Content */}
// // // //       <div className="main-content">
// // // //         {/* Navbar */}
// // // //         <div style={{ marginRight: '1130px' }}> 
// // // //           <Navbar />
// // // //         </div> 

// // // //         {/* Dashboard Content */}
// // // //         <div className="content5 " style={{marginTop:'-950px', marginRight:'1150px'}}>
// // // //           <div className="header-container">
// // // //             <h2>Leave Requests</h2>
            
// // // //          {/* Date Picker */}
// // // //          <button className="date-btn" onClick={openDatePicker}>
// // // //               <FaCalendarAlt /> {selectedDate}
// // // //             </button>
// // // //             <input
// // // //               type="date"
// // // //               ref={dateInputRef}
// // // //               value={selectedDate}
// // // //               onChange={(e) => setSelectedDate(e.target.value)}
// // // //               className="hidden-date-picker"
// // // //               style={{marginLeft:"-1300px", marginTop:"45px"}}
// // // //               onFocus={(e) => e.target.blur()} // Prevents the date picker from showing up on focus
// // // //             />
// // // //           </div>

// // // //           {/* Leave Request Table */}
// // // //           <div className="leave-table">
// // // //             <table>
// // // //               <thead>
// // // //                 <tr>
// // // //                   <th>Employee ID</th>
// // // //                   <th>Employee Name</th>
// // // //                   <th>Leave Type</th>
// // // //                   <th>Start Date</th>
// // // //                   <th>End Date</th>
// // // //                   <th>Approver</th>
// // // //                   <th>Reason</th>
// // // //                   <th>Status</th>
// // // //                   <th>Details</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {filteredRequests.length > 0 ? (
// // // //                   filteredRequests.map((request) => (
// // // //                     <tr key={request._id}>
// // // //                       <td>{request.employeeId}</td>
// // // //         <td>{request.employeeName}</td>
// // // //         <td>{request.leaveType}</td>
// // // //         <td>{request.startDate}</td>
// // // //         <td>{request.endDate}</td>
// // // //         <td>{request.approver}</td>
// // // //         <td>{request.reason}</td>
// // // //         <td
// // // //           className="pending-status"
// // // //   style={{
// // // //     color: getStatusColor(request.status?.toUpperCase()),
// // // //     fontWeight: '600'
// // // //   }}
// // // //         >
// // // //           {request.status}
// // // //         </td>
// // // //                       <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
// // // //                     </tr>
// // // //                   ))
// // // //                 ) : (
// // // //                   <tr>
// // // //                     <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests on this date.</td>
// // // //                   </tr>
// // // //                 )}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>

// // // //         </div>
// // // //       </div>


// // // //       {showModal && selectedRequest && (
// // // //   <div style={{
// // // //     position: 'fixed',
// // // //     top: 0,
// // // //     left: 0,
// // // //     width: '100%',
// // // //     height: '100%',
// // // //     backgroundColor: 'rgba(0, 0, 0, 0.4)',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     zIndex: 1000,
// // // //     fontFamily: 'Inter, sans-serif'
// // // //   }}>
// // // //     <div style={{
// // // //       backgroundColor: '#fff',
// // // //       width: '775px',
// // // //       maxHeight: '90vh',
// // // //       borderRadius: '5px',
// // // //       boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
// // // //       padding: '32px',
// // // //       position: 'relative',
// // // //       overflowY: 'auto'
// // // //     }}>
// // // //       {/* Close button */}
// // // //       <button onClick={() => setShowModal(false)} style={{
// // // //         position: 'absolute',
// // // //         top: '20px',
// // // //         right: '20px',
// // // //         background: 'none',
// // // //         border: 'none',
// // // //         fontSize: '20px',
// // // //         cursor: 'pointer'
// // // //       }}>×</button>

// // // //       <h2 style={{
// // // //         marginBottom: '24px',
// // // //         fontSize: '20px',
// // // //         fontWeight: 'bold',
// // // //         color: '#1f2937'
// // // //       }}>
// // // //         Leave Requests
// // // //       </h2>

// // // //       <div style={{
// // // //         display: 'grid',
// // // //         gridTemplateColumns: '1fr 1fr',
// // // //         gap: '16px',
// // // //         marginBottom: '16px'
// // // //       }}>
// // // //         <div>
// // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
// // // //           <input type="text" value={selectedRequest.employeeName} disabled
// // // //             style={inputStyle} />
// // // //         </div>

// // // //         <div>
// // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
// // // //           <input type="text" value={selectedRequest.leaveType} disabled
// // // //             style={inputStyle} />
// // // //         </div>

// // // //         <div>
// // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Start Date</label>
// // // //           <input type="text" value={selectedRequest.startDate} disabled
// // // //             style={inputStyle} />
// // // //         </div>

// // // //         <div>
// // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>End Date</label>
// // // //           <input type="text" value={selectedRequest.endDate} disabled
// // // //             style={inputStyle} />
// // // //         </div>

// // // //         <div>
// // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Approver</label>
// // // //           <input type="text" value={selectedRequest.approver} disabled
// // // //             style={inputStyleItalic} />
// // // //         </div>

// // // //         <div style={{ gridColumn: '1 / -1' }}>
// // // //           <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Reason (optional)</label>
// // // //           <textarea value={selectedRequest.reason} disabled
// // // //             rows={3}
// // // //             style={{
// // // //               ...inputStyle,
// // // //               resize: 'none',
// // // //               fontStyle: 'italic'
// // // //             }} />
// // // //         </div>
// // // //       </div>

// // // //       {/* Status */}
// // // //       <div style={{ marginBottom: '24px' }}>
// // // //         <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Status</label>
// // // //         <select
// // // //           value={selectedRequest.status}
// // // //           onChange={handleStatusChange}
// // // //           style={{
// // // //             ...inputStyle,
// // // //             color: getStatusColor(selectedRequest.status),
// // // //             fontWeight: 'bold',
// // // //           }}
// // // //         >
// // // //           <option value="PENDING" style={{ color: '#883C45' }}>PENDING</option>
// // // //           <option value="APPROVED" style={{ color: '#008000' }}>APPROVED</option>
// // // //           <option value="REJECTED" style={{ color: '#246392' }}>REJECTED</option>
// // // //         </select>
// // // //       </div>
// // // // {/* Remark (optional) */}
// // // // <div style={{ marginBottom: '24px' }}>
// // // //   <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Remark (optional)</label>
// // // //      <textarea
// // // //                 value={remark}
// // // //                 onChange={(e) => setRemark(e.target.value)}
// // // //                 rows={3}
// // // //                 style={{ 
// // // //                   ...inputStyle, 
// // // //                   resize: 'none' 
// // // //                 }}
// // // //                 placeholder="Add remark if needed"
// // // //               />
// // // // </div>
// // // //       {/* Update button */}
// // // //       <div style={{ textAlign: 'center' }}>
// // // //         <button 
// // // //         // onClick={() => {
// // // //         //   setLeaveRequests(prev =>
// // // //         //     prev.map(req =>
// // // //         //       req.id === selectedRequest.id ? selectedRequest : req
// // // //         //     )
// // // //         //   );
// // // //         //   setShowModal(false);
// // // //         // }} 

// // // //          onClick={handleUpdateStatus}
// // // //          disabled={isUpdating}
// // // //         style={{
// // // //           backgroundColor: '#C9DEDD',
// // // //           color: 'black',
// // // //           border: 'none',
// // // //           padding: '10px 20px',
// // // //           borderRadius: '8px',
// // // //           fontWeight: 'bold',
// // // //           fontSize: '12px',
// // // //           cursor: 'pointer',
// // // //           fontStyle:'bold',
// // // //           transition: 'background-color 0.3s ease',
// // // //         }}>
// // // //           {/* Update */}
// // // //           {isUpdating ? "Updating..." : "Update"}
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // )}


// // // // {/* Success Popup */}
// // // // {showSuccessPopup && (
// // // //      <div style={{
// // // //       position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
// // // //       backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
// // // //     }}>
// // // //   <div style={{
// // // //     position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
// // // //     backgroundColor: 'white', padding: '20px 40px', borderRadius: '6px',
// // // //     textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '400px', height:"180px"
// // // //   }}>
// // // //     <CheckCircleIcon style={{ width: '80px', height: '80px', color: 'green' }} />
// // // //     <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Leave status updated Successfully</p>
// // // //   </div>
// // // //   </div>
// // // // )}



// // // //     </div>
// // // //   );
// // // // };
// // // // const inputStyle = {
// // // //   width: '100%',
// // // //   padding: '10px',
// // // //   border: '1px solid #d1d5db',
// // // //   borderRadius: '6px',
// // // //   backgroundColor: '#f9fafb',
// // // //   fontSize: '12px',
// // // //   marginTop: '6px',
// // // // };

// // // // const inputStyleItalic = {
// // // //   ...inputStyle,
// // // //   fontStyle: 'italic',
// // // //   fontSize: '12px'
// // // // };



// // // // export default Leave;
// // // import React, { useState, useRef, useEffect } from "react";
// // // import { CheckCircleIcon } from '@heroicons/react/solid';
// // // import "../css/Leave.css"; // Import the CSS file
// // // import { FaCalendarAlt } from "react-icons/fa";
// // // import Sidebar from "./Sidebar";
// // // import Navbar from "./Navbar";

// // // const Leave = () => {
// // //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
// // //   const dateInputRef = useRef(null); // Reference for the date picker

// // //   const [selectedRequest, setSelectedRequest] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);

// // //   const [remark, setRemark] = useState(""); // new state for optional remark

// // //   const handleDetailClick = (request) => {
// // //     setSelectedRequest(request);
// // //     setRemark(request.adminRemark || "");
// // //     setShowModal(true);
// // //   };

// // //   const handleStatusChange = (e) => {
// // //     const updatedStatus = e.target.value;
// // //     setSelectedRequest((prev) => ({
// // //       ...prev,
// // //       status: updatedStatus
// // //     }));
// // //   };

// // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // //   const [isUpdating, setIsUpdating] = useState(false);
// // //   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

// // //   // Filter leave requests based on selected date
// // //   const filteredRequests = leaveRequests.filter((request) => {
// // //     const selected = new Date(selectedDate);
// // //     const start = new Date(request.startDate);
// // //     const end = new Date(request.endDate);

// // //     // Normalize all dates to remove time portion
// // //     selected.setHours(0, 0, 0, 0);
// // //     start.setHours(0, 0, 0, 0);
// // //     end.setHours(0, 0, 0, 0);

// // //     return selected >= start && selected <= end;
// // //   });

// // //   const openDatePicker = () => {
// // //     if (dateInputRef.current) {
// // //       dateInputRef.current.showPicker(); // This works in modern browsers
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     const fetchLeaveRequests = async () => {
// // //       try {
// // //         const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves");
// // //         if (!response.ok) {
// // //           throw new Error(`HTTP error! status: ${response.status}`);
// // //         }
// // //         const data = await response.json();
// // //         console.log("Fetched Leave Requests:", data);
// // //         setLeaveRequests(data);
// // //       } catch (error) {
// // //         console.error("Error fetching leave requests:", error);
// // //       }
// // //     };

// // //     fetchLeaveRequests();
// // //   }, []);

// // //   const handleUpdateStatus = async () => {
// // //     if (!selectedRequest) return;

// // //     setIsUpdating(true);
// // //     try {
// // //       const response = await fetch(
// // //         `http://localhost:8765/LEAVESERVICE/api/leaves/${selectedRequest.id}`,
// // //         {
// // //           method: "PUT",
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify({
// // //             status: selectedRequest.status,
// // //             adminRemark: remark || null
// // //           })
// // //         }
// // //       );

// // //       if (!response.ok) {
// // //         const errorText = await response.text();
// // //         throw new Error(errorText || 'Failed to update leave status');
// // //       }

// // //       // Update local state
// // //       setLeaveRequests(prev =>
// // //         prev.map(req =>
// // //           req.id === selectedRequest.id
// // //             ? { ...req, status: selectedRequest.status, adminRemark: remark }
// // //             : req
// // //         )
// // //       );

// // //       setShowModal(false);
// // //       setShowSuccessPopup(true);
// // //       setRemark("");

// // //       setTimeout(() => {
// // //         setShowSuccessPopup(false);
// // //       }, 2000);

// // //     } catch (error) {
// // //       console.error("Update error:", error);
// // //       alert(`Update failed: ${error.message}`);
// // //     } finally {
// // //       setIsUpdating(false);
// // //     }
// // //   };

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case 'PENDING':
// // //         return '#883C45';
// // //       case 'APPROVED':
// // //         return '#008000';
// // //       case 'REJECTED':
// // //         return '#246392';
// // //       default:
// // //         return '#883C45';
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard-container">
// // //       {/* Sidebar */}
// // //       <Sidebar />

// // //       {/* Main Content */}
// // //       <div className="main-content">
// // //         {/* Navbar */}
// // //         <div style={{ marginRight: '1130px' }}> 
// // //           <Navbar />
// // //         </div> 

// // //         {/* Dashboard Content */}
// // //         <div className="content5 " style={{marginTop:'-950px', marginRight:'1150px'}}>
// // //           <div className="header-container">
// // //             <h2>Leave Requests</h2>
            
// // //             {/* Date Picker */}
// // //             <button className="date-btn" onClick={openDatePicker}>
// // //               <FaCalendarAlt /> {selectedDate}
// // //             </button>
// // //             <input
// // //               type="date"
// // //               ref={dateInputRef}
// // //               value={selectedDate}
// // //               onChange={(e) => setSelectedDate(e.target.value)}
// // //               className="hidden-date-picker"
// // //               style={{marginLeft:"-1300px", marginTop:"45px"}}
// // //               onFocus={(e) => e.target.blur()} // Prevents the date picker from showing up on focus
// // //             />
// // //           </div>

// // //           {/* Leave Request Table */}
// // //           <div className="leave-table">
// // //             <table>
// // //               <thead>
// // //                 <tr>
// // //                   <th>Employee ID</th>
// // //                   <th>Employee Name</th>
// // //                   <th>Leave Type</th>
// // //                   <th>Start Date</th>
// // //                   <th>End Date</th>
// // //                   <th>Approver</th>
// // //                   <th>Reason</th>
// // //                   <th>Status</th>
// // //                   <th>Details</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {filteredRequests.length > 0 ? (
// // //                   filteredRequests.map((request) => (
// // //                     <tr key={request.id}>
// // //                       <td>{request.employeeId}</td>
// // //                       <td>{request.employeeName}</td>
// // //                       <td>{request.leaveType}</td>
// // //                       <td>{request.startDate}</td>
// // //                       <td>{request.endDate}</td>
// // //                       <td>{request.approver}</td>
// // //                       <td>{request.reason}</td>
// // //                       <td
// // //                         className="pending-status"
// // //                         style={{
// // //                           color: getStatusColor(request.status?.toUpperCase()),
// // //                           fontWeight: '600'
// // //                         }}
// // //                       >
// // //                         {request.status}
// // //                       </td>
// // //                       <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
// // //                     </tr>
// // //                   ))
// // //                 ) : (
// // //                   <tr>
// // //                     <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests on this date.</td>
// // //                   </tr>
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {showModal && selectedRequest && (
// // //         <div style={{
// // //           position: 'fixed',
// // //           top: 0,
// // //           left: 0,
// // //           width: '100%',
// // //           height: '100%',
// // //           backgroundColor: 'rgba(0, 0, 0, 0.4)',
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           justifyContent: 'center',
// // //           zIndex: 1000,
// // //           fontFamily: 'Inter, sans-serif'
// // //         }}>
// // //           <div style={{
// // //             backgroundColor: '#fff',
// // //             width: '775px',
// // //             maxHeight: '90vh',
// // //             borderRadius: '5px',
// // //             boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
// // //             padding: '32px',
// // //             position: 'relative',
// // //             overflowY: 'auto'
// // //           }}>
// // //             {/* Close button */}
// // //             <button onClick={() => setShowModal(false)} style={{
// // //               position: 'absolute',
// // //               top: '20px',
// // //               right: '20px',
// // //               background: 'none',
// // //               border: 'none',
// // //               fontSize: '20px',
// // //               cursor: 'pointer'
// // //             }}>×</button>

// // //             <h2 style={{
// // //               marginBottom: '24px',
// // //               fontSize: '20px',
// // //               fontWeight: 'bold',
// // //               color: '#1f2937'
// // //             }}>
// // //               Leave Request Details
// // //             </h2>

// // //             <div style={{
// // //               display: 'grid',
// // //               gridTemplateColumns: '1fr 1fr',
// // //               gap: '16px',
// // //               marginBottom: '16px'
// // //             }}>
// // //               <div>
// // //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
// // //                 <input type="text" value={selectedRequest.employeeName} disabled
// // //                   style={inputStyle} />
// // //               </div>

// // //               <div>
// // //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
// // //                 <input type="text" value={selectedRequest.leaveType} disabled
// // //                   style={inputStyle} />
// // //               </div>

// // //               <div>
// // //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Start Date</label>
// // //                 <input type="text" value={selectedRequest.startDate} disabled
// // //                   style={inputStyle} />
// // //               </div>

// // //               <div>
// // //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>End Date</label>
// // //                 <input type="text" value={selectedRequest.endDate} disabled
// // //                   style={inputStyle} />
// // //               </div>

// // //               <div>
// // //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Approver</label>
// // //                 <input type="text" value={selectedRequest.approver} disabled
// // //                   style={inputStyleItalic} />
// // //               </div>

// // //               <div style={{ gridColumn: '1 / -1' }}>
// // //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Reason (optional)</label>
// // //                 <textarea value={selectedRequest.reason} disabled
// // //                   rows={3}
// // //                   style={{
// // //                     ...inputStyle,
// // //                     resize: 'none',
// // //                     fontStyle: 'italic'
// // //                   }} />
// // //               </div>
// // //             </div>

// // //             {/* Status */}
// // //             <div style={{ marginBottom: '24px' }}>
// // //               <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Status</label>
// // //               <select
// // //                 value={selectedRequest.status}
// // //                 onChange={handleStatusChange}
// // //                 style={{
// // //                   ...inputStyle,
// // //                   color: getStatusColor(selectedRequest.status),
// // //                   fontWeight: 'bold',
// // //                 }}
// // //               >
// // //                 <option value="PENDING" style={{ color: '#883C45' }}>PENDING</option>
// // //                 <option value="APPROVED" style={{ color: '#008000' }}>APPROVED</option>
// // //                 <option value="REJECTED" style={{ color: '#246392' }}>REJECTED</option>
// // //               </select>
// // //             </div>

// // //             {/* Remark (optional) */}
// // //             <div style={{ marginBottom: '24px' }}>
// // //               <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Remark (optional)</label>
// // //               <textarea
// // //                 value={remark}
// // //                 onChange={(e) => setRemark(e.target.value)}
// // //                 rows={3}
// // //                 style={{ 
// // //                   ...inputStyle, 
// // //                   resize: 'none' 
// // //                 }}
// // //                 placeholder="Add remark if needed"
// // //               />
// // //             </div>

// // //             {/* Update button */}
// // //             <div style={{ textAlign: 'center' }}>
// // //               <button 
// // //                 onClick={handleUpdateStatus}
// // //                 disabled={isUpdating}
// // //                 style={{
// // //                   backgroundColor: '#C9DEDD',
// // //                   color: 'black',
// // //                   border: 'none',
// // //                   padding: '10px 20px',
// // //                   borderRadius: '8px',
// // //                   fontWeight: 'bold',
// // //                   fontSize: '12px',
// // //                   cursor: 'pointer',
// // //                   fontStyle:'bold',
// // //                   transition: 'background-color 0.3s ease',
// // //                 }}
// // //               >
// // //                 {isUpdating ? "Updating..." : "Update"}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Success Popup */}
// // //       {showSuccessPopup && (
// // //         <div style={{
// // //           position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
// // //           backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
// // //         }}>
// // //           <div style={{
// // //             position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
// // //             backgroundColor: 'white', padding: '20px 40px', borderRadius: '6px',
// // //             textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '400px', height:"180px"
// // //           }}>
// // //             <CheckCircleIcon style={{ width: '80px', height: '80px', color: 'green' }} />
// // //             <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Leave status updated Successfully</p>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const inputStyle = {
// // //   width: '100%',
// // //   padding: '10px',
// // //   border: '1px solid #d1d5db',
// // //   borderRadius: '6px',
// // //   backgroundColor: '#f9fafb',
// // //   fontSize: '12px',
// // //   marginTop: '6px',
// // // };

// // // const inputStyleItalic = {
// // //   ...inputStyle,
// // //   fontStyle: 'italic',
// // //   fontSize: '12px'
// // // };

// // // export default Leave;
// // import React, { useState, useRef, useEffect } from "react";
// // import { CheckCircleIcon } from '@heroicons/react/solid';
// // import "../css/Leave.css"; // Import the CSS file
// // import { FaCalendarAlt } from "react-icons/fa";
// // import Sidebar from "./Sidebar";
// // import Navbar from "./Navbar";

// // const Leave = () => {
// //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
// //   const dateInputRef = useRef(null); // Reference for the date picker

// //   const [selectedRequest, setSelectedRequest] = useState(null);
// //   const [showModal, setShowModal] = useState(false);

// //   const [remark, setRemark] = useState(""); // new state for optional remark

// //   const handleDetailClick = (request) => {
// //     setSelectedRequest(request);
// //     setRemark(request.adminRemark || "");
// //     setShowModal(true);
// //   };

// //   const handleStatusChange = (e) => {
// //     const updatedStatus = e.target.value;
// //     setSelectedRequest((prev) => ({
// //       ...prev,
// //       status: updatedStatus
// //     }));
// //   };

// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [isUpdating, setIsUpdating] = useState(false);
// //   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

// //   const openDatePicker = () => {
// //     if (dateInputRef.current) {
// //       dateInputRef.current.showPicker(); // This works in modern browsers
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchLeaveRequests = async () => {
// //       try {
// //         const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves");
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         console.log("Fetched Leave Requests:", data);
// //         setLeaveRequests(data);
// //       } catch (error) {
// //         console.error("Error fetching leave requests:", error);
// //       }
// //     };

// //     fetchLeaveRequests();
// //   }, []);

// //   const handleUpdateStatus = async () => {
// //     if (!selectedRequest) return;

// //     setIsUpdating(true);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:8765/LEAVESERVICE/api/leaves/${selectedRequest.id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({
// //             status: selectedRequest.status,
// //             adminRemark: remark || null
// //           })
// //         }
// //       );

// //       if (!response.ok) {
// //         const errorText = await response.text();
// //         throw new Error(errorText || 'Failed to update leave status');
// //       }

// //       // Update local state
// //       setLeaveRequests(prev =>
// //         prev.map(req =>
// //           req.id === selectedRequest.id
// //             ? { ...req, status: selectedRequest.status, adminRemark: remark }
// //             : req
// //         )
// //       );

// //       setShowModal(false);
// //       setShowSuccessPopup(true);
// //       setRemark("");

// //       setTimeout(() => {
// //         setShowSuccessPopup(false);
// //       }, 2000);

// //     } catch (error) {
// //       console.error("Update error:", error);
// //       alert(`Update failed: ${error.message}`);
// //     } finally {
// //       setIsUpdating(false);
// //     }
// //   };

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'PENDING':
// //         return '#883C45';
// //       case 'APPROVED':
// //         return '#008000';
// //       case 'REJECTED':
// //         return '#246392';
// //       default:
// //         return '#883C45';
// //     }
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <div className="main-content">
// //         {/* Navbar */}
// //         <div style={{ marginRight: '1130px' }}> 
// //           <Navbar />
// //         </div> 

// //         {/* Dashboard Content */}
// //         <div className="content5 " style={{marginTop:'-950px', marginRight:'1150px'}}>
// //           <div className="header-container">
// //             <h2>Leave Requests</h2>
            
// //             {/* Date Picker */}
// //             <button className="date-btn" onClick={openDatePicker}>
// //               <FaCalendarAlt /> {selectedDate}
// //             </button>
// //             <input
// //               type="date"
// //               ref={dateInputRef}
// //               value={selectedDate}
// //               onChange={(e) => setSelectedDate(e.target.value)}
// //               className="hidden-date-picker"
// //               style={{marginLeft:"-1300px", marginTop:"45px"}}
// //               onFocus={(e) => e.target.blur()} // Prevents the date picker from showing up on focus
// //             />
// //           </div>

// //           {/* Leave Request Table */}
// //           <div className="leave-table">
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>Employee ID</th>
// //                   <th>Employee Name</th>
// //                   <th>Leave Type</th>
// //                   <th>Start Date</th>
// //                   <th>End Date</th>
// //                   <th>Approver</th>
// //                   <th>Reason</th>
// //                   <th>Status</th>
// //                   <th>Details</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {leaveRequests.length > 0 ? (
// //                   leaveRequests.map((request) => (
// //                     <tr key={request.id}>
// //                       <td>{request.employeeId}</td>
// //                       <td>{request.employeeName}</td>
// //                       <td>{request.leaveType}</td>
// //                       <td>{request.startDate}</td>
// //                       <td>{request.endDate}</td>
// //                       <td>{request.approver}</td>
// //                       <td>{request.reason}</td>
// //                       <td
// //                         className="pending-status"
// //                         style={{
// //                           color: getStatusColor(request.status?.toUpperCase()),
// //                           fontWeight: '600'
// //                         }}
// //                       >
// //                         {request.status}
// //                       </td>
// //                       <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
// //                     </tr>
// //                   ))
// //                 ) : (
// //                   <tr>
// //                     <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests found.</td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>

// //       {showModal && selectedRequest && (
// //         <div style={{
// //           position: 'fixed',
// //           top: 0,
// //           left: 0,
// //           width: '100%',
// //           height: '100%',
// //           backgroundColor: 'rgba(0, 0, 0, 0.4)',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           zIndex: 1000,
// //           fontFamily: 'Inter, sans-serif'
// //         }}>
// //           <div style={{
// //             backgroundColor: '#fff',
// //             width: '775px',
// //             maxHeight: '90vh',
// //             borderRadius: '5px',
// //             boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
// //             padding: '32px',
// //             position: 'relative',
// //             overflowY: 'auto'
// //           }}>
// //             {/* Close button */}
// //             <button onClick={() => setShowModal(false)} style={{
// //               position: 'absolute',
// //               top: '20px',
// //               right: '20px',
// //               background: 'none',
// //               border: 'none',
// //               fontSize: '20px',
// //               cursor: 'pointer'
// //             }}>×</button>

// //             <h2 style={{
// //               marginBottom: '24px',
// //               fontSize: '20px',
// //               fontWeight: 'bold',
// //               color: '#1f2937'
// //             }}>
// //               Leave Request Details
// //             </h2>

// //             <div style={{
// //               display: 'grid',
// //               gridTemplateColumns: '1fr 1fr',
// //               gap: '16px',
// //               marginBottom: '16px'
// //             }}>
// //               <div>
// //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
// //                 <input type="text" value={selectedRequest.employeeName} disabled
// //                   style={inputStyle} />
// //               </div>

// //               <div>
// //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
// //                 <input type="text" value={selectedRequest.leaveType} disabled
// //                   style={inputStyle} />
// //               </div>

// //               <div>
// //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Start Date</label>
// //                 <input type="text" value={selectedRequest.startDate} disabled
// //                   style={inputStyle} />
// //               </div>

// //               <div>
// //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>End Date</label>
// //                 <input type="text" value={selectedRequest.endDate} disabled
// //                   style={inputStyle} />
// //               </div>

// //               <div>
// //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Approver</label>
// //                 <input type="text" value={selectedRequest.approver} disabled
// //                   style={inputStyleItalic} />
// //               </div>

// //               <div style={{ gridColumn: '1 / -1' }}>
// //                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Reason (optional)</label>
// //                 <textarea value={selectedRequest.reason} disabled
// //                   rows={3}
// //                   style={{
// //                     ...inputStyle,
// //                     resize: 'none',
// //                     fontStyle: 'italic'
// //                   }} />
// //               </div>
// //             </div>

// //             {/* Status */}
// //             <div style={{ marginBottom: '24px' }}>
// //               <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Status</label>
// //               <select
// //                 value={selectedRequest.status}
// //                 onChange={handleStatusChange}
// //                 style={{
// //                   ...inputStyle,
// //                   color: getStatusColor(selectedRequest.status),
// //                   fontWeight: 'bold',
// //                 }}
// //               >
// //                 <option value="PENDING" style={{ color: '#883C45' }}>PENDING</option>
// //                 <option value="APPROVED" style={{ color: '#008000' }}>APPROVED</option>
// //                 <option value="REJECTED" style={{ color: '#246392' }}>REJECTED</option>
// //               </select>
// //             </div>

// //             {/* Remark (optional) */}
// //             <div style={{ marginBottom: '24px' }}>
// //               <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Remark (optional)</label>
// //               <textarea
// //                 value={remark}
// //                 onChange={(e) => setRemark(e.target.value)}
// //                 rows={3}
// //                 style={{ 
// //                   ...inputStyle, 
// //                   resize: 'none' 
// //                 }}
// //                 placeholder="Add remark if needed"
// //               />
// //             </div>

// //             {/* Update button */}
// //             <div style={{ textAlign: 'center' }}>
// //               <button 
// //                 onClick={handleUpdateStatus}
// //                 disabled={isUpdating}
// //                 style={{
// //                   backgroundColor: '#C9DEDD',
// //                   color: 'black',
// //                   border: 'none',
// //                   padding: '10px 20px',
// //                   borderRadius: '8px',
// //                   fontWeight: 'bold',
// //                   fontSize: '12px',
// //                   cursor: 'pointer',
// //                   fontStyle:'bold',
// //                   transition: 'background-color 0.3s ease',
// //                 }}
// //               >
// //                 {isUpdating ? "Updating..." : "Update"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Success Popup */}
// //       {showSuccessPopup && (
// //         <div style={{
// //           position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
// //           backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
// //         }}>
// //           <div style={{
// //             position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
// //             backgroundColor: 'white', padding: '20px 40px', borderRadius: '6px',
// //             textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '400px', height:"180px"
// //           }}>
// //             <CheckCircleIcon style={{ width: '80px', height: '80px', color: 'green' }} />
// //             <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Leave status updated Successfully</p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const inputStyle = {
// //   width: '100%',
// //   padding: '10px',
// //   border: '1px solid #d1d5db',
// //   borderRadius: '6px',
// //   backgroundColor: '#f9fafb',
// //   fontSize: '12px',
// //   marginTop: '6px',
// // };

// // const inputStyleItalic = {
// //   ...inputStyle,
// //   fontStyle: 'italic',
// //   fontSize: '12px'
// // };

// // export default Leave;
// import React, { useState, useRef, useEffect } from "react";
// // import { CheckCircleIcon } from '@heroicons/react/solid';
// import "../css/Leave.css"; // Import the CSS file
// import { FaCalendarAlt } from "react-icons/fa";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { CheckCircleIcon } from '@heroicons/react/24/solid'

// const Leave = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
//   const dateInputRef = useRef(null); // Reference for the date picker

//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const [remark, setRemark] = useState(""); // new state for optional remark

//   const handleDetailClick = (request) => {
//     setSelectedRequest(request);
//     setRemark(request.adminRemark || "");
//     setShowModal(true);
//   };

//   const handleStatusChange = (e) => {
//     const updatedStatus = e.target.value;
//     setSelectedRequest((prev) => ({
//       ...prev,
//       status: updatedStatus
//     }));
//   };

//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   const openDatePicker = () => {
//     if (dateInputRef.current) {
//       dateInputRef.current.showPicker(); // This works in modern browsers
//     }
//   };

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Fetched Leave Requests:", data);
//         setLeaveRequests(data);
//       } catch (error) {
//         console.error("Error fetching leave requests:", error);
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleUpdateStatus = async () => {
//     if (!selectedRequest) return;

//     setIsUpdating(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8765/LEAVESERVICE/api/leaves/${selectedRequest.id}/status?status=${selectedRequest.status}`,
//         {
//           method: "PUT",
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             adminRemark: remark || null
//           })
//         }
//       );

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || 'Failed to update leave status');
//       }

//       // Update local state
//       setLeaveRequests(prev =>
//         prev.map(req =>
//           req.id === selectedRequest.id
//             ? { ...req, status: selectedRequest.status, adminRemark: remark }
//             : req
//         )
//       );

//       setShowModal(false);
//       setShowSuccessPopup(true);
//       setRemark("");

//       setTimeout(() => {
//         setShowSuccessPopup(false);
//       }, 2000);

//     } catch (error) {
//       console.error("Update error:", error);
//       alert(`Update failed: ${error.message}`);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'PENDING':
//         return '#883C45';
//       case 'APPROVED':
//         return '#008000';
//       case 'REJECTED':
//         return '#246392';
//       default:
//         return '#883C45';
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Navbar */}
//         <div style={{ marginRight: '1130px' }}> 
//           <Navbar />
//         </div> 

//         {/* Dashboard Content */}
//         <div className="content5 " style={{marginTop:'-950px', marginRight:'1150px'}}>
//           <div className="header-container">
//             <h2>Leave Requests</h2>
            
//             {/* Date Picker */}
//             <button className="date-btn" onClick={openDatePicker}>
//               <FaCalendarAlt /> {selectedDate}
//             </button>
//             <input
//               type="date"
//               ref={dateInputRef}
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//               className="hidden-date-picker"
//               style={{marginLeft:"-1300px", marginTop:"45px"}}
//               onFocus={(e) => e.target.blur()} // Prevents the date picker from showing up on focus
//             />
//           </div>

//           {/* Leave Request Table */}
//           <div className="leave-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Employee ID</th>
//                   <th>Employee Name</th>
//                   <th>Leave Type</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Approver</th>
//                   <th>Reason</th>
//                   <th>Status</th>
//                   <th>Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequests.length > 0 ? (
//                   leaveRequests.map((request) => (
//                     <tr key={request.id}>
//                       <td>{request.employeeId}</td>
//                       <td>{request.employeeName}</td>
//                       <td>{request.leaveType}</td>
//                       <td>{request.startDate}</td>
//                       <td>{request.endDate}</td>
//                       <td>{request.approver}</td>
//                       <td>{request.reason}</td>
//                       <td
//                         className="pending-status"
//                         style={{
//                           color: getStatusColor(request.status?.toUpperCase()),
//                           fontWeight: '600'
//                         }}
//                       >
//                         {request.status}
//                       </td>
//                       <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {showModal && selectedRequest && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           zIndex: 1000,
//           fontFamily: 'Inter, sans-serif'
//         }}>
//           <div style={{
//             backgroundColor: '#fff',
//             width: '775px',
//             maxHeight: '90vh',
//             borderRadius: '5px',
//             boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
//             padding: '32px',
//             position: 'relative',
//             overflowY: 'auto'
//           }}>
//             {/* Close button */}
//             <button onClick={() => setShowModal(false)} style={{
//               position: 'absolute',
//               top: '20px',
//               right: '20px',
//               background: 'none',
//               border: 'none',
//               fontSize: '20px',
//               cursor: 'pointer'
//             }}>×</button>

//             <h2 style={{
//               marginBottom: '24px',
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#1f2937'
//             }}>
//               Leave Request Details
//             </h2>

//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '16px',
//               marginBottom: '16px'
//             }}>
//               <div>
//                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
//                 <input type="text" value={selectedRequest.employeeName} disabled
//                   style={inputStyle} />
//               </div>

//               <div>
//                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
//                 <input type="text" value={selectedRequest.leaveType} disabled
//                   style={inputStyle} />
//               </div>

//               <div>
//                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Start Date</label>
//                 <input type="text" value={selectedRequest.startDate} disabled
//                   style={inputStyle} />
//               </div>

//               <div>
//                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>End Date</label>
//                 <input type="text" value={selectedRequest.endDate} disabled
//                   style={inputStyle} />
//               </div>

//               <div>
//                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Approver</label>
//                 <input type="text" value={selectedRequest.approver} disabled
//                   style={inputStyleItalic} />
//               </div>

//               <div style={{ gridColumn: '1 / -1' }}>
//                 <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Reason (optional)</label>
//                 <textarea value={selectedRequest.reason} disabled
//                   rows={3}
//                   style={{
//                     ...inputStyle,
//                     resize: 'none',
//                     fontStyle: 'italic'
//                   }} />
//               </div>
//             </div>

//             {/* Status */}
//             <div style={{ marginBottom: '24px' }}>
//               <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Status</label>
//               <select
//                 value={selectedRequest.status}
//                 onChange={handleStatusChange}
//                 style={{
//                   ...inputStyle,
//                   color: getStatusColor(selectedRequest.status),
//                   fontWeight: 'bold',
//                 }}
//               >
//                 <option value="PENDING" style={{ color: '#883C45' }}>PENDING</option>
//                 <option value="APPROVED" style={{ color: '#008000' }}>APPROVED</option>
//                 <option value="REJECTED" style={{ color: '#246392' }}>REJECTED</option>
//               </select>
//             </div>

//             {/* Remark (optional) */}
//             <div style={{ marginBottom: '24px' }}>
//               <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Remark (optional)</label>
//               <textarea
//                 value={remark}
//                 onChange={(e) => setRemark(e.target.value)}
//                 rows={3}
//                 style={{ 
//                   ...inputStyle, 
//                   resize: 'none' 
//                 }}
//                 placeholder="Add remark if needed"
//               />
//             </div>

//             {/* Update button */}
//             <div style={{ textAlign: 'center' }}>
//               <button 
//                 onClick={handleUpdateStatus}
//                 disabled={isUpdating}
//                 style={{
//                   backgroundColor: '#C9DEDD',
//                   color: 'black',
//                   border: 'none',
//                   padding: '10px 20px',
//                   borderRadius: '8px',
//                   fontWeight: 'bold',
//                   fontSize: '12px',
//                   cursor: 'pointer',
//                   fontStyle:'bold',
//                   transition: 'background-color 0.3s ease',
//                 }}
//               >
//                 {isUpdating ? "Updating..." : "Update"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Popup */}
//       {showSuccessPopup && (
//         <div style={{
//           position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//           backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
//         }}>
//           <div style={{
//             position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//             backgroundColor: 'white', padding: '20px 40px', borderRadius: '6px',
//             textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '400px', height:"180px"
//           }}>
//             <CheckCircleIcon style={{ width: '80px', height: '80px', color: 'green' }} />
//             <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Leave status updated Successfully</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const inputStyle = {
//   width: '100%',
//   padding: '10px',
//   border: '1px solid #d1d5db',
//   borderRadius: '6px',
//   backgroundColor: '#f9fafb',
//   fontSize: '12px',
//   marginTop: '6px',
// };

// const inputStyleItalic = {
//   ...inputStyle,
//   fontStyle: 'italic',
//   fontSize: '12px'
// };

// export default Leave;
import React, { useState, useRef, useEffect } from "react";
// import { CheckCircleIcon } from '@heroicons/react/solid';
import "../css/Leave.css"; // Import the CSS file
import { FaCalendarAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Leave = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const dateInputRef = useRef(null); // Reference for the date picker

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [remark, setRemark] = useState(""); // new state for optional remark

  const handleDetailClick = (request) => {
    setSelectedRequest(request);
    setRemark(request.adminRemark || "");
    setShowModal(true);
  };

  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    setSelectedRequest((prev) => ({
      ...prev,
      status: updatedStatus
    }));
  };

  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // This works in modern browsers
    }
  };

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Leave Requests:", data);
        setLeaveRequests(data);
        
        // Filter requests for today's date
        const today = new Date().toISOString().split("T")[0];
        const todayRequests = data.filter(request => 
          request.startDate === today || request.endDate === today
        );
        setFilteredRequests(todayRequests);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchLeaveRequests();
  }, []);

  useEffect(() => {
    // Filter requests whenever selectedDate changes
    const filtered = leaveRequests.filter(request => 
      request.startDate === selectedDate || request.endDate === selectedDate
    );
    setFilteredRequests(filtered);
  }, [selectedDate, leaveRequests]);

  const handleUpdateStatus = async () => {
    if (!selectedRequest) return;

    setIsUpdating(true);
    try {
      const response = await fetch(
        `http://localhost:8765/LEAVESERVICE/api/leaves/${selectedRequest.id}/status?status=${selectedRequest.status}`,
        {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            adminRemark: remark || null
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to update leave status');
      }

      // Update local state
      const updatedRequests = leaveRequests.map(req =>
        req.id === selectedRequest.id
          ? { ...req, status: selectedRequest.status, adminRemark: remark }
          : req
      );
      
      setLeaveRequests(updatedRequests);
      
      // Update filtered requests as well
      const updatedFiltered = filteredRequests.map(req =>
        req.id === selectedRequest.id
          ? { ...req, status: selectedRequest.status, adminRemark: remark }
          : req
      );
      setFilteredRequests(updatedFiltered);

      setShowModal(false);
      setShowSuccessPopup(true);
      setRemark("");

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2000);

    } catch (error) {
      console.error("Update error:", error);
      alert(`Update failed: ${error.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return '#883C45';
      case 'APPROVED':
        return '#008000';
      case 'REJECTED':
        return '#246392';
      default:
        return '#883C45';
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
        <div className="content5 " style={{marginTop:'-950px', marginRight:'1100px'}}>
          <div className="header-container">
            <h2>Leave Requests</h2>
            
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
              style={{marginLeft:"-1450px", marginTop:"45px"}}
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
                  filteredRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.employeeId}</td>
                      <td>{request.employeeName}</td>
                      <td>{request.leaveType}</td>
                      <td>{request.startDate}</td>
                      <td>{request.endDate}</td>
                      <td>{request.approver}</td>
                      <td>{request.reason}</td>
                      <td
                        className="pending-status"
                        style={{
                          color: getStatusColor(request.status?.toUpperCase()),
                          fontWeight: '600'
                        }}
                      >
                        {request.status}
                      </td>
                      <td style={{ cursor: 'pointer'}} onClick={() => handleDetailClick(request)}>...</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" style={{ textAlign: "center", marginTop: '30px' }}>No leave requests found for selected date.</td>
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
              Leave Request Details
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Employee Name</label>
                <input type="text" value={selectedRequest.employeeName} disabled
                  style={inputStyle} />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Leave type</label>
                <input type="text" value={selectedRequest.leaveType} disabled
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
                <option value="PENDING" style={{ color: '#883C45' }}>PENDING</option>
                <option value="APPROVED" style={{ color: '#008000' }}>APPROVED</option>
                <option value="REJECTED" style={{ color: '#246392' }}>REJECTED</option>
              </select>
            </div>

            {/* Remark (optional) */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#111827' }}>Remark (optional)</label>
              <textarea
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                rows={3}
                style={{ 
                  ...inputStyle, 
                  resize: 'none' 
                }}
                placeholder="Add remark if needed"
              />
            </div>

            {/* Update button */}
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={handleUpdateStatus}
                disabled={isUpdating}
                style={{
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
                }}
              >
                {isUpdating ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            backgroundColor: 'white', padding: '20px 40px', borderRadius: '6px',
            textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '400px', height:"180px"
          }}>
            <CheckCircleIcon style={{ width: '80px', height: '80px', color: 'green' }} />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Leave status updated Successfully</p>
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

export default Leave;