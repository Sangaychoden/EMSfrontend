
// // // // // import React from "react";
// // // // // import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// // // // // import Sidebar from "./sidebar1";
// // // // // import Navbar from "./navbar1";
// // // // // import "../css/leave.css";

// // // // // const Leave = () => {
// // // // //   return (
// // // // //     <div className="dashboard-container2">
// // // // //       {/* Sidebar */}
// // // // //       <div className="sidebar-with-welcome2">
// // // // //         <Sidebar />
// // // // //       </div>

// // // // //       {/* Main Content */}
// // // // //       <div className="main-content2">
// // // // //         <Navbar />
        
// // // // //         {/* Leave Request Form */}
// // // // //         <div className="leave-container">

// // // // //         <h2>Leave Request</h2>
// // // // //           <div className="leave-form-container">
          
            
// // // // //             <form className="leave-form">
// // // // //               <div className="form-row">
// // // // //                 <div className="form-group">
// // // // //                   <label>Employee Name</label>
// // // // //                   <input type="text" value="Karma" readOnly />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                   <label>Leave type</label>
// // // // //                   <select>
// // // // //                     <option>Casual Leave</option>
// // // // //                     <option>Sick Leave</option>
// // // // //                     <option>Annual Leave</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="form-row">
// // // // //                 <div className="form-group">
// // // // //                   <label>Start Date</label>
// // // // //                   <input type="date" />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                   <label>End Date</label>
// // // // //                   <input type="date" />
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="form-group">
// // // // //                 <label>Approver</label>
// // // // //                 <input type="text" value="Karma Day" readOnly />
// // // // //               </div>

        
// // // // //               <div className="form-group" style={{ marginTop: '30px' }}>
// // // // //                 <label>Reason (optional)</label>
// // // // //                 <textarea rows="3"></textarea>
// // // // //                 </div>


// // // // //               <button type="submit" className="submit-btn">
// // // // //                 Submit
// // // // //               </button>
// // // // //             </form>
// // // // //           </div>

// // // // //             <h3>Leave History</h3>
// // // // //              <div className="leave-history">
          
            
        
// // // // // <div className="days-status-row">
// // // // //   <div className="days-used">
// // // // //     <h4>2 Days</h4>
// // // // //     <span className="days-label">Used</span>
// // // // //   </div>
// // // // //   <div className="days-available">
// // // // //     <h4>8 Days</h4>
// // // // //     <span className="days-label">Available</span>
// // // // //   </div>
// // // // // </div>
// // // // //             {/* History table */}
// // // // //             <table>
// // // // //               <thead>
// // // // //                 <tr>
// // // // //                   <th>Leave Type</th>
// // // // //                   <th>Start Date</th>
// // // // //                   <th>End Date</th>
// // // // //                   <th>Reason</th>
// // // // //                   <th>Status</th>
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 <tr>
// // // // //                   <td>Casual Leave</td>
// // // // //                   <td>10/03/2025</td>
// // // // //                   <td>13/03/2025</td>
// // // // //                   <td>-</td>
// // // // //                   <td className="status-approved">Approved</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>Casual Leave</td>
// // // // //                   <td>10/03/2025</td>
// // // // //                   <td>13/03/2025</td>
// // // // //                   <td>-</td>
// // // // //                   <td className="status-approved">Approved</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>Casual Leave</td>
// // // // //                   <td>10/03/2025</td>
// // // // //                   <td>13/03/2025</td>
// // // // //                   <td>-</td>
// // // // //                   <td className="status-rejected">Rejected</td>
// // // // //                 </tr>
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
      
// // // // //   );
// // // // // };

// // // // // export default Leave;
// // // // import React, { useState } from "react";
// // // // import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// // // // import Sidebar from "./sidebar1";
// // // // import Navbar from "./navbar1";
// // // // import "../css/leave.css";

// // // // const Leave = () => {
// // // //   // Get employee data from localStorage
// // // //   const employeeId = localStorage.getItem("userId") || "";
// // // //   const employeeName = localStorage.getItem("userName") || "";
// // // //   const employeeEmail = localStorage.getItem("userEmail") || "";
// // // //   const approver = localStorage.getItem("approver") || "Karma Dorji"; // Default if not found

// // // //   const [formData, setFormData] = useState({
// // // //     leaveType: "Casual Leave",
// // // //     startDate: "",
// // // //     endDate: "",
// // // //     reason: "",
// // // //     status: "PENDING"
// // // //   });

