
// // // // // // // import React from "react";

// // // // // // // import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// // // // // // // import Sidebar from "./sidebar1";
// // // // // // // import Navbar from "./navbar1";
// // // // // // // import "../css/task.css";

// // // // // // // const Task = () => {
// // // // // // //   return (
// // // // // // //     <div className="dashboard-container">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <div className="sidebar-with-welcome">
// // // // // // //         <Sidebar />
// // // // // // //       </div>

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className="main-content">
// // // // // // //         <Navbar />

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Task
// // // // // // import React from "react";
// // // // // // import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
// // // // // // import Sidebar from "./sidebar1";
// // // // // // import Navbar from "./navbar1";
// // // // // // import "../css/task.css";

// // // // // // const Task = () => {
// // // // // //   // Dummy task data
// // // // // //   const tasks = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       task: "Finish the client project proposal document",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       task: "Finish the client project proposal document",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       task: "Finish the client project proposal document",
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="dashboard-container">
// // // // // //       {/* Sidebar */}
// // // // // //       <div className="sidebar-with-welcome">
// // // // // //         <Sidebar />
// // // // // //       </div>

// // // // // //       {/* Main Content */}
// // // // // //       <div className="main-content">
// // // // // //         <Navbar />
        
// // // // // //         {/* Task List Section */}
// // // // // //         <div className="task-list-container">
// // // // // //           <h2>Task </h2>
         
// // // // // //           <table className="task-table">
// // // // // //             {/* <thead>
// // // // // //               <tr style={{ backgroundColor: '#476775' }}>
// // // // // //                 <th></th>
// // // // // //                 <th>Task</th>
// // // // // //                 <th>Action</th>
// // // // // //               </tr>
// // // // // //             </thead> */}
// // // // // //             <thead>
// // // // // //   <tr>
// // // // // //     <th style={{ backgroundColor: '#476775', color: 'white' }}></th>
// // // // // //     <th style={{ backgroundColor: '#476775', color: 'white' }}>Task</th>
// // // // // //     <th style={{ backgroundColor: '#476775', color: 'white' }}>Action</th>
// // // // // //   </tr>
// // // // // // </thead>

// // // // // //             <tbody>
// // // // // //               {tasks.map((task) => (
// // // // // //                 <tr key={task.id}>
// // // // // //                  <td>{task.id}</td>
// // // // // //                   <td>{task.task}</td>
                 
// // // // // //                   <td>
// // // // // //                     <button 
// // // // // //                       className="view-button"
// // // // // //                       onClick={() => alert(`Viewing task: ${task.title}`)}
// // // // // //                     >
// // // // // //                       View
// // // // // //                     </button>
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Task;
// // // // // import React from "react";
// // // // // import Sidebar from "./sidebar1";
// // // // // import Navbar from "./navbar1";
// // // // // import "../css/task.css";

// // // // // const Task = () => {
// // // // //   // Dummy task data
// // // // //   const newTasks = [
// // // // //     { id: 1, task: "Add Dark Mode Feature in the company's website" },
// // // // //     { id: 2, task: "Add Dark Mode Feature in the company's website" },
// // // // //     { id: 3, task: "Add Dark Mode Feature in the company's website" }
// // // // //   ];

// // // // //   const teamTasks = [
// // // // //     { id: 1, task: "Rebuild Company Dashboard" },
// // // // //     { id: 2, task: "Add Dark Mode Feature in the company's website" },
// // // // //     { id: 4, task: "Add Dark Mode Feature in the company's website" },
// // // // //     { id: 5, task: "Add Dark Mode Feature in the company's website" },
// // // // //     { id: 6, task: "Add Dark Mode Feature in the company's website" }
// // // // //   ];

// // // // //   return (
// // // // //     <div className="dashboard-container">
// // // // //       <div className="sidebar-with-welcome">
// // // // //         <Sidebar />
// // // // //       </div>

// // // // //       <div className="main-content">
// // // // //         <Navbar />
        
