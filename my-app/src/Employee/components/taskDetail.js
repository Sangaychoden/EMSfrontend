
// // // import React, { useState, useEffect } from "react";
// // // import { useParams, useNavigate, useLocation } from "react-router-dom";
// // // import Sidebar from "./sidebar1";
// // // import Navbar from "./navbar1";
// // // import "../css/taskdetails.css";

// // // const TaskDetail = () => {
// // //   const [task, setTask] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [progress, setProgress] = useState("Not Started");
// // //   const { taskId } = useParams();
// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   const statusMap = {
// // //     NOT_STARTED: "Not Started",
// // //     IN_PROGRESS: "In Progress",
// // //     COMPLETED: "Completed",
// // //   };

// // //   const reverseStatusMap = {
// // //     "Not Started": "NOT_STARTED",
// // //     "In Progress": "IN_PROGRESS",
// // //     "Completed": "COMPLETED",
// // //   };

// // //   useEffect(() => {
// // //     if (!taskId) {
// // //       navigate("/employee/tasks");
// // //       return;
// // //     }

// // //     const controller = new AbortController();
// // //     const { signal } = controller;

// // //     const fetchTaskDetails = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError(null);
// // //         const token = localStorage.getItem("token");
// // //         const isTeamTask = location.state?.isTeamTask || false;
// // //         const initialTask = location.state?.taskDetails;

// // //         if (initialTask) {
// // //           setTask(initialTask);
// // //           setProgress(statusMap[initialTask.status] || "Not Started");
// // //           return;
// // //         }

// // //         const endpoint = isTeamTask
// // //           ? `http://localhost:8765/TASKSERVICE/api/tasks/team/${taskId}`
// // //           : `http://localhost:8765/TASKSERVICE/api/tasks/individual/${taskId}`;

// // //         const response = await fetch(endpoint, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //           signal
// // //         });

// // //         if (!response.ok) {
// // //           const errorText = await response.text();
// // //           throw new Error(errorText || "Failed to fetch task");
// // //         }

// // //         const data = await response.json();
// // //         if (!data) throw new Error("Task not found");

// // //         setTask(data);
// // //         setProgress(statusMap[data.status] || "Not Started");
// // //       } catch (err) {
// // //         if (err.name !== "AbortError") {
// // //           setError(err.message);
// // //           setTask(null);
// // //         }
// // //       } finally {
// // //         if (!signal.aborted) {
// // //           setLoading(false);
// // //         }
// // //       }
// // //     };

// // //     fetchTaskDetails();
// // //     return () => controller.abort();
// // //   }, [taskId, navigate, location.state]);