// // // //   const [submissionStatus, setSubmissionStatus] = useState(null);

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData(prev => ({
// // // //       ...prev,
// // // //       [name]: value
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     if (!employeeEmail) {
// // // //       setSubmissionStatus("error");
// // // //       console.error("Employee email is required");
// // // //       return;
// // // //     }

// // // //     // Calculate days taken
// // // //     const start = new Date(formData.startDate);
// // // //     const end = new Date(formData.endDate);
// // // //     const daysTaken = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

// // // //     // Prepare the leave data
// // // //     const leaveData = {
// // // //       employeeId,
// // // //       employeeName,
// // // //       employeeEmail,
// // // //       leaveType: formData.leaveType.toUpperCase().replace(" ", "_"),
// // // //       startDate: formData.startDate,
// // // //       endDate: formData.endDate,
// // // //       approver,
// // // //       daysTaken,
// // // //       reason: formData.reason,
// // // //       status: "PENDING"
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify(leaveData),
// // // //       });

// // // //       if (response.ok) {
// // // //         const result = await response.json();
// // // //         setSubmissionStatus("success");
// // // //         // Reset form or handle success
// // // //         setFormData({
// // // //           leaveType: "Casual Leave",
// // // //           startDate: "",
// // // //           endDate: "",
// // // //           reason: "",
// // // //           status: "PENDING"
// // // //         });
// // // //       } else {
// // // //         setSubmissionStatus("error");
// // // //         console.error("Submission failed:", await response.text());
// // // //       }
// // // //     } catch (error) {
// // // //       setSubmissionStatus("error");
// // // //       console.error("Error submitting leave request:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container2">
// // // //       {/* Sidebar */}
// // // //       <div className="sidebar-with-welcome2">
// // // //         <Sidebar />
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="main-content2">
// // // //         <Navbar />
        
// // // //         {/* Leave Request Form */}
// // // //         <div className="leave-container">
// // // //           <h2>Leave Request</h2>
// // // //           {submissionStatus === "success" && (
// // // //             <div className="alert alert-success">
// // // //               Leave request submitted successfully!
// // // //             </div>
// // // //           )}
// // // //           {submissionStatus === "error" && (
// // // //             <div className="alert alert-error">
// // // //               Failed to submit leave request. Please try again.
// // // //             </div>
// // // //           )}

// // // //           <div className="leave-form-container">
// // // //             <form className="leave-form" onSubmit={handleSubmit}>
// // // //               <div className="form-row">
// // // //                 <div className="form-group">
// // // //                   <label>Employee Name</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     value={employeeName} 
// // // //                     readOnly 
// // // //                   />
// // // //                 </div>
// // // //                 <div className="form-group">
// // // //                   <label>Leave type</label>
// // // //                   <select 
// // // //                     name="leaveType"
// // // //                     value={formData.leaveType}
// // // //                     onChange={handleChange}
// // // //                   >
// // // //                     <option>Casual Leave</option>
// // // //                     <option>Sick Leave</option>
// // // //                     <option>Annual Leave</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="form-row">
// // // //                 <div className="form-group">
// // // //                   <label>Start Date</label>
// // // //                   <input 
// // // //                     type="date" 
// // // //                     name="startDate"
// // // //                     value={formData.startDate}
// // // //                     onChange={handleChange}
// // // //                     required
// // // //                   />
// // // //                 </div>
// // // //                 <div className="form-group">
// // // //                   <label>End Date</label>
// // // //                   <input 
// // // //                     type="date" 
// // // //                     name="endDate"
// // // //                     value={formData.endDate}
// // // //                     onChange={handleChange}
// // // //                     required
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <div className="form-group">
// // // //                 <label>Approver</label>
// // // //                 <input 
// // // //                   type="text" 
// // // //                   value={approver} 
// // // //                   readOnly 
// // // //                 />
// // // //               </div>

// // // //               <div className="form-group" style={{ marginTop: '30px' }}>
// // // //                 <label>Reason (optional)</label>
// // // //                 <textarea 
// // // //                   rows="3"
// // // //                   name="reason"
// // // //                   value={formData.reason}
// // // //                   onChange={handleChange}
// // // //                 ></textarea>
// // // //               </div>

// // // //               <button type="submit" className="submit-btn">
// // // //                 Submit
// // // //               </button>
// // // //             </form>
// // // //           </div>

// // // //           <h3>Leave History</h3>
// // // //           <div className="leave-history">
// // // //             <div className="days-status-row">
// // // //               <div className="days-used">
// // // //                 <h4>2 Days</h4>
// // // //                 <span className="days-label">Used</span>
// // // //               </div>
// // // //               <div className="days-available">
// // // //                 <h4>8 Days</h4>
// // // //                 <span className="days-label">Available</span>
// // // //               </div>
// // // //             </div>
            
// // // //             {/* History table */}
// // // //             <table>
// // // //               <thead>
// // // //                 <tr>
// // // //                   <th>Leave Type</th>
// // // //                   <th>Start Date</th>
// // // //                   <th>End Date</th>
// // // //                   <th>Reason</th>
// // // //                   <th>Status</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 <tr>
// // // //                   <td>Casual Leave</td>
// // // //                   <td>10/03/2025</td>
// // // //                   <td>13/03/2025</td>
// // // //                   <td>-</td>
// // // //                   <td className="status-approved">Approved</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>Casual Leave</td>
// // // //                   <td>10/03/2025</td>
// // // //                   <td>13/03/2025</td>
// // // //                   <td>-</td>
// // // //                   <td className="status-approved">Approved</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>Casual Leave</td>
// // // //                   <td>10/03/2025</td>
// // // //                   <td>13/03/2025</td>
// // // //                   <td>-</td>
// // // //                   <td className="status-rejected">Rejected</td>
// // // //                 </tr>
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Leave;
// // // import React, { useState, useEffect } from "react";
// // // import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// // // import Sidebar from "./sidebar1";
// // // import Navbar from "./navbar1";
// // // import "../css/leave.css";

// // // const Leave = () => {
// // //   // Get employee data from localStorage
// // //   const employeeId = localStorage.getItem("userId") || "";
// // //   const employeeName = localStorage.getItem("userName") || "";
// // //   const employeeEmail = localStorage.getItem("userEmail") || "";
// // //   const approver = localStorage.getItem("approver") || "Karma Dorji"; // Default if not found

// // //   const [formData, setFormData] = useState({
// // //     leaveType: "Casual Leave",
// // //     startDate: "",
// // //     endDate: "",
// // //     reason: "",
// // //     status: "PENDING"
// // //   });

// // //   const [submissionStatus, setSubmissionStatus] = useState(null);
// // //   const [leaveHistory, setLeaveHistory] = useState([]);
// // //   const [loadingHistory, setLoadingHistory] = useState(true);
// // //   const [totalUsedDays, setTotalUsedDays] = useState(0);
// // //   const [availableDays, setAvailableDays] = useState(10); // Assuming 10 days as base

// // //   useEffect(() => {
// // //     const fetchLeaveHistory = async () => {
// // //       try {
// // //         const response = await fetch(`http://localhost:8765/LEAVESERVICE/api/leaves/employee/${employeeId}`);
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch leave history");
// // //         }
// // //         const data = await response.json();
// // //         setLeaveHistory(data);
        
// // //         // Calculate total used days (only for approved leaves)
// // //         const usedDays = data
// // //           .filter(leave => leave.status === "APPROVED")
// // //           .reduce((sum, leave) => sum + leave.daysTaken, 0);
        
// // //         setTotalUsedDays(usedDays);
// // //         setAvailableDays(10 - usedDays); // Assuming 10 days annual leave
// // //       } catch (error) {
// // //         console.error("Error fetching leave history:", error);
// // //       } finally {
// // //         setLoadingHistory(false);
// // //       }
// // //     };

// // //     if (employeeId) {
// // //       fetchLeaveHistory();
// // //     }
// // //   }, [employeeId]);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     if (!employeeEmail) {
// // //       setSubmissionStatus("error");
// // //       console.error("Employee email is required");
// // //       return;
// // //     }

// // //     // Calculate days taken
// // //     const start = new Date(formData.startDate);
// // //     const end = new Date(formData.endDate);
// // //     const daysTaken = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

// // //     // Prepare the leave data
// // //     const leaveData = {
// // //       employeeId,
// // //       employeeName,
// // //       employeeEmail,
// // //       leaveType: formData.leaveType.toUpperCase().replace(" ", "_"),
// // //       startDate: formData.startDate,
// // //       endDate: formData.endDate,
// // //       approver,
// // //       daysTaken,
// // //       reason: formData.reason,
// // //       status: "PENDING"
// // //     };

// // //     try {
// // //       const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(leaveData),
// // //       });

// // //       if (response.ok) {
// // //         const result = await response.json();
// // //         setSubmissionStatus("success");
// // //         // Reset form
// // //         setFormData({
// // //           leaveType: "Casual Leave",
// // //           startDate: "",
// // //           endDate: "",
// // //           reason: "",
// // //           status: "PENDING"
// // //         });
// // //         // Refresh leave history
// // //         window.location.reload();
// // //       } else {
// // //         setSubmissionStatus("error");
// // //         console.error("Submission failed:", await response.text());
// // //       }
// // //     } catch (error) {
// // //       setSubmissionStatus("error");
// // //       console.error("Error submitting leave request:", error);
// // //     }
// // //   };

// // //   const formatDate = (dateString) => {
// // //     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
// // //     return new Date(dateString).toLocaleDateString(undefined, options);
// // //   };

// // //   const getStatusClass = (status) => {
// // //     switch(status) {
// // //       case "APPROVED":
// // //         return "status-approved";
// // //       case "REJECTED":
// // //         return "status-rejected";
// // //       case "PENDING":
// // //         return "status-pending";
// // //       default:
// // //         return "";
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard-container2">
// // //       {/* Sidebar */}
// // //       <div className="sidebar-with-welcome2">
// // //         <Sidebar />
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="main-content2">
// // //         <Navbar />
        
// // //         {/* Leave Request Form */}
// // //         <div className="leave-container">
// // //           <h2>Leave Request</h2>
// // //           {submissionStatus === "success" && (
// // //             <div className="alert alert-success">
// // //               Leave request submitted successfully!
// // //             </div>
// // //           )}
// // //           {submissionStatus === "error" && (
// // //             <div className="alert alert-error">
// // //               Failed to submit leave request. Please try again.
// // //             </div>
// // //           )}

// // //           <div className="leave-form-container">
// // //             <form className="leave-form" onSubmit={handleSubmit}>
// // //               <div className="form-row">
// // //                 <div className="form-group">
// // //                   <label>Employee Name</label>
// // //                   <input 
// // //                     type="text" 
// // //                     value={employeeName} 
// // //                     readOnly 
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label>Leave type</label>
// // //                   <select 
// // //                     name="leaveType"
// // //                     value={formData.leaveType}
// // //                     onChange={handleChange}
// // //                   >
// // //                     <option>Casual Leave</option>
// // //                     <option>Sick Leave</option>
// // //                     <option>Annual Leave</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               <div className="form-row">
// // //                 <div className="form-group">
// // //                   <label>Start Date</label>
// // //                   <input 
// // //                     type="date" 
// // //                     name="startDate"
// // //                     value={formData.startDate}
// // //                     onChange={handleChange}
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label>End Date</label>
// // //                   <input 
// // //                     type="date" 
// // //                     name="endDate"
// // //                     value={formData.endDate}
// // //                     onChange={handleChange}
// // //                     required
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="form-group">
// // //                 <label>Approver</label>
// // //                 <input 
// // //                   type="text" 
// // //                   value={approver} 
// // //                   readOnly 
// // //                 />
// // //               </div>

// // //               <div className="form-group" style={{ marginTop: '30px' }}>
// // //                 <label>Reason (optional)</label>
// // //                 <textarea 
// // //                   rows="3"
// // //                   name="reason"
// // //                   value={formData.reason}
// // //                   onChange={handleChange}
// // //                 ></textarea>
// // //               </div>

// // //               <button type="submit" className="submit-btn">
// // //                 Submit
// // //               </button>
// // //             </form>
// // //           </div>

// // //           <h3>Leave History</h3>
// // //           <div className="leave-history">
// // //             <div className="days-status-row">
// // //               <div className="days-used">
// // //                 <h4>{totalUsedDays} Days</h4>
// // //                 <span className="days-label">Used</span>
// // //               </div>
// // //               <div className="days-available">
// // //                 <h4>{availableDays} Days</h4>
// // //                 <span className="days-label">Available</span>
// // //               </div>
// // //             </div>
            
// // //             {/* History table */}
// // //             {loadingHistory ? (
// // //               <div>Loading leave history...</div>
// // //             ) : (
// // //               <table>
// // //                 <thead>
// // //                   <tr>
// // //                     <th>Leave Type</th>
// // //                     <th>Start Date</th>
// // //                     <th>End Date</th>
// // //                     <th>Days Taken</th>
// // //                     <th>Reason</th>
// // //                     <th>Status</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {leaveHistory.length > 0 ? (
// // //                     leaveHistory.map((leave, index) => (
// // //                       <tr key={index}>
// // //                         <td>{leave.leaveType.replace("_", " ")}</td>
// // //                         <td>{formatDate(leave.startDate)}</td>
// // //                         <td>{formatDate(leave.endDate)}</td>
// // //                         <td>{leave.daysTaken}</td>
// // //                         <td>{leave.reason || "-"}</td>
// // //                         <td className={getStatusClass(leave.status)}>
// // //                           {leave.status}
// // //                         </td>
// // //                       </tr>
// // //                     ))
// // //                   ) : (
// // //                     <tr>
// // //                       <td colSpan="6" style={{ textAlign: 'center' }}>
// // //                         No leave history found
// // //                       </td>
// // //                     </tr>
// // //                   )}
// // //                 </tbody>
// // //               </table>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Leave;
// // import React, { useState, useEffect } from "react";
// // import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// // import Sidebar from "./sidebar1";
// // import Navbar from "./navbar1";
// // import "../css/leave.css";

// // const Leave = () => {
// //   // Get employee data from localStorage
// //   const employeeId = localStorage.getItem("userId") || "";
// //   const employeeName = localStorage.getItem("userName") || "";
// //   const employeeEmail = localStorage.getItem("userEmail") || "";
// //   const approver = localStorage.getItem("approver") || "Karma Dorji"; // Default if not found

// //   const [formData, setFormData] = useState({
// //     leaveType: "Casual Leave",
// //     startDate: "",
// //     endDate: "",
// //     reason: "",
// //     status: "PENDING"
// //   });

// //   const [submissionStatus, setSubmissionStatus] = useState(null);
// //   const [leaveHistory, setLeaveHistory] = useState([]);
// //   const [loadingHistory, setLoadingHistory] = useState(true);
// //   const [totalUsedDays, setTotalUsedDays] = useState(0);
// //   const [availableDays, setAvailableDays] = useState(0);
// //   const [loadingDays, setLoadingDays] = useState(true);

// //   // Fetch leave history and used days
// //   useEffect(() => {
// //     const fetchLeaveData = async () => {
// //       try {
// //         setLoadingHistory(true);
// //         setLoadingDays(true);
        
// //         // Fetch leave history
// //         const historyResponse = await fetch(
// //           `http://localhost:8765/LEAVESERVICE/api/leaves/employee/${employeeId}`
// //         );
        
// //         if (!historyResponse.ok) {
// //           throw new Error("Failed to fetch leave history");
// //         }
        
// //         const historyData = await historyResponse.json();
// //         setLeaveHistory(historyData);
        
// //         // Fetch used days for ANNUAL leave
// //         const daysResponse = await fetch(
// //           `http://localhost:8765/LEAVESERVICE/api/leaves/days-used?employeeId=${employeeId}&leaveType=ANNUAL`
// //         );
        
// //         if (!daysResponse.ok) {
// //           throw new Error("Failed to fetch used leave days");
// //         }
        
// //         const daysData = await daysResponse.json();
// //         setTotalUsedDays(daysData.daysUsed || 0);
// //         setAvailableDays(daysData.availableDays || 0);
        
// //       } catch (error) {
// //         console.error("Error fetching leave data:", error);
// //         // Fallback calculation if API fails
// //         const usedDays = leaveHistory
// //           .filter(leave => leave.status === "APPROVED" && leave.leaveType === "ANNUAL")
// //           .reduce((sum, leave) => sum + leave.daysTaken, 0);
        
// //         setTotalUsedDays(usedDays);
// //         setAvailableDays(10 - usedDays); // Default 10 days if API fails
// //       } finally {
// //         setLoadingHistory(false);
// //         setLoadingDays(false);
// //       }
// //     };

// //     if (employeeId) {
// //       fetchLeaveData();
// //     }
// //   }, [employeeId]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!employeeEmail) {
// //       setSubmissionStatus("error");
// //       console.error("Employee email is required");
// //       return;
// //     }

// //     // Calculate days taken
// //     const start = new Date(formData.startDate);
// //     const end = new Date(formData.endDate);
// //     const daysTaken = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

// //     // Prepare the leave data
// //     const leaveData = {
// //       employeeId,
// //       employeeName,
// //       employeeEmail,
// //       leaveType: formData.leaveType.toUpperCase().replace(" ", "_"),
// //       startDate: formData.startDate,
// //       endDate: formData.endDate,
// //       approver,
// //       daysTaken,
// //       reason: formData.reason,
// //       status: "PENDING"
// //     };

// //     try {
// //       const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(leaveData),
// //       });

// //       if (response.ok) {
// //         const result = await response.json();
// //         setSubmissionStatus("success");
// //         // Reset form
// //         setFormData({
// //           leaveType: "Casual Leave",
// //           startDate: "",
// //           endDate: "",
// //           reason: "",
// //           status: "PENDING"
// //         });
// //         // Refresh leave data
// //         window.location.reload();
// //       } else {
// //         setSubmissionStatus("error");
// //         console.error("Submission failed:", await response.text());
// //       }
// //     } catch (error) {
// //       setSubmissionStatus("error");
// //       console.error("Error submitting leave request:", error);
// //     }
// //   };

// //   const formatDate = (dateString) => {
// //     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
// //     return new Date(dateString).toLocaleDateString(undefined, options);
// //   };

// //   const getStatusClass = (status) => {
// //     switch(status) {
// //       case "APPROVED":
// //         return "status-approved";
// //       case "REJECTED":
// //         return "status-rejected";
// //       case "PENDING":
// //         return "status-pending";
// //       default:
// //         return "";
// //     }
// //   };

// //   return (
// //     <div className="dashboard-container2">
// //       {/* Sidebar */}
// //       <div className="sidebar-with-welcome2">
// //         <Sidebar />
// //       </div>

// //       {/* Main Content */}
// //       <div className="main-content2">
// //         <Navbar />
        
// //         {/* Leave Request Form */}
// //         <div className="leave-container">
// //           <h2>Leave Request</h2>
// //           {submissionStatus === "success" && (
// //             <div className="alert alert-success">
// //               Leave request submitted successfully!
// //             </div>
// //           )}
// //           {submissionStatus === "error" && (
// //             <div className="alert alert-error">
// //               Failed to submit leave request. Please try again.
// //             </div>
// //           )}

// //           <div className="leave-form-container">
// //             <form className="leave-form" onSubmit={handleSubmit}>
// //               <div className="form-row">
// //                 <div className="form-group">
// //                   <label>Employee Name</label>
// //                   <input 
// //                     type="text" 
// //                     value={employeeName} 
// //                     readOnly 
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Leave type</label>
// //                   <select 
// //                     name="leaveType"
// //                     value={formData.leaveType}
// //                     onChange={handleChange}
// //                   >
// //                     <option>Casual Leave</option>
// //                     <option>Sick Leave</option>
// //                     <option>Annual Leave</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               <div className="form-row">
// //                 <div className="form-group">
// //                   <label>Start Date</label>
// //                   <input 
// //                     type="date" 
// //                     name="startDate"
// //                     value={formData.startDate}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>End Date</label>
// //                   <input 
// //                     type="date" 
// //                     name="endDate"
// //                     value={formData.endDate}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="form-group">
// //                 <label>Approver</label>
// //                 <input 
// //                   type="text" 
// //                   value={approver} 
// //                   readOnly 
// //                 />
// //               </div>

// //               <div className="form-group" style={{ marginTop: '30px' }}>
// //                 <label>Reason (optional)</label>
// //                 <textarea 
// //                   rows="3"
// //                   name="reason"
// //                   value={formData.reason}
// //                   onChange={handleChange}
// //                 ></textarea>
// //               </div>

// //               <button type="submit" className="submit-btn">
// //                 Submit
// //               </button>
// //             </form>
// //           </div>

// //           <h3>Leave History</h3>
// //           <div className="leave-history">
// //             <div className="days-status-row">
// //               <div className="days-used">
// //                 <h4>{loadingDays ? "Loading..." : `${totalUsedDays} Days`}</h4>
// //                 <span className="days-label">Used</span>
// //               </div>
// //               <div className="days-available">
// //                 <h4>{loadingDays ? "Loading..." : `${availableDays} Days`}</h4>
// //                 <span className="days-label">Available</span>
// //               </div>
// //             </div>
            
// //             {/* History table */}
// //             {loadingHistory ? (
// //               <div>Loading leave history...</div>
// //             ) : (
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th>Leave Type</th>
// //                     <th>Start Date</th>
// //                     <th>End Date</th>
// //                     <th>Days Taken</th>
// //                     <th>Reason</th>
// //                     <th>Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {leaveHistory.length > 0 ? (
// //                     leaveHistory.map((leave, index) => (
// //                       <tr key={index}>
// //                         <td>{leave.leaveType.replace("_", " ")}</td>
// //                         <td>{formatDate(leave.startDate)}</td>
// //                         <td>{formatDate(leave.endDate)}</td>
// //                         <td>{leave.daysTaken}</td>
// //                         <td>{leave.reason || "-"}</td>
// //                         <td className={getStatusClass(leave.status)}>
// //                           {leave.status}
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="6" style={{ textAlign: 'center' }}>
// //                         No leave history found
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Leave;
// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// import Sidebar from "./sidebar1";
// import Navbar from "./navbar1";
// import "../css/leave.css";

// const Leave = () => {
//   // Get employee data from localStorage
//   const employeeId = localStorage.getItem("userId") || "";
//   const employeeName = localStorage.getItem("userName") || "";
//   const employeeEmail = localStorage.getItem("userEmail") || "";
//   const approver = localStorage.getItem("approver") || "Karma Dorji"; // Default if not found

//   const [formData, setFormData] = useState({
//     leaveType: "Casual Leave",
//     startDate: "",
//     endDate: "",
//     reason: "",
//     status: "PENDING"
//   });

//   const [submissionStatus, setSubmissionStatus] = useState(null);
//   const [leaveHistory, setLeaveHistory] = useState([]);
//   const [loadingHistory, setLoadingHistory] = useState(true);
//   const [totalUsedDays, setTotalUsedDays] = useState(0);
//   const [remainingDays, setRemainingDays] = useState(0);
//   const [loadingDays, setLoadingDays] = useState(true);

//   // Fetch leave history and remaining days
//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         setLoadingHistory(true);
//         setLoadingDays(true);
        
//         // Fetch leave history
//         const historyResponse = await fetch(
//           `http://localhost:8765/LEAVESERVICE/api/leaves/employee/${employeeId}`
//         );
        
//         if (!historyResponse.ok) {
//           throw new Error("Failed to fetch leave history");
//         }
        
//         const historyData = await historyResponse.json();
//         setLeaveHistory(historyData);
        
//         // Fetch remaining days for ANNUAL leave
//         const daysResponse = await fetch(
//           `http://localhost:8080/api/leaves/remaining?employeeId=${employeeId}&leaveType=ANNUAL`
//         );
        
//         if (!daysResponse.ok) {
//           throw new Error("Failed to fetch remaining leave days");
//         }
        
//         const daysData = await daysResponse.json();
//         setTotalUsedDays(daysData.usedDays || 0);
//         setRemainingDays(daysData.remainingDays || 0);
        
//       } catch (error) {
//         console.error("Error fetching leave data:", error);
//         // Fallback calculation if API fails
//         const usedDays = leaveHistory
//           .filter(leave => leave.status === "APPROVED" && leave.leaveType === "ANNUAL")
//           .reduce((sum, leave) => sum + leave.daysTaken, 0);
        
//         setTotalUsedDays(usedDays);
//         setRemainingDays(10 - usedDays); // Default 10 days if API fails
//       } finally {
//         setLoadingHistory(false);
//         setLoadingDays(false);
//       }
//     };

//     if (employeeId) {
//       fetchLeaveData();
//     }
//   }, [employeeId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!employeeEmail) {
//       setSubmissionStatus("error");
//       console.error("Employee email is required");
//       return;
//     }

//     // Calculate days taken
//     const start = new Date(formData.startDate);
//     const end = new Date(formData.endDate);
//     const daysTaken = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

//     // Check if sufficient leave days are available for Annual Leave
//     if (formData.leaveType === "Annual Leave" && daysTaken > remainingDays) {
//       setSubmissionStatus("error");
//       alert(`You only have ${remainingDays} days remaining for Annual Leave`);
//       return;
//     }

//     // Prepare the leave data
//     const leaveData = {
//       employeeId,
//       employeeName,
//       employeeEmail,
//       leaveType: formData.leaveType.toUpperCase().replace(" ", "_"),
//       startDate: formData.startDate,
//       endDate: formData.endDate,
//       approver,
//       daysTaken,
//       reason: formData.reason,
//       status: "PENDING"
//     };

//     try {
//       const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(leaveData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setSubmissionStatus("success");
//         // Reset form
//         setFormData({
//           leaveType: "Casual Leave",
//           startDate: "",
//           endDate: "",
//           reason: "",
//           status: "PENDING"
//         });
//         // Refresh leave data
//         window.location.reload();
//       } else {
//         setSubmissionStatus("error");
//         console.error("Submission failed:", await response.text());
//       }
//     } catch (error) {
//       setSubmissionStatus("error");
//       console.error("Error submitting leave request:", error);
//     }
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const getStatusClass = (status) => {
//     switch(status) {
//       case "APPROVED":
//         return "status-approved";
//       case "REJECTED":
//         return "status-rejected";
//       case "PENDING":
//         return "status-pending";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="dashboard-container2">
//       {/* Sidebar */}
//       <div className="sidebar-with-welcome2">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="main-content2">
//         <Navbar />
        
//         {/* Leave Request Form */}
//         <div className="leave-container">
//           <h2>Leave Request</h2>
//           {submissionStatus === "success" && (
//             <div className="alert alert-success">
//               Leave request submitted successfully!
//             </div>
//           )}
//           {submissionStatus === "error" && (
//             <div className="alert alert-error">
//               Failed to submit leave request. Please try again.
//             </div>
//           )}

//           <div className="leave-form-container">
//             <form className="leave-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Employee Name</label>
//                   <input 
//                     type="text" 
//                     value={employeeName} 
//                     readOnly 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Leave type</label>
//                   <select 
//                     name="leaveType"
//                     value={formData.leaveType}
//                     onChange={handleChange}
//                   >
//                     <option>Casual Leave</option>
//                     <option>Sick Leave</option>
//                     <option>Annual Leave</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Start Date</label>
//                   <input 
//                     type="date" 
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>End Date</label>
//                   <input 
//                     type="date" 
//                     name="endDate"
//                     value={formData.endDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Approver</label>
//                 <input 
//                   type="text" 
//                   value={approver} 
//                   readOnly 
//                 />
//               </div>

//               <div className="form-group" style={{ marginTop: '30px' }}>
//                 <label>Reason (optional)</label>
//                 <textarea 
//                   rows="3"
//                   name="reason"
//                   value={formData.reason}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>

//               <button type="submit" className="submit-btn">
//                 Submit
//               </button>
//             </form>
//           </div>

//           <h3>Leave History</h3>
//           <div className="leave-history">
//             <div className="days-status-row">
//               <div className="days-used">
//                 <h4>{loadingDays ? "Loading..." : `${totalUsedDays} Days`}</h4>
//                 <span className="days-label">Used</span>
//               </div>
//               <div className="days-available">
//                 <h4>{loadingDays ? "Loading..." : `${remainingDays} Days`}</h4>
//                 <span className="days-label">Remaining</span>
//               </div>
//             </div>
            
//             {/* History table */}
//             {loadingHistory ? (
//               <div>Loading leave history...</div>
//             ) : (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Leave Type</th>
//                     <th>Start Date</th>
//                     <th>End Date</th>
//                     <th>Days Taken</th>
//                     <th>Reason</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {leaveHistory.length > 0 ? (
//                     leaveHistory.map((leave, index) => (
//                       <tr key={index}>
//                         <td>{leave.leaveType.replace("_", " ")}</td>
//                         <td>{formatDate(leave.startDate)}</td>
//                         <td>{formatDate(leave.endDate)}</td>
//                         <td>{leave.daysTaken}</td>
//                         <td>{leave.reason || "-"}</td>
//                         <td className={getStatusClass(leave.status)}>
//                           {leave.status}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" style={{ textAlign: 'center' }}>
//                         No leave history found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leave;
import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/leave.css";

const Leave = () => {
  // Get employee data from localStorage
  const employeeId = localStorage.getItem("userId") || "";
  const employeeName = localStorage.getItem("userName") || "";
  const employeeEmail = localStorage.getItem("userEmail") || "";
  const approver = localStorage.getItem("approver") || "HR"; // Default if not found

  const [formData, setFormData] = useState({
    leaveType: "CASUAL_LEAVE",
    startDate: "",
    endDate: "",
    reason: "",
    status: "PENDING"
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [leaveBalances, setLeaveBalances] = useState({
    ANNUAL_LEAVE: { used: 0, remaining: 0 },
    SICK_LEAVE: { used: 0, remaining: 0 },
    MATERNITY_LEAVE: { used: 0, remaining: 0 },
    STUDY_LEAVE: { used: 0, remaining: 0 },
    CASUAL_LEAVE: { used: 0, remaining: 0 }
  });
  const [loadingDays, setLoadingDays] = useState(true);
  const [selectedLeaveType, setSelectedLeaveType] = useState("ANNUAL_LEAVE");

  // Fetch leave history and remaining days
  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        setLoadingHistory(true);
        setLoadingDays(true);
        
        // Fetch leave history
        const historyResponse = await fetch(
          `http://localhost:8765/LEAVESERVICE/api/leaves/employee/${employeeId}`
        );
        
        if (!historyResponse.ok) {
          throw new Error("Failed to fetch leave history");
        }
        
        const historyData = await historyResponse.json();
        setLeaveHistory(historyData);
        
        // Fetch leave balances
        const balancesResponse = await fetch(
          `http://localhost:8765/LEAVESERVICE/api/leaves/days-used/${employeeId}`
        );
        
        if (!balancesResponse.ok) {
          throw new Error("Failed to fetch leave balances");
        }
        
        const balancesData = await balancesResponse.json();
        
        // Update leave balances state
        setLeaveBalances({
          ANNUAL_LEAVE: {
            used: balancesData.ANNUAL_LEAVE || 0,
            remaining: 10 - (balancesData.ANNUAL_LEAVE || 0) // Assuming 10 days annual leave
          },
          SICK_LEAVE: {
            used: balancesData.SICK_LEAVE || 0,
            remaining: 10 - (balancesData.SICK_LEAVE || 0) // Assuming 10 days sick leave
          },
          MATERNITY_LEAVE: {
            used: balancesData.MATERNITY_LEAVE || 0,
            remaining: 90 - (balancesData.MATERNITY_LEAVE || 0) // Assuming 90 days maternity leave
          },
          STUDY_LEAVE: {
            used: balancesData.STUDY_LEAVE || 0,
            remaining: 5 - (balancesData.STUDY_LEAVE || 0) // Assuming 5 days study leave
          },
          CASUAL_LEAVE: {
            used: balancesData.CASUAL_LEAVE || 0,
            remaining: 5 - (balancesData.CASUAL_LEAVE || 0) // Assuming 5 days casual leave
          }
        });
        
      } catch (error) {
        console.error("Error fetching leave data:", error);
        // Fallback calculation if API fails
        const calculateUsedDays = (type) => 
          leaveHistory
            .filter(leave => leave.status === "APPROVED" && leave.leaveType === type)
            .reduce((sum, leave) => sum + leave.daysTaken, 0);
        
        setLeaveBalances({
          ANNUAL_LEAVE: {
            used: calculateUsedDays("ANNUAL_LEAVE"),
            remaining: 10 - calculateUsedDays("ANNUAL_LEAVE")
          },
          SICK_LEAVE: {
            used: calculateUsedDays("SICK_LEAVE"),
            remaining: 10 - calculateUsedDays("SICK_LEAVE")
          },
          MATERNITY_LEAVE: {
            used: calculateUsedDays("MATERNITY_LEAVE"),
            remaining: 90 - calculateUsedDays("MATERNITY_LEAVE")
          },
          STUDY_LEAVE: {
            used: calculateUsedDays("STUDY_LEAVE"),
            remaining: 5 - calculateUsedDays("STUDY_LEAVE")
          },
          CASUAL_LEAVE: {
            used: calculateUsedDays("CASUAL_LEAVE"),
            remaining: 5 - calculateUsedDays("CASUAL_LEAVE")
          }
        });
      } finally {
        setLoadingHistory(false);
        setLoadingDays(false);
      }
    };

    if (employeeId) {
      fetchLeaveData();
    }
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!employeeEmail) {
      setSubmissionStatus("error");
      console.error("Employee email is required");
      return;
    }

    // Calculate days taken
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const daysTaken = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    // Check if sufficient leave days are available
    const leaveType = formData.leaveType.toUpperCase().replace(" ", "_");
    if (daysTaken > leaveBalances[leaveType].remaining) {
      setSubmissionStatus("error");
      alert(`You only have ${leaveBalances[leaveType].remaining} days remaining for ${formData.leaveType}`);
      return;
    }

    // Prepare the leave data
    const leaveData = {
      employeeId,
      employeeName,
      employeeEmail,
      leaveType: leaveType,
      startDate: formData.startDate,
      endDate: formData.endDate,
      approver,
      daysTaken,
      reason: formData.reason,
      status: "PENDING"
    };

    try {
      const response = await fetch("http://localhost:8765/LEAVESERVICE/api/leaves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmissionStatus("success");
        // Reset form
        setFormData({
          leaveType: "CASUAL_LEAVE",
          startDate: "",
          endDate: "",
          reason: "",
          status: "PENDING"
        });
        // Refresh leave data
        window.location.reload();
      } else {
        setSubmissionStatus("error");
        console.error("Submission failed:", await response.text());
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error submitting leave request:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusClass = (status) => {
    switch(status) {
      case "APPROVED":
        return "status-approved";
      case "REJECTED":
        return "status-rejected";
      case "PENDING":
        return "status-pending";
      default:
        return "";
    }
  };

  const formatLeaveType = (type) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  const filteredLeaveHistory = leaveHistory.filter(
    leave => leave.leaveType === selectedLeaveType
  );

  return (
    <div className="dashboard-container2">
      {/* Sidebar */}
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content2">
        <Navbar />
        
        {/* Leave Request Form */}
        <div className="leave-container">
          <h2 style={{marginLeft:'50px'}}>Leave Request</h2>
          {submissionStatus === "success" && (
            <div className="alert alert-success">
              Leave request submitted successfully!
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="alert alert-error">
              Failed to submit leave request. Please try again.
            </div>
          )}

          <div className="leave-form-container">
            <form className="leave-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Employee Name</label>
                  <input 
                    type="text" 
                    value={employeeName} 
                    readOnly 
                  style={{color:'#696969', fontStyle:'italic'}}

                  />
                </div>
                <div className="form-group">
                  <label>Leave type</label>
                  <select 
                    name="leaveType"
                    value={formData.leaveType}
                    onChange={handleChange}
                  >
                    {/* <option value="CASUAL_LEAVE">Casual Leave</option> */}
                    <option value="ANNUAL_LEAVE">Annual Leave</option>
                    <option value="SICK_LEAVE">Sick Leave</option>
                    
                    <option value="MATERNITY_LEAVE">Maternity Leave</option>
                    <option value="STUDY_LEAVE">Study Leave</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input 
                    type="date" 
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input 
                    type="date" 
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Approver</label>
                <input 
                  type="text" 
                  value={approver} 
                  readOnly 
                  style={{color:'#696969', fontStyle:'italic'}}
                />
              </div>

              <div className="form-group" style={{ marginTop: '30px' }}>
                <label>Reason (optional)</label>
                <textarea 
                  rows="3"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          <h3 style={{marginLeft:'50px',marginTop:'30px'}}>Leave History</h3>
          <div style={{marginLeft:'50px',marginTop:'10px'}} className="leave-type-selector">
            <label>Select Leave Type: </label>
            <select
              value={selectedLeaveType}
              onChange={(e) => setSelectedLeaveType(e.target.value)}
                      style={{marginLeft:'50px', padding:'5px 10px', borderRadius:'7px', marginTop:'10px'}}

            >
              <option value="ANNUAL_LEAVE">Annual Leave</option>
              <option value="SICK_LEAVE">Sick Leave</option>
              <option value="MATERNITY_LEAVE">Maternity Leave</option>
              <option value="STUDY_LEAVE">Study Leave</option>
              {/* <option value="CASUAL_LEAVE">Casual Leave</option> */}
            </select>
          </div>

          <div className="leave-history">
            <div className="days-status-row">
              <div className="days-used">
                <h4>{loadingDays ? "Loading..." : `${leaveBalances[selectedLeaveType].used} Days`}</h4>
                <span className="days-label">Used</span>
              </div>
              <div className="days-available">
                <h4>{loadingDays ? "Loading..." : `${leaveBalances[selectedLeaveType].remaining} Days`}</h4>
                <span className="days-label">Remaining</span>
              </div>
            </div>
            
            {/* History table */}
            {loadingHistory ? (
              <div>Loading leave history...</div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Days Taken</th>
                    <th>Reason</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeaveHistory.length > 0 ? (
                    filteredLeaveHistory.map((leave, index) => (
                      <tr key={index}>
                        <td>{formatLeaveType(leave.leaveType)}</td>
                        <td>{formatDate(leave.startDate)}</td>
                        <td>{formatDate(leave.endDate)}</td>
                        <td>{leave.daysTaken}</td>
                        <td>{leave.reason || "-"}</td>
                        <td className={getStatusClass(leave.status)}>
                          {leave.status}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center' }}>
                        No {formatLeaveType(selectedLeaveType)} history found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;