// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import "../../Admin/css/Dashboard.css"; // Import the CSS file
// import { FaTasks,FaTicketAlt, FaUserFriends, FaUsers, FaBullhorn, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
// import { MdDashboard, MdDateRange } from "react-icons/md";
// import { IoMdPerson } from "react-icons/io";
// import Sidebar from "../js/Navbar"; // Import the Sidebar component
// import Navbar from "../js/Sidebar"; // Import the Navbar component
// import TaskCompletionGraph from "./Graph";


// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//     const [loadingTasks, setLoadingTasks] = useState(false);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [overdueTasks, setOverdueTasks] = useState([]);
//      const [view, setView] = useState("monthly");

//     const [showOverdueTasks, setShowOverdueTasks] = useState(true); // Set to true initially
//     const [showCompletedTasks, setShowCompletedTasks] = useState(false);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         setLoadingTasks(true);
//         const token = localStorage.getItem('token');
        
//         const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/single-assignee', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
        
//         if (!response.ok) {
//           if (response.status === 401) {
//             localStorage.removeItem('token');
//             navigate('/login');
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setTasks(data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       } finally {
//         setLoadingTasks(false);
//       }
//     };

//     const fetchCompletedTasks = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/completed', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
        
//         if (!response.ok) {
//           if (response.status === 401) {
//             localStorage.removeItem('token');
//             navigate('/login');
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setCompletedTasks(data);
//       } catch (error) {
//         console.error("Error fetching completed tasks:", error);
//       }
//     };

//     const fetchOverdueTasks = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/overdue', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
        
//         if (!response.ok) {
//           if (response.status === 401) {
//             localStorage.removeItem('token');
//             navigate('/login');
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setOverdueTasks(data);
//       } catch (error) {
//         console.error("Error fetching overdue tasks:", error);
//       }
//     };

   
//     fetchTasks();
//     fetchCompletedTasks();
//     fetchOverdueTasks();
//   }, [navigate]);
//   return (
//     <div className="dashboard-container5">
//       {/* Sidebar */}
//       <Sidebar />
      

//       {/* Main Content */}
//       <div className="main-content5">
//         {/* Navbar */}

//         <Navbar />
       

//         {/* Dashboard Content */}
//         <div className="content5" style={{marginTop:"-950px", marginLeft:'300px'}}>
//           <h1>Welcome, HR</h1>
//           <div className="cardss">
//   <div style={{width:'380px'}} className="card">
//     <FaUserPlus className="card-icon active" />
//     <p>Total Tasks Assigned</p>
//     <h3>{tasks.length}</h3>
//   </div>
//   <div style={{width:'380px'}} className="card">
//     <FaTasks className="card-icon leave" />
//     <p>Tasks in Progress</p>
//     <h3>{tasks.filter(task => task.status === 'IN_PROGRESS').length}</h3>
//   </div>
//   <div style={{width:'380px'}} className="card">
//     <FaTicketAlt className="card-icon joined" />
//     <p>Completed Tasks</p>
//     <h3>{tasks.filter(task => task.status === 'COMPLETED').length}</h3>
//   </div>
// </div>
//           <h4>Employee Task Completion Over Time</h4>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" , marginLeft:'20px' }}>
//   <div style={{ position: "relative", display: "flex", alignItems: "center", marginTop: "20px" }}>
//     {/* Icon inside the container */}
//     <MdDateRange
//       style={{
//         position: "absolute",
//         left: "10px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         color: "#555",
//         pointerEvents: "none", // Let clicks go to the select
//       }}
//     />
    
//     <select
//       value={view}
//       onChange={(e) => setView(e.target.value)}
//       style={{
//         padding: "6px 12px 6px 32px", // extra left padding for icon
//         width: "140px",
//         border: "1px solid #ccc",
//         borderRadius: "6px",
//         fontSize: "14px",
//         backgroundColor: "#f9f9f9",
//         cursor: "pointer",
//         appearance: "none",
//       }}
//     >
//       <option value="weekly">Weekly</option>
//       <option value="monthly">Monthly</option>
//       <option value="yearly">Yearly</option>
//     </select>
   
//   </div>
// </div>

// <div style={{marginLeft:'10px'}}>
// <TaskCompletionGraph />
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../Admin/css/Dashboard.css"; // Import the CSS file
import { FaTasks,FaTicketAlt, FaUserFriends, FaUsers, FaBullhorn, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { MdDashboard, MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import Sidebar from "../js/Navbar"; // Import the Sidebar component
import Navbar from "../js/Sidebar"; // Import the Navbar component
import TaskCompletionGraph from "./Graph";


const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(false);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
     const [view, setView] = useState("daily");

    const [showOverdueTasks, setShowOverdueTasks] = useState(true); // Set to true initially
    const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoadingTasks(true);
        const token = localStorage.getItem('token');
        
        const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/single-assignee', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoadingTasks(false);
      }
    };

    const fetchCompletedTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/completed', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCompletedTasks(data);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };

    const fetchOverdueTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/overdue', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setOverdueTasks(data);
      } catch (error) {
        console.error("Error fetching overdue tasks:", error);
      }
    };

   
    fetchTasks();
    fetchCompletedTasks();
    fetchOverdueTasks();
  }, [navigate]);
  return (
    <div className="dashboard-container5">
      {/* Sidebar */}
      <Sidebar />
      

      {/* Main Content */}
      <div className="main-content5">
        {/* Navbar */}

        <Navbar />
       

        {/* Dashboard Content */}
        <div className="content5" style={{marginTop:"-950px", marginLeft:'300px'}}>
          <h1>Welcome, HR</h1>
          <div style={{marginLeft:'100px'}} className="cardss">
  <div style={{width:'490px'}} className="card">
    <FaUserPlus  style={{width:'45px', height:'45px'}}  className="card-icon active" />
    <p>Total Tasks Assigned</p>
    <h3>{tasks.length}</h3>
  </div>
  <div style={{width:'490px'}} className="card">
    <FaTasks style={{width:'45px', height:'45px'}} className="card-icon leave" />
    <p>Tasks in Progress</p>
    <h3>{tasks.filter(task => task.status === 'IN_PROGRESS').length}</h3>
  </div>
  <div style={{width:'490px'}} className="card">
    <FaTicketAlt  style={{width:'45px', height:'45px'}}  className="card-icon joined" />
    <p>Completed Tasks</p>
    <h3>{tasks.filter(task => task.status === 'COMPLETED').length}</h3>
  </div>
</div>
          <h4>Employee Leave Over Time</h4>
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
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
    </select>
   
  </div>
</div>

<div style={{marginLeft:'10px'}}>
<TaskCompletionGraph view={view} />
</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;