// // //   const handleStatusChange = async (e) => {
// // //     const newStatus = reverseStatusMap[e.target.value];
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const response = await fetch(
// // //         `http://localhost:8765/TASKSERVICE/api/tasks/${taskId}/status`,
// // //         {
// // //           method: "PUT",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //           body: JSON.stringify({ status: newStatus }),
// // //         }
// // //       );

// // //       if (!response.ok) {
// // //         throw new Error("Failed to update status");
// // //       }

// // //       setProgress(e.target.value);
// // //       setTask(prev => ({ ...prev, status: newStatus }));
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard-container2 task-detail-page">
// // //       <div className="sidebar-with-welcome2">
// // //         <Sidebar />
// // //       </div>

// // //       <div className="main-content2">
// // //         <Navbar />
        
// // //         {loading ? (
// // //           <div className="loading-overlay">
// // //             <div className="loader"></div>
// // //             <p>Loading task details...</p>
// // //           </div>
// // //         ) : error ? (
// // //           <div className="error-banner">
// // //             ⚠️ Error: {error}
// // //             <button onClick={() => window.location.reload()}>Retry</button>
// // //             <button onClick={() => navigate("/employee/tasks")}>Back to Tasks</button>
// // //           </div>
// // //         ) : task ? (
// // //           <div className="task-detail-container">
// // //             <div className="task-detail-header">
// // //               <h5>
// // //                 {location.state?.isTeamTask ? "Team Task Details" : "Individual Task Details"}
// // //                 <span className="task-type-badge">
// // //                   {location.state?.isTeamTask ? "Team" : "Individual"}
// // //                 </span>
// // //               </h5>
// // //             </div>

// // //             <div className="task-card">
// // //               <h2 className="task-title">{task?.task || "Untitled Task"}</h2>

// // //               <div className="task-info">
// // //                 <div className="task-dates-boxes">
// // //                   <div className="task-date-box">
// // //                     <strong>Assigned Date:</strong>
// // //                     <p>
// // //                       {task?.assignDate 
// // //                         ? new Date(task.assignDate).toLocaleDateString()
// // //                         : "N/A"}
// // //                     </p>
// // //                   </div>
// // //                   <div className="task-date-box">
// // //                     <strong>Due Date:</strong>
// // //                     <p>
// // //                       {task?.dueDate 
// // //                         ? new Date(task.dueDate).toLocaleDateString()
// // //                         : "N/A"}
// // //                     </p>
// // //                   </div>
// // //                   <div className="task-date-box">
// // //                     <strong>Assigned To:</strong>
// // //                     <p>
// // //                       {task?.assignTo?.join(", ") || "Unassigned"}
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="task-description-section">
// // //                   <strong>Description:</strong>
// // //                   <div className="task-description">
// // //                     {task?.description?.split("\n").map((line, index) => (
// // //                       <p key={index}>{line}</p>
// // //                     )) || "No description provided"}
// // //                   </div>
// // //                 </div>

// // //                 <div className="progress-section">
// // //                   <label><strong>Progress:</strong></label>
// // //                   <select
// // //                     value={progress}
// // //                     onChange={handleStatusChange}
// // //                     disabled={loading}
// // //                   >
// // //                     <option value="Not Started">Not Started</option>
// // //                     <option value="In Progress">In Progress</option>
// // //                     <option value="Completed">Completed</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div className="error-banner">
// // //             ⚠️ Task not found
// // //             <button onClick={() => navigate("/employee/tasks")}>Back to Tasks</button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TaskDetail;
// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate, useLocation } from "react-router-dom";
// // import Sidebar from "./sidebar1";
// // import Navbar from "./navbar1";
// // import "../css/taskdetails.css";

// // const TaskDetail = () => {
// //   const [task, setTask] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [progress, setProgress] = useState("Not Started");
// //   const { taskId } = useParams();
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const statusMap = {
// //     NOT_STARTED: "Not Started",
// //     IN_PROGRESS: "In Progress",
// //     COMPLETED: "Completed",
// //   };

// //   const reverseStatusMap = {
// //     "Not Started": "NOT_STARTED",
// //     "In Progress": "IN_PROGRESS",
// //     "Completed": "COMPLETED",
// //   };

// //   useEffect(() => {
// //     if (!taskId) {
// //       navigate("/employee/tasks");
// //       return;
// //     }

// //     const controller = new AbortController();
// //     const { signal } = controller;

// //     const fetchTaskDetails = async () => {
// //       try {
// //         setLoading(true);
// //         const token = localStorage.getItem("token");
// //         const isTeamTask = location.state?.isTeamTask || false;
// //         const initialTask = location.state?.taskDetails;

// //         if (initialTask) {
// //           setTask(initialTask);
// //           setProgress(statusMap[initialTask.status] || "Not Started");
// //           return;
// //         }

// //         const endpoint = isTeamTask
// //           ? `http://localhost:8765/TASKSERVICE/api/tasks/team/${taskId}`
// //           : `http://localhost:8765/TASKSERVICE/api/tasks/individual/${taskId}`;

// //         const response = await fetch(endpoint, {
// //           headers: { Authorization: `Bearer ${token}` },
// //           signal,
// //         });

// //         if (!response.ok) {
// //           throw new Error(await response.text() || "Failed to fetch task");
// //         }

// //         const data = await response.json();
// //         if (!data) throw new Error("Task not found");

// //         setTask(data);
// //         setProgress(statusMap[data.status] || "Not Started");
// //       } catch (err) {
// //         if (err.name !== "AbortError") {
// //           setError(err.message);
// //           setTask(null);
// //         }
// //       } finally {
// //         if (!signal.aborted) setLoading(false);
// //       }
// //     };

// //     fetchTaskDetails();
// //     return () => controller.abort();
// //   }, [taskId, navigate, location.state]);

// //   const handleStatusChange = async (e) => {
// //     const newStatus = reverseStatusMap[e.target.value];
// //     try {
// //       const token = localStorage.getItem("token");
// //       const response = await fetch(
// //         `http://localhost:8765/TASKSERVICE/api/tasks/${taskId}/status`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: JSON.stringify({ status: newStatus }),
// //         }
// //       );

// //       if (!response.ok) throw new Error("Failed to update status");

// //       setProgress(e.target.value);
// //       setTask(prev => ({ ...prev, status: newStatus }));
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const renderTeamTable = () => (
// //     <table className="team-table">
// //       <thead>
// //         <tr>
// //           <th>Name</th>
// //           <th>Employee Title</th>
// //           <th>Responsibility</th>
// //           <th>Progress</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {task?.teamMembers?.map((member, idx) => (
// //           <tr key={idx}>
// //             <td>{member.name}</td>
// //             <td>{member.title}</td>
// //             <td>{member.responsibility}</td>
// //             <td>
// //               <span className={`status-badge ${member.progress?.toLowerCase().replace(" ", "-")}`}>
// //                 {statusMap[member.progress] || "Not Started"}
// //               </span>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );

// //   return (
// //     <div className="dashboard-container2 task-detail-page">
// //       <div className="sidebar-with-welcome2"><Sidebar /></div>

// //       <div className="main-content2">
// //         <Navbar />

// //         {loading ? (
// //           <div className="loading-overlay">
// //             <div className="loader"></div>
// //             <p>Loading task details...</p>
// //           </div>
// //         ) : error ? (
// //           <div className="error-banner">
// //             ⚠️ Error: {error}
// //             <button onClick={() => window.location.reload()}>Retry</button>
// //             <button onClick={() => navigate("/employee/tasks")}>Back</button>
// //           </div>
// //         ) : task ? (
// //           <div className="task-detail-container">
// //             <div className="task-detail-header">
// //               <h5>
// //                 {location.state?.isTeamTask ? "Team Task Details" : "Individual Task Details"}
// //                 <span className="task-type-badge">{location.state?.isTeamTask ? "Team" : "Individual"}</span>
// //               </h5>
// //             </div>

// //             <div className="task-card">
// //               <h2 className="task-title">{task?.task || "Untitled Task"}</h2>

// //               <div className="task-info">
// //                 <div className="task-dates-boxes">
// //                   <div className="task-date-box"><strong>Assigned Date:</strong>
// //                     <p>{task?.assignDate ? new Date(task.assignDate).toLocaleDateString() : "N/A"}</p>
// //                   </div>
// //                   <div className="task-date-box"><strong>Due Date:</strong>
// //                     <p>{task?.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</p>
// //                   </div>
// //                 </div>

// //                 {location.state?.isTeamTask ? (
// //                   <>
// //                     <div className="assigned-table-section">
// //                       <strong>Assigned To:</strong>
// //                       {renderTeamTable()}
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <div className="task-date-box">
// //                     <strong>Assigned To:</strong>
// //                     <p>{task?.assignTo?.join(", ") || "Unassigned"}</p>
// //                   </div>
// //                 )}

// //                 <div className="task-description-section">
// //                   <strong>Description:</strong>
// //                   <div className="task-description">
// //                     {task?.description?.split("\n").map((line, index) => (
// //                       <p key={index}>{line}</p>
// //                     )) || "No description provided"}
// //                   </div>
// //                 </div>

// //                 {!location.state?.isTeamTask && (
// //                   <div className="progress-section">
// //                     <label><strong>Progress:</strong></label>
// //                     <select
// //                       value={progress}
// //                       onChange={handleStatusChange}
// //                       disabled={loading}
// //                     >
// //                       <option value="Not Started">Not Started</option>
// //                       <option value="In Progress">In Progress</option>
// //                       <option value="Completed">Completed</option>
// //                     </select>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="error-banner">
// //             ⚠️ Task not found
// //             <button onClick={() => navigate("/employee/tasks")}>Back</button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskDetail;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./sidebar1";
// import Navbar from "./navbar1";
// import "../css/taskdetails.css";

// const TaskDetail = () => {
//   const [task, setTask] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [progress, setProgress] = useState("Not Started");
//   const [employeeProgress, setEmployeeProgress] = useState({});
//   const [employeeNames, setEmployeeNames] = useState({});
//   const { taskId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const statusMap = {
//     NOT_STARTED: "Not Started",
//     IN_PROGRESS: "In Progress",
//     COMPLETED: "Completed",
//     PENDING: "Pending"
//   };

//   const reverseStatusMap = {
//     "Not Started": "NOT_STARTED",
//     "In Progress": "IN_PROGRESS",
//     "Completed": "COMPLETED",
//     "Pending": "PENDING"
//   };

//   const fetchEmployeeNames = async (employeeIds) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         "http://localhost:8765/USERSERVICE/api/users/names",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ employeeIds }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch employee names");
//       }

//       return await response.json();
//     } catch (err) {
//       console.error("Error fetching employee names:", err);
//       // Return ID as name if fetch fails
//       const defaultNames = {};
//       employeeIds.forEach(id => {
//         defaultNames[id] = id;
//       });
//       return defaultNames;
//     }
//   };

//   useEffect(() => {
//     if (!taskId) {
//       navigate("/employee/tasks");
//       return;
//     }

//     const controller = new AbortController();
//     const { signal } = controller;

//     const fetchTaskDetails = async () => {
//       try {
//         setLoading(true);
//         const token = localStorage.getItem("token");
//         const isTeamTask = location.state?.isTeamTask || false;
//         const initialTask = location.state?.taskDetails;

//         if (initialTask) {
//           setTask(initialTask);
//           setProgress(statusMap[initialTask.status] || "Not Started");
          
//           const names = await fetchEmployeeNames(initialTask.assignTo || []);
//           setEmployeeNames(names);
          
//           // Initialize progress for team tasks
//           if (isTeamTask) {
//             const progressMap = {};
//             initialTask.assignTo?.forEach(emp => {
//               progressMap[emp] = statusMap[initialTask.status] || "Not Started";
//             });
//             setEmployeeProgress(progressMap);
//           }
//           return;
//         }

//         const endpoint = isTeamTask
//           ? `http://localhost:8765/TASKSERVICE/api/tasks/team/${taskId}`
//           : `http://localhost:8765/TASKSERVICE/api/tasks/individual/${taskId}`;

//         const response = await fetch(endpoint, {
//           headers: { Authorization: `Bearer ${token}` },
//           signal,
//         });

//         if (!response.ok) {
//           throw new Error(await response.text() || "Failed to fetch task");
//         }

//         const data = await response.json();
//         if (!data) throw new Error("Task not found");

//         setTask(data);
//         setProgress(statusMap[data.status] || "Not Started");
        
//         const names = await fetchEmployeeNames(data.assignTo || []);
//         setEmployeeNames(names);
        
//         // Initialize progress for team tasks
//         if (isTeamTask) {
//           const progressMap = {};
//           data.assignTo?.forEach(emp => {
//             progressMap[emp] = statusMap[data.status] || "Not Started";
//           });
//           setEmployeeProgress(progressMap);
//         }
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           setError(err.message);
//           setTask(null);
//         }
//       } finally {
//         if (!signal.aborted) setLoading(false);
//       }
//     };

//     fetchTaskDetails();
//     return () => controller.abort();
//   }, [taskId, navigate, location.state]);

//   const handleStatusChange = async (e) => {
//     const newStatus = reverseStatusMap[e.target.value];
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `http://localhost:8765/TASKSERVICE/api/tasks/${taskId}/status`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ status: newStatus }),
//         }
//       );

//       if (!response.ok) throw new Error("Failed to update status");

//       setProgress(e.target.value);
//       setTask(prev => ({ ...prev, status: newStatus }));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEmployeeProgressChange = async (employeeId, newProgress) => {
//     try {
//       setEmployeeProgress(prev => ({
//         ...prev,
//         [employeeId]: newProgress
//       }));

//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `http://localhost:8765/TASKSERVICE/api/tasks/${taskId}/employee/${employeeId}/status`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ status: reverseStatusMap[newProgress] }),
//         }
//       );

//       if (!response.ok) throw new Error("Failed to update employee progress");
//     } catch (err) {
//       setError(err.message);
//       setEmployeeProgress(prev => ({
//         ...prev,
//         [employeeId]: prev[employeeId]
//       }));
//     }
//   };

//   const renderTeamTaskTable = () => (
//     <table className="employee-progress-table">
//       <thead>
//         <tr>
//           <th>Employee Name</th>
//           <th>Progress</th>
//         </tr>
//       </thead>
//       <tbody>
//         {task?.assignTo?.map((employeeId, index) => (
//           <tr key={index}>
//             <td>{employeeNames[employeeId] || employeeId}</td>
//             <td>
//               <select
//                 value={employeeProgress[employeeId] || "Not Started"}
//                 onChange={(e) => handleEmployeeProgressChange(employeeId, e.target.value)}
//                 className={`status-select ${(employeeProgress[employeeId] || "")
//                   .toLowerCase()
//                   .replace(" ", "-")}`}
//               >
//                 <option value="Not Started">Not Started</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Pending">Pending</option>
//               </select>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   const renderIndividualTaskAssignees = () => (
//     <div className="individual-assignees">
//       {task?.assignTo?.map((employeeId, index) => (
//         <div key={index} className="assignee-name">
//           {employeeNames[employeeId] || employeeId}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="dashboard-container2 task-detail-page">
//       <div className="sidebar-with-welcome2"><Sidebar /></div>

//       <div className="main-content2">
//         <Navbar />

//         {loading ? (
//           <div className="loading-overlay">
//             <div className="loader"></div>
//             <p>Loading task details...</p>
//           </div>
//         ) : error ? (
//           <div className="error-banner">
//             ⚠️ Error: {error}
//             <button onClick={() => window.location.reload()}>Retry</button>
//             <button onClick={() => navigate("/employee/tasks")}>Back</button>
//           </div>
//         ) : task ? (
//           <div className="task-detail-container">
//             <div className="task-detail-header">
//               <h5>
//                 {location.state?.isTeamTask ? "Team Task Details" : "Individual Task Details"}
//                 <span className="task-type-badge">{location.state?.isTeamTask ? "Team" : "Individual"}</span>
//               </h5>
//             </div>

//             <div className="task-card">
//               <h2 className="task-title">{task?.task || "Untitled Task"}</h2>

//               <div className="task-info">
//                 <div className="task-dates-boxes">
//                   <div className="task-date-box">
//                     <strong>Assigned Date:</strong>
//                     <p>{task?.assignDate ? new Date(task.assignDate).toLocaleDateString() : "N/A"}</p>
//                   </div>
//                   <div className="task-date-box">
//                     <strong>Due Date:</strong>
//                     <p>{task?.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</p>
//                   </div>
//                 </div>

//                 <div className="assigned-section">
//                   <strong>Assigned To:</strong>
//                   {location.state?.isTeamTask ? (
//                     renderTeamTaskTable()
//                   ) : (
//                     renderIndividualTaskAssignees()
//                   )}
//                 </div>

//                 <div className="task-description-section">
//                   <strong>Description:</strong>
//                   <div className="task-description">
//                     {task?.description?.split("\n").map((line, index) => (
//                       <p key={index}>{line}</p>
//                     )) || "No description provided"}
//                   </div>
//                 </div>

//                 <div className="reminders-section">
//                   {task?.reminders?.length > 0 && (
//                     <>
//                       <strong>Reminders:</strong>
//                       <ul className="reminders-list">
//                         {task.reminders.map((reminder, index) => (
//                           <li key={index} className="reminder-item">
//                             ⚠️ {reminder}
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}
//                 </div>

