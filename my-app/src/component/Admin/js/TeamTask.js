// import React, { useState } from 'react';
// import { Pencil, Trash } from 'lucide-react';

// const TeamTask = () => {
//   const registeredEmployees = [
//     { id: 'EMP001', name: 'Sangay Choden' },
//     { id: 'EMP002', name: 'Tshering Penjor' },
//     { id: 'EMP003', name: 'Sonam Gyeltshen' },
//     { id: 'EMP004', name: 'Chime Dorji' },
//   ];

//   const [showEmployeeList, setShowEmployeeList] = useState(false);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);

//   const handleSelectEmployee = (employee) => {
//     if (!selectedEmployees.find((emp) => emp.id === employee.id)) {
//       setSelectedEmployees([...selectedEmployees, { ...employee, taskDescription: '', startDate: '', dueDate: '', status: 'In Progress' }]);
//     }
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedEmployees = [...selectedEmployees];
//     updatedEmployees[index][field] = value;
//     setSelectedEmployees(updatedEmployees);
//   };

//   const handleDeleteEmployee = (id) => {
//     setSelectedEmployees(selectedEmployees.filter(emp => emp.id !== id));
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//       <h2>Bulk Assign Tasks</h2>
//       <button
//         onClick={() => setShowEmployeeList(!showEmployeeList)}
//         style={{ margin: '10px 0', padding: '10px 20px', backgroundColor: '#1f4e5f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
//       >
//         Select Employee
//       </button>

//       {showEmployeeList && (
//         <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
//           {registeredEmployees.map((employee, idx) => (
//             <div key={employee.id} style={{ display: 'inline-block', width: '30%', margin: '5px 0' }}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleSelectEmployee(employee)}
//                 checked={!!selectedEmployees.find(emp => emp.id === employee.id)}
//               />{' '}
//               {idx + 1}. {employee.name}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Table */}
//       <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflowX: 'auto' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               {['Employee ID', 'Name', 'Task Description', 'Start Date', 'Due Date', 'Status', 'Actions'].map(header => (
//                 <th key={header} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {selectedEmployees.map((employee, index) => (
//               <tr key={employee.id}>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.id}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   <input
//                     type="text"
//                     value={employee.taskDescription}
//                     onChange={(e) => handleInputChange(index, 'taskDescription', e.target.value)}
//                     style={{ width: '100%' }}
//                   />
//                 </td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   <input
//                     type="date"
//                     value={employee.startDate}
//                     onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
//                     style={{ width: '100%' }}
//                   />
//                 </td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   <input
//                     type="date"
//                     value={employee.dueDate}
//                     onChange={(e) => handleInputChange(index, 'dueDate', e.target.value)}
//                     style={{ width: '100%' }}
//                   />
//                 </td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   <input
//                     type="text"
//                     value={employee.status}
//                     onChange={(e) => handleInputChange(index, 'status', e.target.value)}
//                     style={{ width: '100%' }}
//                   />
//                 </td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   <Pencil size={16} style={{ cursor: 'pointer', marginRight: '8px' }} />
//                   <Trash size={16} style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleDeleteEmployee(employee.id)} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <button
//         style={{ marginTop: '20px', padding: '10px 30px', backgroundColor: '#d0e7e5', color: 'black', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
//       >
//         Done
//       </button>
//     </div>
//   );
// };

// export default TeamTask;



// import React ,{useState}from "react";
// import { useNavigate } from 'react-router-dom';
// import { Pencil, Trash } from 'lucide-react';

// import "../css/Task.css"; // Import the CSS file
// import { FaTasks, FaTicketAlt,  FaUserPlus,  FaEdit, FaTrash } from "react-icons/fa";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// const TeamTask = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [errors, setErrors] = useState({});
// // const [taskDetails, setTaskDetails] = useState({
// //   task: "",
// //   assignedTo: "",
// //   assignDate: "",
// //   dueDate: "",
// //   description: "",
// //   status: "In Progress", // default status
// // });

// // Validation function
// // const validateForm = () => {
// //   let formErrors = {};
// //   if (!taskDetails.task.trim()) formErrors.task = "Task is required";
// //   if (!taskDetails.assignedTo.trim()) formErrors.assignedTo = "Assigned To is required";
// //   if (!taskDetails.assignDate.trim()) formErrors.assignDate = "Assign Date is required";
// //   if (!taskDetails.dueDate.trim()) formErrors.dueDate = "Due Date is required";
// //   if (!taskDetails.description.trim()) formErrors.description = "Description is required";
// //   return formErrors;
// // };

// // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

// //   const employees = ["Karma Dorji", "Pema Wangchuk", "Sonam Choden", "Tashi Dema"];

//   // const handleInputChange = (e) => {
//   //   setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
//   // };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTaskDetails({ ...taskDetails, [name]: value });
//     setErrors({ ...errors, [name]: "" }); // Clear error on change
//   };

//   // const handleSubmit = () => {
//   //   console.log("Task Assigned:", taskDetails);
//   //   setIsModalOpen(false);
//   // };
//   const handleSubmit = () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//   }
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//   <Sidebar />

//       {/* Main Content */}
//       <div className="main-content" >
//         {/* Navbar */}

//       <div style={{marginLeft:'22px'}}> 
//  <Navbar />
//  </div> 
//         {/* Dashboard Content */}
//         <div className="content " style={{marginTop:'-600px', overflowX:'hidden'}}>
//           <h2>Welcome, HR</h2>
//           <div className="cards">
//             <div className="card">
//               <FaUserPlus className="card-icon active" />
//               <p>Total Tasks Assigned</p>
//               <h3>15</h3>
//             </div>
//             <div className="card">
//               <FaTasks className="card-icon leave" />
//               <p>Tasks in Progress</p>
//               <h3>5</h3>
//             </div>
//             <div className="card">
//               <FaTicketAlt className="card-icon joined" />
//               <p>Completed Tasks</p>
//               <h3>10</h3>
//             </div>
//           </div>
//           <h6>Task</h6>

//           <div className="taskbutton">
//           <button className="task-btn"> Individual Task</button>
//           <button className="task-btn" onClick={() => navigate('/teamtask')}> Team Tasks</button>
//           </div>

//          {/* Assign Task Button */}
//          <button className="assign-task-btn" onClick={() => setIsModalOpen(true)}>  <FaEdit className="assign-icon" /> Assign Task</button>

//          {/* Modal */}
//          <div className="modal-overlay">
//       <div className="modal-content">

//         {/* Modal Header */}
//         <div className="modal-header">
//           <h2>Bulk Assign Tasks</h2>
//           <button className="close-btn" onClick={onClose}>×</button>
//         </div>

//         {/* Content */}
//         <div style={{ padding: '10px 0', fontFamily: 'sans-serif' }}>

//           <button
//             onClick={() => setShowEmployeeList(!showEmployeeList)}
//             style={{
//               margin: '10px 0',
//               padding: '10px 20px',
//               backgroundColor: '#1f4e5f',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer'
//             }}
//           >
//             Select Employee
//           </button>

//           {showEmployeeList && (
//             <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
//               {registeredEmployees.map((employee, idx) => (
//                 <div key={employee.id} style={{ display: 'inline-block', width: '30%', margin: '5px 0' }}>
//                   <input
//                     type="checkbox"
//                     onChange={() => handleSelectEmployee(employee)}
//                     checked={!!selectedEmployees.find(emp => emp.id === employee.id)}
//                   />{' '}
//                   {idx + 1}. {employee.name}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Table */}
//           <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflowX: 'auto' }}>
//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//               <thead>
//                 <tr>
//                   {['Employee ID', 'Name', 'Task Description', 'Start Date', 'Due Date', 'Status', 'Actions'].map(header => (
//                     <th key={header} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedEmployees.map((employee, index) => (
//                   <tr key={employee.id}>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.id}</td>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                       <input
//                         type="text"
//                         value={employee.taskDescription}
//                         onChange={(e) => handleInputChange(index, 'taskDescription', e.target.value)}
//                         style={{ width: '100%' }}
//                       />
//                     </td>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                       <input
//                         type="date"
//                         value={employee.startDate}
//                         onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
//                         style={{ width: '100%' }}
//                       />
//                     </td>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                       <input
//                         type="date"
//                         value={employee.dueDate}
//                         onChange={(e) => handleInputChange(index, 'dueDate', e.target.value)}
//                         style={{ width: '100%' }}
//                       />
//                     </td>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                       <input
//                         type="text"
//                         value={employee.status}
//                         onChange={(e) => handleInputChange(index, 'status', e.target.value)}
//                         style={{ width: '100%' }}
//                       />
//                     </td>
//                     <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                       <Pencil size={16} style={{ cursor: 'pointer', marginRight: '8px' }} />
//                       <Trash size={16} style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleDeleteEmployee(employee.id)} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <button
//             style={{
//               marginTop: '20px',
//               padding: '10px 30px',
//               backgroundColor: '#d0e7e5',
//               color: 'black',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer'
//             }}
//           >
//             Done
//           </button>

//         </div>

//       </div>
//     </div>








// {/* Task Table */}
// <div className="task-table">
//   <table>
//     <thead>
//       <tr>
//         <th>Task</th>
//         <th>Assigned to</th>
//         <th>Assign Date</th>
//         <th>Due Date</th>
//         <th>Status</th>
//         <th>Details</th>
//         <th>Actions</th>

//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="in-progress">In Progress</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="in-progress">In Progress</td>
//         <td>...</td>

//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="in-progress">In Progress</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="in-progress">In Progress</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>

// <div className="OCbutton">
//           <button className="overdue-btn"> Overdue Tasks</button>
//           <button className="task-btn"> Completed Tasks</button>
//           </div>


// {/* Task Table */}
// <div className="task-table">
//   <table>
//     <thead>
//       <tr>
//         <th>Task</th>
//         <th>Assigned to</th>
//         <th>Assign Date</th>
//         <th>Due Date</th>
//         <th>Status</th>
//         <th>Details</th>
//         <th>Actions</th>

//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="overdue">Overdue</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="overdue">Overdue</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="overdue">Overdue</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//       <tr>
//         <td>Add Dark Mode Feature in the company’s website</td>
//         <td>Karma Dorji</td>
//         <td>March 12</td>
//         <td>March 13</td>
//         <td className="overdue">Overdue</td>
//         <td>...</td>
//         <td>
//           <FaEdit className="edit-icon" /> <FaTrash className="delete-icon" />
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>

// </div>
// </div>
// </div>
// );
// };

// export default TeamTask;

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTasks, FaTicketAlt,  FaUserPlus,  FaEdit, FaTrash } from "react-icons/fa";
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Pencil, Trash } from 'lucide-react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../css/Task.css"; // Import the CSS file

const TeamTask = () => {
  const navigate = useNavigate();

  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const registeredEmployees = [
    { id: 'EMP001', name: 'Karma Dorji' },
    { id: 'EMP002', name: 'Pema Wangchuk' },
    { id: 'EMP003', name: 'Sonam Choden' },
    { id: 'EMP004', name: 'Tashi Dema' },
    { id: 'EMP005', name: 'Karma Dorji' },
    { id: 'EMP006', name: 'Pema Wangchuk' },
    { id: 'EMP007', name: 'Sonam Choden' },
    { id: 'EMP008', name: 'Tashi Dema' },
  ];

  // Toggle select employee
  const handleSelectEmployee = (employee) => {
    const isSelected = selectedEmployees.some(emp => emp.id === employee.id);
    if (isSelected) {
      setSelectedEmployees(selectedEmployees.filter(emp => emp.id !== employee.id));
    } else {
      setSelectedEmployees([...selectedEmployees, employee]);
    }
  };

  const handleTaskDescriptionChange = (employeeId, value) => {
    setSelectedEmployees(prev =>
      prev.map(emp => emp.id === employeeId ? { ...emp, taskDescription: value } : emp)
    );
  };
  
  const handleStartDateChange = (employeeId, value) => {
    setSelectedEmployees(prev =>
      prev.map(emp => emp.id === employeeId ? { ...emp, startDate: value } : emp)
    );
  };
  
  const handleDueDateChange = (employeeId, value) => {
    setSelectedEmployees(prev =>
      prev.map(emp => emp.id === employeeId ? { ...emp, dueDate: value } : emp)
    );
  };
  
  const handleEdit = (employeeId) => {
    // Optional: you can show a toast or visual indicator for saving changes
    console.log(`Editing employee ${employeeId}`);
  };
  
  const handleDelete = (employeeId) => {
    setSelectedEmployees(prev => prev.filter(emp => emp.id !== employeeId));
  };


  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setShowEmployeeList(false);
    setSelectedEmployees([]);
  };


const [errors, setErrors] = useState({});
const [taskDetails, setTaskDetails] = useState({
  task: "",
  assignedTo: "",
  assignDate: "",
  dueDate: "",
  description: "",
  status: "In Progress", // default status
});

// Validation function
const validateForm = () => {
    let formErrors = {};
    if (!taskDetails.task.trim()) formErrors.task = "Task is required";
    if (!taskDetails.assignedTo.trim()) formErrors.assignedTo = "Assigned To is required";
    if (!taskDetails.assignDate.trim()) formErrors.assignDate = "Assign Date is required";
    if (!taskDetails.dueDate.trim()) formErrors.dueDate = "Due Date is required";
    if (!taskDetails.description.trim()) formErrors.description = "Description is required";
    return formErrors;
  };
  // Add this below your existing validateForm
  const validateEditForm = () => {
    let formErrors = {};
    if (!editTaskDetails.task.trim()) formErrors.task = "Task is required";
    if (!editTaskDetails.assignedTo.trim()) formErrors.assignedTo = "Assigned To is required";
    if (!editTaskDetails.assignDate.trim()) formErrors.assignDate = "Assign Date is required";
    if (!editTaskDetails.dueDate.trim()) formErrors.dueDate = "Due Date is required";
    if (!editTaskDetails.description.trim()) formErrors.description = "Description is required";
    return formErrors;
  };
  
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const employees = ["Karma Dorji", "Pema Wangchuk", "Sonam Choden", "Tashi Dema"];
  
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setTaskDetails({ ...taskDetails, [name]: value });
      setErrors({ ...errors, [name]: "" }); // Clear error on change
    };
  
    const handleSubmit = () => {
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }
  
      console.log("Task Assigned:", taskDetails);
      setShowSuccessMessage(true);
      setErrors({});
  
      // Reset form
      setTaskDetails({
        task: "",
        assignedTo: "",
        assignDate: "",
        dueDate: "",
        description: "",
        status: "In Progress",
      });
  
      // Auto-close modal after success message
      setTimeout(() => {
        setIsModalOpen(false);
        setShowSuccessMessage(false);
      }, 1500);
    };
  
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTaskDetails, setEditTaskDetails] = useState({
    task: "",
    assignedTo: "",
    assignDate: "",
    dueDate: "",
    description: "",
    status: "In Progress",
  });
  
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" }); // clear error on change
  };
  
  
  const handleEditSubmit = () => {
    const formErrors = validateEditForm(); // Use edit form validation here
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    console.log("Edited Task:", editTaskDetails);
    setErrors({}); // clear errors after success
    setIsEditModalOpen(false);
  };
  
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  
  const [tasks, setTasks] = useState([]);
  
  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    setShowDeleteModal(false);
    setShowSuccessPopup(true);
  
    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setShowSuccessPopup(false);
      setTaskToDelete(null);
    }, 1500);
  };
  

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div style={{ marginLeft: '22px' }}>
          <Navbar />
        </div>

        {/* Dashboard Content */}
        <div className="content" style={{ marginTop: '-600px',overflowX:'hidden' }}>
          <h2>Welcome, HR</h2>

          {/* Cards */}
          <div className="cards">
            <div className="card">
              <FaUserPlus className="card-icon active" />
              <p>Total Tasks Assigned</p>
              <h3>15</h3>
            </div>
            <div className="card">
              <FaTasks className="card-icon leave" />
              <p>Tasks in Progress</p>
              <h3>5</h3>
            </div>
            <div className="card">
              <FaTicketAlt className="card-icon joined" />
              <p>Completed Tasks</p>
              <h3>10</h3>
            </div>
          </div>

          <h6>Task</h6>

          {/* Task buttons */}
          <div className="taskbutton">
            <button className="task-btn" onClick={() => navigate('/task')}>Individual Task</button>
            <button className="task-btn" onClick={() => navigate('/teamtask')} style={{backgroundColor:"#883C45", color:"white"}}>Team Tasks</button>
          </div>

          {/* Assign Task Button */}
          <button className="assign-task-btn" onClick={() => setIsModalOpen(true)}>
            <FaEdit className="assign-icon" /> Assign Task
          </button>





        {/* Modal */}
{isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">

      {/* Modal Header */}
      <div className="modal-header">
        <h3>Bulk Assign Tasks</h3>
        <button className="close-btn" onClick={closeModal}>×</button>
      </div>

      {/* Modal Body */}
      <div style={{ padding: '10px 0', fontFamily: 'sans-serif' }}>
        {/* Select Employee Button */}
        <button
          onClick={() => setShowEmployeeList(!showEmployeeList)}
          style={{
            margin: '10px 0',
            padding: '10px 20px',
            backgroundColor: '#1f4e5f',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Select Employee
        </button>

        {/* Employee List */}
        {showEmployeeList && (
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
            {registeredEmployees.map((employee, idx) => (
              <div key={employee.id} style={{fontSize:"12px", display: 'inline-block', width: '30%', margin: '5px 0' }}>
                <input
                  type="checkbox"
                  onChange={() => handleSelectEmployee(employee)}
                  checked={selectedEmployees.some(emp => emp.id === employee.id)}
                />{' '}
                {idx + 1}. {employee.name}
              </div>
            ))}
          </div>
        )}
        <div style={{borderBottom:"1px solid #BFD2DB", margin:"10px", marginBottom:"20px"}}></div>

        {/* Editable Table */}
        <div style={{ border: '1px solid #ccc', borderRadius: '3px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Employee ID', 'Name', 'Task Description', 'Start Date', 'Due Date', 'Status', 'Actions'].map(header => (
                  <th key={header} style={{ fontSize:"12px", border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4'}}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedEmployees.map(employee => (
                <tr key={employee.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="text"
                      placeholder="Enter task description"
                      value={employee.taskDescription || ''}
                      onChange={(e) => handleTaskDescriptionChange(employee.id, e.target.value)}
                      style={{ width: '100%', padding: '4px', border:"none" }}
                    />
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="date"
                      value={employee.startDate || ''}
                      onChange={(e) => handleStartDateChange(employee.id, e.target.value)}
                      style={{ width: '100%', padding: '4px', border:"none" }}
                    />
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="date"
                      value={employee.dueDate || ''}
                      onChange={(e) => handleDueDateChange(employee.id, e.target.value)}
                      style={{ width: '100%', padding: '4px', border:"none" }}
                    />
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', color:"#1E7CA4" }}>In Progress</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <Pencil size={14} style={{ cursor: 'pointer', marginRight: '8px', color:"#274552" }} />
                  <Trash size={16} style={{ cursor: 'pointer', color: '#921B29' }} onClick={() => handleDelete(employee.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="modal-footer">
              <button className="done-btn">
                Done
              </button>
            </div>
    </div>
  </div>
  
)}



{/* Task Table */}
<div className="task-table">
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Assigned to</th>
        <th>Assign Date</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Details</th>
        <th>Actions</th>

      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>...</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="in-progress">In Progress</td>
        <td>...</td>

         <td>
              <FaEdit className="edit-icon" onClick={() => {
        setEditTaskDetails(editTaskDetails); 
        setIsEditModalOpen(true);
      }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
            </td>
      </tr>
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>...</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="in-progress">In Progress</td>
        <td>...</td>
            <td>
                 <FaEdit className="edit-icon" onClick={() => {
           setEditTaskDetails(editTaskDetails); 
           setIsEditModalOpen(true);
         }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
               </td>
      </tr>
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>...</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="in-progress">In Progress</td>
        <td>...</td>
            <td>
                 <FaEdit className="edit-icon" onClick={() => {
           setEditTaskDetails(editTaskDetails); 
           setIsEditModalOpen(true);
         }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
               </td>
      </tr>
    </tbody>
  </table>
</div>

<div className="OCbutton">
          <button className="overdue-btn"> Overdue Tasks</button>
          <button className="task-btn"> Completed Tasks</button>
          </div>


{/* Task Table */}
<div className="task-table">
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Assigned to</th>
        <th>Assign Date</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Details</th>
        <th>Actions</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>Karma Dorji</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="overdue">Overdue</td>
        <td>...</td>
            <td>
                 <FaEdit className="edit-icon" onClick={() => {
           setEditTaskDetails(editTaskDetails); 
           setIsEditModalOpen(true);
         }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
               </td>
      </tr>
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>Karma Dorji</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="overdue">Overdue</td>
        <td>...</td>
            <td>
                 <FaEdit className="edit-icon" onClick={() => {
           setEditTaskDetails(editTaskDetails); 
           setIsEditModalOpen(true);
         }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
               </td>
      </tr>
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>...</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="overdue">Overdue</td>
        <td>...</td>
            <td>
                 <FaEdit className="edit-icon" onClick={() => {
           setEditTaskDetails(editTaskDetails); 
           setIsEditModalOpen(true);
         }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
               </td>
      </tr>
      <tr>
        <td>Add Dark Mode Feature in the company’s website</td>
        <td>...</td>
        <td>March 12</td>
        <td>March 13</td>
        <td className="overdue">Overdue</td>
        <td>...</td>
            <td>
                 <FaEdit className="edit-icon" onClick={() => {
           setEditTaskDetails(editTaskDetails); 
           setIsEditModalOpen(true);
         }} /> <FaTrash className="delete-icon"  onClick={() => handleDeleteClick(tasks.id)} />
               </td>
      </tr>
    </tbody>
  </table>
</div>



{/* Edit Task Modal */}
{isEditModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h3>Edit Task</h3>
        <button className="close-btn" onClick={() => setIsEditModalOpen(false)}>
          ×
        </button>
      </div>

      <div className="modal-body">
        <label>Task</label>
        <input
          type="text"
          name="task"
          value={editTaskDetails.task}
          onChange={handleEditInputChange}
          style={{ borderColor: errors.task ? "red" : "" }}
        />
        {errors.task && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.task}</span>}

        <label>Assign to</label>
        <select
          name="assignedTo"
          value={editTaskDetails.assignedTo}
          onChange={handleEditInputChange}
          style={{ borderColor: errors.assignedTo ? "red" : "" }}
        >
          <option value="">Name</option>
          {employees.map((emp) => (
            <option key={emp} value={emp}>{emp}</option>
          ))}
        </select>
        {errors.assignedTo && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.assignedTo}</span>}

        <div className="date-container">
          <div>
            <label>Assign Date</label>
            <input
              type="date"
              name="assignDate"
              value={editTaskDetails.assignDate}
              onChange={handleEditInputChange}
              style={{ borderColor: errors.assignDate ? "red" : "" }}
            />
            {errors.assignDate && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.assignDate}</span>}
          </div>
          <div>
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={editTaskDetails.dueDate}
              onChange={handleEditInputChange}
              style={{ borderColor: errors.dueDate ? "red" : "" }}
            />
            {errors.dueDate && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.dueDate}</span>}
          </div>
        </div>

        <label>Description</label>
        <textarea
          name="description"
          value={editTaskDetails.description}
          onChange={handleEditInputChange}
          style={{ borderColor: errors.description ? "red" : "" }}
        ></textarea>
        {errors.description && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.description}</span>}

        <label>Status</label>
        <select name="status" value={editTaskDetails.status} onChange={handleInputChange}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Over">Over</option>
        </select>
      </div>

      <div className="modal-footer">
        <button className="done-btn" onClick={handleEditSubmit}>
          Update
        </button>
      </div>

    </div>
  </div>
)}

    {/* Delete Confirmation Modal */}
    {showDeleteModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
       
          <div style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '450px', height:"200px"
          }}>
               <button className="close-btn" onClick={() => setShowDeleteModal(false)} style={{
            position: 'absolute', marginLeft:"180px"
          }}>
          ×
        </button>
            <p style={{ marginTop: '50px', fontWeight: 'bold' }}>Are you sure you want to delete this task?</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '140px' }}>
              <button
                onClick={confirmDelete}
                style={{
                  backgroundColor: '#D1E7E0',
                  padding: '10px 20px',
                  marginTop: '30px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                style={{
                  backgroundColor: '#A32020',
                  color: 'white',
                  padding: '10px 20px',
                  marginTop: '30px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Cancel
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
    backgroundColor: 'white', padding: '20px 40px', borderRadius: '8px',
    textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '350px', height:"150px"
  }}>
    <CheckCircleIcon style={{ width: '60px', height: '60px', color: 'green' }} />
    <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Deleted Successfully</p>
  </div>
  </div>
)}




        </div>
      </div>
    </div>
  );
};

export default TeamTask;