// // // // //         <div className="split-layout">
// // // // //           {/* Left side (75%) - Tasks Tables */}
// // // // //           <div className="tasks-side">
// // // // //             <div className="task-section">
// // // // //               <h2>New Task</h2>
// // // // //               <table className="task-table">
// // // // //                 <thead>
// // // // //                   <tr>
// // // // //                     <th>ID</th>
// // // // //                     <th>Task</th>
// // // // //                     <th>Action</th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   {newTasks.map(task => (
// // // // //                     <tr key={task.id}>
// // // // //                       <td>{task.id}</td>
// // // // //                       <td>{task.task}</td>
// // // // //                       <td><button className="view-button">View</button></td>
// // // // //                     </tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>

// // // // //             <div className="task-section">
// // // // //               <h2>Team Task</h2>
// // // // //               <table className="task-table">
// // // // //                 <thead>
// // // // //                   <tr>
// // // // //                     <th>ID</th>
// // // // //                     <th>Task</th>
// // // // //                     <th>Action</th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   {teamTasks.map(task => (
// // // // //                     <tr key={task.id}>
// // // // //                       <td>{task.id}</td>
// // // // //                       <td>{task.task}</td>
// // // // //                       <td><button className="view-button">View</button></td>
// // // // //                     </tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right side (25%) - Reminder Card */}
// // // // //           <div className="reminder-side">
// // // // //             <div className="reminder-card">
// // // // //               <h3>Reminder</h3>
// // // // //               <div className="reminder-text">
// // // // //                 <p>Just a quick heads-up! The deadline for our Website Design Task is approaching. The due date is in 2 days (on [Due Date]). Please ensure all necessary updates and final touches are completed on time.</p>
// // // // //                 <p>Just a quick heads-up! The deadline for our Website Design Task is approaching. The due date is in 2 days (on [Due Date]). Please ensure all necessary updates and final touches are completed on time.</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Task;

// // import React, { useState, useEffect } from "react";
// // import Sidebar from "./sidebar1";
// // import Navbar from "./navbar1";
// // import "../css/task.css";
// // import { useNavigate } from 'react-router-dom';


// // const Task = () => {
// //   const [individualTasks, setIndividualTasks] = useState([]);
// //   const [teamTasks, setTeamTasks] = useState([]);
// //   const [reminders, setReminders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// // const navigate = useNavigate();

// //   // Consolidated user data retrieval
// //   const userData = JSON.parse(localStorage.getItem("userData"));
// //   const userId = userData?.userId || localStorage.getItem("userId");
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         // Validate credentials
// //         if (!userId || !token) {
// //           throw new Error("Authentication credentials missing");
// //         }

// //         // Correct API endpoints
// //         const endpoints = [
// //           `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/individual`,
// //           `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/team`,
// //           `http://localhost:8765/TASKSERVICE/api/tasks/reminders/${userId}`
// //         ];

// //         const responses = await Promise.all(
// //           endpoints.map(async (url) => {
// //             const response = await fetch(url, {
// //               headers: { Authorization: `Bearer ${token}` }
// //             });

// //             if (!response.ok) {
// //               const text = await response.text();
// //               throw new Error(`HTTP error! Status: ${response.status} - ${text}`);
// //             }

// //             const contentType = response.headers.get("content-type");
// //             if (!contentType || !contentType.includes("application/json")) {
// //               throw new Error("Invalid response format");
// //             }

// //             return response.json();
// //           })
// //         );

// //         // Process responses
// //         const [individualData, teamData, remindersData] = responses;

// //         setIndividualTasks(individualData || []);
// //         setTeamTasks(teamData || []);
        
// //         // Handle different reminder response structures
// //         const processedReminders = remindersData.reminders || 
// //                                  remindersData.your_overdue_reminders?.concat(
// //                                    remindersData.your_upcoming_reminders
// //                                  ) || 
// //                                  [];
// //         setReminders(processedReminders);

// //       } catch (error) {
// //         console.error("Fetch error:", error);
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchTasks();
// //   }, [userId, token]);

// //   const handleCloseReminder = (index) => {
// //     setReminders(prev => prev.filter((_, i) => i !== index));
// //   };

// // //   const renderTaskTable = (tasks) => (
// // //     <table className="task-table">
// // //       <thead>
// // //         <tr>
         
// // //           <th>New Task</th>
// // //            <th></th>
// // //           {/* <th></th> */}
// // //           <th></th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //   {individualTasks.map((task, index) => (
// // //     <tr key={task.id} className="task-row">
// // //       <td className="serial-number">{index + 1}</td>
// // //       <td className="task-description">{task.task}</td>
// // //       <td className="task-action">
// // //         <button className="view-button">View</button>
// // //       </td>
// // //     </tr>
// // //   ))}
// // // </tbody>
// // //     </table>
// // //   );
// // const renderTaskTable = (tasks, type) => (
// //   <div className="table-container">
// //     <table className="task-table">
// //       <thead>
// //         <tr>
// //           <th>New Tasks</th>
// //           <th></th>
// //           <th></th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {tasks.map((task, index) => (
// //           <tr key={`${type}-${task.id}`}>
// //             <td className="serial-number">{index + 1}</td>
// //             <td className="task-description">{task.task}</td>
// //             {/* <td>
// //               <button 
// //                 className="view-button"
// //                 onClick={() => navigate(`/employee/taskdetails/${task.id}`)}
// //               >
// //                 View
// //               </button>
// //             </td> */}
      
// //             <td>
// //               <button 
// //                 className="view-button"
// //                 onClick={() => navigate(`/employee/tasks/${task.id}`)}
// //               >
// //                 View
// //               </button>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //     {tasks.length === 0 && !loading && (
// //       <div className="no-tasks">No {type} tasks found</div>
// //     )}
// //   </div>
// // );

// //   return (
// //     <div className="dashboard-container">
// //       {loading && (
// //         <div className="loading-overlay">
// //           <div className="loader"></div>
// //           <p>Loading tasks...</p>
// //         </div>
// //       )}

// //       <div className="sidebar-with-welcome">
// //         <Sidebar />
// //       </div>

// //       <div className="main-content">
// //         <Navbar />
        
// //         {error && (
// //           <div className="error-banner">
// //             ⚠️ Error: {error}
// //             <button onClick={() => window.location.reload()}>Retry</button>
// //           </div>
// //         )}

// //         <div className="split-layout">
// //           <div className="tasks-side">
// //             <div className="task-section new-tasks">
// //               <h2 className="section-title">Individual Tasks</h2>
// //               {individualTasks.length > 0 ? (
// //                 renderTaskTable(individualTasks)
// //               ) : (
// //                 <div className="no-tasks">No individual tasks found</div>
// //               )}
// //             </div>

// //             <div className="vertical-spacer"></div>

// //             <div className="task-section team-tasks">
// //               <h2 className="section-title">Team Tasks</h2>
// //               {teamTasks.length > 0 ? (
// //                 renderTaskTable(teamTasks)
// //               ) : (
// //                 <div className="no-tasks">No team tasks found</div>
// //               )}
// //             </div>
// //           </div>

// //           <div className="reminder-container">
// //             <h3 className="reminder-title">Reminders</h3>
// //             {reminders.length === 0 ? (
// //               <div className="no-reminders">No current reminders</div>
// //             ) : (
// //               reminders.map((reminder, index) => (
// //                 <div key={index} className="reminder-card">
// //                   <div className="card-header">
// //                     <div className="bell-icon">
// //                       <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFD700">
// //                         <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z"/>
// //                       </svg>
// //                     </div>
// //                     <button 
// //                       className="close-btn"
// //                       onClick={() => handleCloseReminder(index)}
// //                       aria-label="Close reminder"
// //                     >
// //                       <svg viewBox="0 0 24 24" width="18" height="18">
// //                         <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
// //                       </svg>
// //                     </button>
// //                   </div>
// //                   <div className="card-content">
// //                     <p>{typeof reminder === 'object' ? reminder.message : reminder}</p>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Task;
// import React, { useState, useEffect } from "react";
// import Sidebar from "./sidebar1";
// import Navbar from "./navbar1";
// import "../css/task.css";
// import { useNavigate } from 'react-router-dom';

// const Task = () => {
//   const [individualTasks, setIndividualTasks] = useState([]);
//   const [teamTasks, setTeamTasks] = useState([]);
//   const [reminders, setReminders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Consolidated user data retrieval
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const userId = userData?.userId || localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Validate credentials
//         if (!userId || !token) {
//           throw new Error("Authentication credentials missing");
//         }

//         // Correct API endpoints
//         const endpoints = [
//           `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/individual`,
//           `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/team`,
//           `http://localhost:8765/TASKSERVICE/api/tasks/reminders/${userId}`
//         ];

//         const responses = await Promise.all(
//           endpoints.map(async (url) => {
//             const response = await fetch(url, {
//               headers: { Authorization: `Bearer ${token}` }
//             });

//             if (!response.ok) {
//               const text = await response.text();
//               throw new Error(`HTTP error! Status: ${response.status} - ${text}`);
//             }

//             const contentType = response.headers.get("content-type");
//             if (!contentType || !contentType.includes("application/json")) {
//               throw new Error("Invalid response format");
//             }

//             return response.json();
//           })
//         );

//         // Process responses
//         const [individualData, teamData, remindersData] = responses;

//         // Ensure we have arrays even if the response is empty or null
//         setIndividualTasks(Array.isArray(individualData) ? individualData : []);
//         setTeamTasks(Array.isArray(teamData) ? teamData : []);
        
//         // Handle different reminder response structures
//         const processedReminders = remindersData.reminders || 
//                                  (remindersData.your_overdue_reminders || []).concat(
//                                    remindersData.your_upcoming_reminders || []
//                                  ) || 
//                                  [];
//         setReminders(Array.isArray(processedReminders) ? processedReminders : []);

//       } catch (error) {
//         console.error("Fetch error:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [userId, token]);

//   const handleCloseReminder = (index) => {
//     setReminders(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleViewTask = (taskId, isTeamTask = false) => {
//     // Navigate to task details page with the task ID and type
//     navigate(`/employee/taskdetails/${taskId}`, {
//       state: { isTeamTask }
//     });
//   };

//   const renderTaskTable = (tasks, type) => (
//     <div className="table-container">
//       <table className="task-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Task Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={`${type}-${task.id}`} className="task-row">
//               <td className="serial-number">{index + 1}</td>
//               <td className="task-description">
//                 {task.task || task.description || "No description available"}
//               </td>
//               <td>
//                 <button 
//                   className="view-button"
//                   onClick={() => handleViewTask(task.id, type === 'team')}
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {tasks.length === 0 && !loading && (
//         <div className="no-tasks">No {type} tasks found</div>
//       )}
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       {loading && (
//         <div className="loading-overlay">
//           <div className="loader"></div>
//           <p>Loading tasks...</p>
//         </div>
//       )}

//       <div className="sidebar-with-welcome">
//         <Sidebar />
//       </div>

//       <div className="main-content">
//         <Navbar />
        
//         {error && (
//           <div className="error-banner">
//             ⚠️ Error: {error}
//             <button onClick={() => window.location.reload()}>Retry</button>
//           </div>
//         )}

//         <div className="split-layout">
//           <div className="tasks-side">
//             <div className="task-section new-tasks">
//               <h2 className="section-title">Individual Tasks</h2>
//               {renderTaskTable(individualTasks, 'individual')}
//             </div>

//             <div className="vertical-spacer"></div>

//             <div className="task-section team-tasks">
//               <h2 className="section-title">Team Tasks</h2>
//               {renderTaskTable(teamTasks, 'team')}
//             </div>
//           </div>

//           <div className="reminder-container">
//             <h3 className="reminder-title">Reminders</h3>
//             {reminders.length === 0 ? (
//               <div className="no-reminders">No current reminders</div>
//             ) : (
//               reminders.map((reminder, index) => (
//                 <div key={index} className="reminder-card">
//                   <div className="card-header">
//                     <div className="bell-icon">
//                       <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFD700">
//                         <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z"/>
//                       </svg>
//                     </div>
//                     <button 
//                       className="close-btn"
//                       onClick={() => handleCloseReminder(index)}
//                       aria-label="Close reminder"
//                     >
//                       <svg viewBox="0 0 24 24" width="18" height="18">
//                         <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="card-content">
//                     <p>{typeof reminder === 'object' ? 
//                       (reminder.message || reminder.description || "No reminder text") : 
//                       reminder}</p>
//                     {typeof reminder === 'object' && reminder.dueDate && (
//                       <p className="reminder-date">
//                         Due: {new Date(reminder.dueDate).toLocaleString()}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Task;
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/task.css";
import { useNavigate } from 'react-router-dom';

const Task = () => {
  const [individualTasks, setIndividualTasks] = useState([]);
  const [teamTasks, setTeamTasks] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Consolidated user data retrieval
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData?.userId || localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!userId || !token) {
          throw new Error("Authentication credentials missing");
        }

        const endpoints = [
          `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/individual`,
          `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/team`,
          `http://localhost:8765/TASKSERVICE/api/tasks/reminders/${userId}`
        ];

        const responses = await Promise.all(
          endpoints.map(async (url) => {
            const response = await fetch(url, {
              headers: { Authorization: `Bearer ${token}` }
            });

            if (!response.ok) {
              const text = await response.text();
              throw new Error(`HTTP error! Status: ${response.status} - ${text}`);
            }

            const contentType = response.headers.get("content-type");
            return contentType?.includes("application/json") ? response.json() : null;
          })
        );

        const [individualData, teamData, remindersData] = responses;

        setIndividualTasks(Array.isArray(individualData) ? individualData : []);
        setTeamTasks(Array.isArray(teamData) ? teamData : []);
        
        const processedReminders = remindersData?.your_overdue_reminders?.concat(
          remindersData?.your_upcoming_reminders || []
        ) || [];
        setReminders(processedReminders.filter(r => r));

      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [userId, token]);

  const handleCloseReminder = (index) => {
    setReminders(prev => prev.filter((_, i) => i !== index));
  };

 const handleViewTask = (taskId, isTeamTask) => {
  // Just navigate without taskDetails - your TaskDetail component will fetch it
  navigate(`/employee/taskdetails/${taskId}`, {
    state: { 
      isTeamTask
      // Don't pass taskDetails - let the detail page fetch fresh data
    }
  });
};
  const renderTaskTable = (tasks, isTeam) => (
    <div className="table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={`${isTeam ? 'team' : 'ind'}-${task.id}`} className="task-row">
              <td className="serial-number">{index + 1}</td>
              <td className="task-description">
                {task.task || task.description || "No description available"}
              </td>
              <td className="task-status">
                <span className={`status-badge ${task.status?.toLowerCase()}`}>
                  {task.status || 'N/A'}
                </span>
              </td>
              <td>
                <button 
                  className="view-button"
                  onClick={() => handleViewTask(task.id, isTeam)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tasks.length === 0 && !loading && (
        <div className="no-tasks">No {isTeam ? 'team' : 'individual'} tasks found</div>
      )}
    </div>
  );

  return (
    <div className="dashboard-container">
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
          <p>Loading tasks...</p>
        </div>
      )}

      <div className="sidebar-with-welcome">
        <Sidebar />
      </div>

      <div className="main-content">
        <Navbar />
        
        {error && (
          <div className="error-banner">
            ⚠️ Error: {error}
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        <div className="split-layout">
          <div className="tasks-side">
            <div className="task-section new-tasks">
              <h2 className="section-title">Individual Tasks</h2>
              {renderTaskTable(individualTasks, false)}
            </div>

            <div className="vertical-spacer"></div>

            <div className="task-section team-tasks">
              <h2 className="section-title">Team Tasks</h2>
              {renderTaskTable(teamTasks, true)}
            </div>
          </div>

          <div className="reminder-container">
            <h3 className="reminder-title">Reminders</h3>
            <div className="reminders-scroll">
              {reminders.length === 0 ? (
                <div className="no-reminders">No current reminders</div>
              ) : (
                reminders.map((reminder, index) => (
                  <div key={index} className="reminder-card">
                    <div className="card-header">
                      <div className="bell-icon">🔔</div>
                      <button 
                        className="close-btn"
                        onClick={() => handleCloseReminder(index)}
                      >
                        ×
                      </button>
                    </div>
                    <div className="card-content">
                      <p>{reminder.message || reminder}</p>
                      {reminder.dueDate && (
                        <div className="reminder-date">
                          Due: {new Date(reminder.dueDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;