//                 {!location.state?.isTeamTask && (
//                   <div className="progress-section">
//                     <label><strong>Progress:</strong></label>
//                     <select
//                       value={progress}
//                       onChange={handleStatusChange}
//                       disabled={loading}
//                     >
//                       <option value="Not Started">Not Started</option>
//                       <option value="In Progress">In Progress</option>
//                       <option value="Completed">Completed</option>
//                       <option value="Pending">Pending</option>
//                     </select>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="error-banner">
//             ⚠️ Task not found
//             <button onClick={() => navigate("/employee/tasks")}>Back</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskDetail;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/taskdetails.css";

const TaskDetail = () => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState("Not Started");
  const [employeeProgress, setEmployeeProgress] = useState({});
  const [employeeDetails, setEmployeeDetails] = useState({});
  const { taskId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const statusMap = {
    NOT_STARTED: "Not Started",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    PENDING: "Pending"
  };

  const reverseStatusMap = {
    "Not Started": "NOT_STARTED",
    "In Progress": "IN_PROGRESS",
    "Completed": "COMPLETED",
    "Pending": "PENDING"
  };

  const fetchEmployeeDetails = async (employeeIds) => {
    const details = {};
    const token = localStorage.getItem("token");
    
    if (!employeeIds || employeeIds.length === 0) return details;

    try {
      // Fetch all employee details in parallel
      const promises = employeeIds.map(async (id) => {
        try {
          const response = await fetch(`http://localhost:8765/EMSUSERMICROSERVICE/api/employee/by-employee-id/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            return { id, data };
          }
          return { id, data: null };
        } catch (err) {
          console.error(`Error fetching employee ${id}:`, err);
          return { id, data: null };
        }
      });

      const results = await Promise.all(promises);
      
      results.forEach(({ id, data }) => {
        details[id] = {
          name: data?.name || id,
          employeeTitle: data?.employeeTitle || "N/A",
          responsibility: data?.responsibility || "N/A"
        };
      });

    } catch (err) {
      console.error("Error fetching employee details:", err);
      // Fallback if there's a general error
      employeeIds.forEach(id => {
        details[id] = {
          name: id,
          employeeTitle: "N/A",
          responsibility: "N/A"
        };
      });
    }

    return details;
  };

  useEffect(() => {
    if (!taskId) {
      navigate("/employee/tasks");
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchTaskDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authentication token missing");
        }

        const isTeamTask = location.state?.isTeamTask || false;
        const initialTask = location.state?.taskDetails;

        // First fetch task details
        const endpoint = isTeamTask
          ? `http://localhost:8765/TASKSERVICE/api/tasks/team/${taskId}`
          : `http://localhost:8765/TASKSERVICE/api/tasks/individual/${taskId}`;

        const taskResponse = await fetch(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
          signal,
        });

        if (!taskResponse.ok) {
          throw new Error(await taskResponse.text() || "Failed to fetch task");
        }

        const taskData = await taskResponse.json();
        if (!taskData) throw new Error("Task not found");

        setTask(taskData);
        setProgress(statusMap[taskData.status] || "Not Started");

        // Then fetch employee details if there are assignees
        if (taskData.assignTo && taskData.assignTo.length > 0) {
          const details = await fetchEmployeeDetails(taskData.assignTo);
          setEmployeeDetails(details);

          if (isTeamTask) {
            const progressMap = {};
            taskData.assignTo.forEach(emp => {
              progressMap[emp] = statusMap[taskData.status] || "Not Started";
            });
            setEmployeeProgress(progressMap);
          }
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to load task details");
          setTask(null);
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchTaskDetails();
    return () => controller.abort();
  }, [taskId, navigate, location.state]);

  const handleStatusChange = async (e) => {
    const newStatus = reverseStatusMap[e.target.value];
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8765/TASKSERVICE/api/tasks/${taskId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) throw new Error("Failed to update status");

      setProgress(e.target.value);
      setTask(prev => ({ ...prev, status: newStatus }));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmployeeProgressChange = async (employeeId, newProgress) => {
    try {
      setEmployeeProgress(prev => ({
        ...prev,
        [employeeId]: newProgress
      }));

      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8765/TASKSERVICE/api/tasks/${taskId}/employee/${employeeId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: reverseStatusMap[newProgress] }),
        }
      );

      if (!response.ok) throw new Error("Failed to update employee progress");
    } catch (err) {
      setError(err.message);
      setEmployeeProgress(prev => ({
        ...prev,
        [employeeId]: prev[employeeId]
      }));
    }
  };

  const renderTeamTaskTable = () => (
    <table className="employee-progress-table">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Title</th>
          <th>Responsibility</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {task?.assignTo?.map((employeeId, index) => {
          const details = employeeDetails[employeeId] || {
            name: employeeId,
            employeeTitle: "N/A",
            responsibility: "N/A"
          };
          return (
            <tr key={index}>
              <td>{details.name}</td>
              <td>{details.employeeTitle}</td>
              <td>{details.responsibility}</td>
              <td>
                <select
                  value={employeeProgress[employeeId] || "Not Started"}
                  onChange={(e) => handleEmployeeProgressChange(employeeId, e.target.value)}
                  className={`status-select ${(employeeProgress[employeeId] || "")
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                </select>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  const renderIndividualTaskAssignees = () => (
    <div className="individual-assignees">
      {task?.assignTo?.map((employeeId, index) => {
        const details = employeeDetails[employeeId] || {
          name: employeeId,
          employeeTitle: "N/A",
          responsibility: "N/A"
        };
        return (
          <div key={index} className="assignee-name">
            {details.name}
            {details.employeeTitle !== "N/A" && (
              <span className="employee-title"> ({details.employeeTitle})</span>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="dashboard-container2 task-detail-page">
      <div className="sidebar-with-welcome2"><Sidebar /></div>

      <div className="main-content2">
        <Navbar />

        {loading ? (
          <div className="loading-overlay">
            <div className="loader"></div>
            <p>Loading task details...</p>
          </div>
        ) : error ? (
          <div className="error-banner">
            ⚠️ Error: {error}
            <button onClick={() => window.location.reload()}>Retry</button>
            <button onClick={() => navigate("/employee/tasks")}>Back</button>
          </div>
        ) : task ? (
          <div className="task-detail-container">
            <div className="task-detail-header">
              <h5>
                {location.state?.isTeamTask ? "Team Task Details" : "Individual Task Details"}
                <span className="task-type-badge">{location.state?.isTeamTask ? "Team" : "Individual"}</span>
              </h5>
            </div>

            <div className="task-card">
              <h2 className="task-title">{task?.task || "Untitled Task"}</h2>

              <div className="task-info">
                <div className="task-dates-boxes">
                  <div className="task-date-box">
                    <strong>Assigned Date:</strong>
                    <p>{task?.assignDate ? new Date(task.assignDate).toLocaleDateString() : "N/A"}</p>
                  </div>
                  <div className="task-date-box">
                    <strong>Due Date:</strong>
                    <p>{task?.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</p>
                  </div>
                </div>

                <div className="assigned-section">
                  <strong>Assigned To:</strong>
                  {location.state?.isTeamTask ? (
                    renderTeamTaskTable()
                  ) : (
                    renderIndividualTaskAssignees()
                  )}
                </div>

                <div className="task-description-section">
                  <strong>Description:</strong>
                  <div className="task-description">
                    {task?.description?.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    )) || "No description provided"}
                  </div>
                </div>

                {/* <div className="reminders-section">
                  {task?.reminders?.length > 0 && (
                    <>
                      <strong>Reminders:</strong>
                      <ul className="reminders-list">
                        {task.reminders.map((reminder, index) => (
                          <li key={index} className="reminder-item">
                            ⚠️ {reminder}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div> */}

                {!location.state?.isTeamTask && (
                  <div className="progress-section">
                    <label><strong>Progress:</strong></label>
                    <select
                      value={progress}
                      onChange={handleStatusChange}
                      disabled={loading}
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="error-banner">
            ⚠️ Task not found
            <button onClick={() => navigate("/employee/tasks")}>Back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetail;