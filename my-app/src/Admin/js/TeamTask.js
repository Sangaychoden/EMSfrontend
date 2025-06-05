import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTasks, FaTicketAlt, FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Pencil, Trash } from 'lucide-react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../css/TeamTask.css";

const TeamTask = () => {
  const navigate = useNavigate();
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const [showResponsibilities, setShowResponsibilities] = useState(null);
  const [showOverdueTasks, setShowOverdueTasks] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
const [selectedEmployee, setSelectedEmployee] = useState(null);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState(null);
const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
// const [showSuccessMessage, setShowSuccessMessage] = useState(false);
// const [errors, setErrors] = useState({});

// const handleEditClick = (task) => {
//   setEditTaskDetails({
//     ...task,
//     task: task.task,
//     assignedTo: task.assignTo.join(', '),
//     assignDate: task.assignDate,
//     dueDate: task.dueDate,
//     description: task.description,
//     status: task.status === 'PENDING' ? 'In Progress' : 
//            task.status === 'COMPLETED' ? 'Completed' : 'Overdue',
//     responsibilities: task.responsibilities || {}
//   });
//   setIsEditModalOpen(true);
// };

const handleEditClick = (task) => {
  setEditTaskDetails({
    ...task,
    task: task.task,
    assignedTo: task.assignTo ? task.assignTo.join(', ') : '',
    assignDate: task.assignDate,
    dueDate: task.dueDate,
    description: task.description,
    status: task.status === 'PENDING' ? 'In Progress' : 
           task.status === 'COMPLETED' ? 'Completed' : 'Overdue',
    responsibilities: task.responsibilities || {}
  });
  setIsEditModalOpen(true);
};

  // Select employee
  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsDropdownOpen(false);
  };

  // Remove selected employee
  const removeSelectedEmployee = () => {
    setSelectedEmployee(null);
  };

  // Get employee name by ID
  const getEmployeeName = (employeeId) => {
    if (!employeeId) return "Unassigned";
    const employee = employees.find(emp => emp.employeeId === employeeId);
    return employee ? employee.name : `Unknown (${employeeId})`;
  };
  const fetchEmployees = async () => {
    try {
      setLoadingEmployees(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/names', {
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
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setFetchError(error.message);
    } finally {
      setLoadingEmployees(false);
    }
  };
//   const updateTask = async (taskId) => {
//   try {
//     const token = localStorage.getItem('token');
    
//     // Prepare the request body
//     const requestBody = {
//       task: editTaskDetails.task,
//       assignTo: editTaskDetails.assignedTo.split(',').map(id => id.trim()), // Convert string back to array
//       dueDate: editTaskDetails.dueDate,
//       description: editTaskDetails.description,
//       responsibilities: editTaskDetails.responsibilities,
//       userStatuses: Object.keys(editTaskDetails.responsibilities).reduce((acc, empId) => {
//         acc[empId] = editTaskDetails.status === 'Completed' ? 'COMPLETED' : 'PENDING';
//         return acc;
//       }, {})
//     };

//     const response = await fetch(`http://localhost:8765/TASKSERVICE/api/tasks/update/${taskId}`, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestBody)
//     });

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Task updated successfully:", data);
    
//     // Show success message and refresh tasks
//     setShowSuccessMessage(true);
//     fetchTasks(); // Refresh the task list
//     fetchCompletedTasks();
//     fetchOverdueTasks();
    
//     // Close modal after successful update
//     setTimeout(() => {
//       setIsEditModalOpen(false);
//       setShowSuccessMessage(false);
//     }, 1500);

//   } catch (error) {
//     console.error("Error updating task:", error);
//     setErrors({
//       submit: error.message || "Failed to update task. Please try again."
//     });
//   }
// };
const updateTask = async (taskId) => {
  try {
    const token = localStorage.getItem('token');
    
    // Prepare the request body
    const requestBody = {
      task: editTaskDetails.task,
      assignTo: editTaskDetails.assignedTo.split(',').map(id => id.trim()), // Convert string back to array
      dueDate: editTaskDetails.dueDate,
      description: editTaskDetails.description,
      responsibilities: editTaskDetails.responsibilities,
      userStatuses: Object.keys(editTaskDetails.responsibilities).reduce((acc, empId) => {
        acc[empId] = editTaskDetails.status === 'Completed' ? 'COMPLETED' : 'PENDING';
        return acc;
      }, {})
    };

    const response = await fetch(`http://localhost:8765/TASKSERVICE/api/tasks/update/${taskId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Task updated successfully:", data);
    
    // Show success message and refresh all task lists
    setShowUpdatePopup(true);
    fetchTasks();
    fetchCompletedTasks();
    fetchOverdueTasks();
      setIsEditModalOpen(false);
    
    // Close modal after successful update
    setTimeout(() => {
      setShowUpdatePopup(false);
    }, 1500);

  } catch (error) {
    console.error("Error updating task:", error);
    setErrors({
      submit: error.message || "Failed to update task. Please try again."
    });
  }
};
//   const fetchEmployees = async () => {
//   try {
//     setLoadingEmployees(true);
//     const token = localStorage.getItem('token');
    
//     const response = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/names', {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     });
    
//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     // Make sure each employee has an email field
//     setEmployees(data.map(emp => ({
//       ...emp,
//       email: emp.email || `${emp.employeeId}` // Fallback if email is missing
//     })));
//   } catch (error) {
//     console.error("Error fetching employees:", error);
//     setFetchError(error.message);
//   } finally {
//     setLoadingEmployees(false);
//   }
// };

  const fetchTasks = async () => {
    try {
      setLoadingTasks(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/multiple-assignees', {
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
  const assignTeamTask = async () => {
  try {
    const token = localStorage.getItem('token');
  
const requestBody = {
  task: taskDetails.task,
  assignTo: selectedEmployees.map(emp => emp.employeeId), // ✅ use employeeId instead of email
  dueDate: taskDetails.dueDate,
  description: taskDetails.description,
  responsibilities: selectedEmployees.reduce((acc, emp) => {
    acc[emp.employeeId] = emp.responsibility || '';
    return acc;
  }, {}),
  userStatuses: selectedEmployees.reduce((acc, emp) => {
    acc[emp.employeeId] = 'PENDING';
    return acc;
  }, {})
};


    const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/team', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Task assigned successfully:", data);
    
    // Show success message and refresh tasks
    setShowConfirmPopup(true);
    fetchTasks(); // Refresh the task list
    setIsModalOpen(false);
    
    // Close modal after successful submission
    setTimeout(() => {
      setShowConfirmPopup(false);
      // setIsModalOpen(false);
      setTaskDetails({
        task: "",
        assignedTo: "",
        assignDate: "",
        dueDate: "",
        description: "",
        status: "In Progress",
      });
      setSelectedEmployees([]);
    }, 1500);

  } catch (error) {
   console.error("Error assigning team task:", error);
setErrors({
  submit: error.message || "Failed to assign task. Please try again."
});
  }
};
  useEffect(() => {
    fetchEmployees();
    fetchTasks();
      fetchCompletedTasks();
    fetchOverdueTasks();
  }, []);

  const toggleOverdueTasks = () => {
    setShowOverdueTasks(true);
    setShowCompletedTasks(false);
  };

  const toggleCompletedTasks = () => {
    setShowCompletedTasks(true);
    setShowOverdueTasks(false);
  };

  const toggleMainTasks = () => {
    setShowOverdueTasks(false);
    setShowCompletedTasks(false);
  };
// const handleSelectEmployee = (employee) => {
//   setSelectedEmployees(prev => {
//     const isSelected = prev.some(emp => emp.employeeId === employee.employeeId);
//     if (isSelected) {
//       return prev.filter(emp => emp.employeeId !== employee.employeeId);
//     } else {
//       return [...prev, employee];
//     }
//   });
// };
const handleSelectEmployee = (employee) => {
  setSelectedEmployees(prev => {
    const isSelected = prev.some(emp => emp.employeeId === employee.employeeId);
    if (isSelected) {
      return prev.filter(emp => emp.employeeId !== employee.employeeId);
    } else {
      // Add the employee with all necessary fields initialized
      return [...prev, {
        ...employee,
        responsibility: '',
        taskDescription: '',
        startDate: '',
        dueDate: ''
      }];
    }
  });
};

  const handleResponsibilityChange = (employeeId, value) => {
  setSelectedEmployees(prev =>
    prev.map(emp => 
      emp.employeeId === employeeId ? { ...emp, responsibility: value } : emp
    )
  );
};

const handleTaskDescriptionChange = (employeeId, value) => {
  setSelectedEmployees(prev =>
    prev.map(emp => 
      emp.employeeId === employeeId ? { ...emp, taskDescription: value } : emp
    )
  );
};

const handleStartDateChange = (employeeId, value) => {
  setSelectedEmployees(prev =>
    prev.map(emp => 
      emp.employeeId === employeeId ? { ...emp, startDate: value } : emp
    )
  );
};

const handleDueDateChange = (employeeId, value) => {
  setSelectedEmployees(prev =>
    prev.map(emp => 
      emp.employeeId === employeeId ? { ...emp, dueDate: value } : emp
    )
  );
};
  
  const handleEdit = (employeeId) => {
    console.log(`Editing employee ${employeeId}`);
  };
  const handleDetailClick = (task) => {
    setSelectedTask(task);
    setIsDetailModalOpen(true);
  };

  const handleDelete = (employeeId) => {
    setSelectedEmployees(prev => prev.filter(emp => emp.id !== employeeId));
  };
  const handleDeleteClick = async (taskId) => {
  setTaskToDelete(taskId);
  setShowDeleteModal(true);
};

const confirmDelete = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:8765/TASKSERVICE/api/tasks/delete/${taskToDelete}`, {
      method: 'DELETE',
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

    setShowDeleteModal(false);
    setShowSuccessPopup(true);

    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setShowSuccessPopup(false);
      setTaskToDelete(null);
    }, 1500);
  } catch (error) {
    console.error("Error deleting task:", error);
    alert("Failed to delete task. Please try again.");
  }
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
    status: "In Progress",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
    setErrors({ ...errors, [name]: "" });
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

    setTaskDetails({
      task: "",
      assignedTo: "",
      assignDate: "",
      dueDate: "",
      description: "",
      status: "In Progress",
    });

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
    setErrors({ ...errors, [name]: "" });
  };
  
  const handleEditSubmit = () => {
  const formErrors = validateEditForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  // Find the task ID from the original tasks array
  const taskToUpdate = tasks.find(task => 
    task.task === editTaskDetails.task || 
    task.assignTo.join(', ') === editTaskDetails.assignedTo
  );

  if (taskToUpdate && taskToUpdate.id) {
    updateTask(taskToUpdate.id);
  } else {
    console.error("Could not find task ID to update");
    setErrors({
      submit: "Could not identify task to update. Please try again."
    });
  }
};
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);


  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get status class for styling
  const getStatusClass = (status) => {
    switch (status) {
      case 'PENDING':
        return 'in-progress';
      case 'COMPLETED':
        return 'completed';
      default:
        return 'overdue';
    }
  };
    // Format status for display
  const formatStatus = (status) => {
    switch(status) {
      case 'IN_PROGRESS': return 'In Progress';
      case 'COMPLETED': return 'Completed';
      case 'PENDING': return 'Pending';
      case 'OVERDUE': return 'Overdue';
      default: return status;
    }
  };

  // Toggle responsibilities visibility
  const toggleResponsibilities = (taskId) => {
    if (showResponsibilities === taskId) {
      setShowResponsibilities(null);
    } else {
      setShowResponsibilities(taskId);
    }
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
        <div className="content1" style={{marginTop:'-950px', marginRight:'140px'}}>
          <h1>Welcome, HR</h1>

         
          <div style={{marginLeft:'100px'}} className="cardss">
            <div style={{width:'490px'}}  className="card">
              <FaUserPlus  style={{width:'45px', height:'45px'}}  className="card-icon active" />
              <p>Total Tasks Assigned</p>
              <h3>{tasks.length}</h3>
            </div>
            <div style={{width:'490px'}}  className="card">
              <FaTasks  style={{width:'45px', height:'45px'}}  className="card-icon leave" />
              <p>Tasks in Progress</p>
              <h3>{tasks.filter(task => task.status === 'PENDING').length}</h3>
            </div>
            <div style={{width:'490px'}}  className="card">
              <FaTicketAlt  style={{width:'45px', height:'45px'}}  className="card-icon joined" />
              <p>Completed Tasks</p>
              <h3>{completedTasks.length}</h3>
            </div>
          </div>

          <h6>Task</h6>

          {/* Task buttons */}
          <div className="taskbutton">
            <button className="task-btn" onClick={() => navigate('/admin/task')}>Individual Task</button>
            <button className="task-btn" onClick={() => navigate('/admin/team-task')} style={{backgroundColor:"#883C45", color:"white"}}>Team Tasks</button>
          </div>

          {/* Assign Task Button */}
          <div style={{marginLeft:'500px'}}>
          <button className="assign-task-btn" onClick={() => setIsModalOpen(true)}>
            <FaEdit className="assign-icon" /> Assign Task
          </button>
</div>
          {/* Modal */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">

                {/* Modal Header */}
                <div className="modal-header" >
                  <h3>Bulk Assign Tasks</h3>
                  <button style={{fontSize:"24px", marginRight:'5px'}} className="close-btn" onClick={closeModal}>×</button>
                </div>

                {/* Modal Body */}
                <div style={{ padding: '10px 0', fontFamily: 'sans-serif' }}>
                  <div className="task-body">
                    <label>Task Title</label>
                    <input
                      type="text"
                      name="task"
                      value={taskDetails.task}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.task ? "red" : "" }}
                    />
                    {errors.task && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.task}</span>}

                    <label>Task Description</label>
                    <textarea
                      name="description"
                      value={taskDetails.description}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.description ? "red" : "", height: "80px" }}
                    />
                    {errors.description && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.description}</span>}

                    <div className="date-container">
                      <div>
                        <label>Assign Date</label>
                        <input
                          type="date"
                          name="assignDate"
                          value={taskDetails.assignDate}
                          onChange={handleInputChange}
                          style={{ borderColor: errors.assignDate ? "red" : "" }}
                        />
                        {errors.assignDate && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.assignDate}</span>}
                      </div>
                      <div>
                        <label>Due Date</label>
                        <input
                          type="date"
                          name="dueDate"
                          value={taskDetails.dueDate}
                          onChange={handleInputChange}
                          style={{ borderColor: errors.dueDate ? "red" : "" }}
                        />
                        {errors.dueDate && <span style={{color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.dueDate}</span>}
                      </div>
                    </div>
                  </div>

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
    {loadingEmployees ? (
      <p>Loading employees...</p>
    ) : fetchError ? (
      <p>Error loading employees: {fetchError}</p>
    ) : (
      employees.map((employee, idx) => (
        <div key={employee.employeeId} style={{fontSize:"12px", display: 'inline-block', width: '30%', margin: '5px 0' }}>
          <input
            type="checkbox"
            onChange={() => handleSelectEmployee(employee)}
            checked={selectedEmployees.some(emp => emp.employeeId === employee.employeeId)}
          />{' '}
          {idx + 1}. {employee.name}
        </div>
      ))
    )}
  </div>
)}
                  <div style={{borderBottom:"1px solid #BFD2DB", margin:"10px", marginBottom:"20px"}}></div>

                  {/* Editable Table */}
                  <div style={{ border: '1px solid #ccc', borderRadius: '3px', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          {['Employee ID', 'Name', 'Responsibility', 'Status', 'Actions'].map(header => (
                            <th key={header} style={{ fontSize:"12px", border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4'}}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
  {selectedEmployees.map(employee => (
    <tr key={employee.employeeId}>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.employeeId}</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        <input
          type="text"
          placeholder="Enter responsibility"
          value={employee.responsibility || ''}
          onChange={(e) => handleResponsibilityChange(employee.employeeId, e.target.value)}
          style={{ width: '100%', padding: '4px', border:"none" }}
        />
      </td>
      {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        <input
          type="text"
          placeholder="Enter description"
          value={employee.taskDescription || ''}
          onChange={(e) => handleTaskDescriptionChange(employee.employeeId, e.target.value)}
          style={{ width: '100%', padding: '4px', border:"none" }}
        />
      </td> */}
      <td style={{ border: '1px solid #ddd', padding: '8px', color:"#1E7CA4" }}>In Progress</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        <Pencil size={14} style={{ cursor: 'pointer', marginRight: '8px', color:"#274552" }} />
        <Trash size={16} style={{ cursor: 'pointer', color: '#921B29' }} 
          onClick={() => handleDelete(employee.employeeId)} />
      </td>
    </tr>
  ))}
</tbody>
                    
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  {/* <button className="done-btn">
                    Done
                  </button> */}
                  <button className="done-btn" onClick={assignTeamTask}>
  Done
</button>
                </div>
              </div>
            </div>
          )}
{/*           
        {showSuccessMessage && (
  <div style={{
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '15px 25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 9999,
    fontWeight: 'bold',
    transition: 'opacity 0.5s ease-in-out'
  }}>
    ✅ Task assigned successfully!
  </div>
)}

{errors.submit && (
  <div style={{
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '15px 25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    fontWeight: 'bold',
    transition: 'opacity 0.5s ease-in-out'
  }}>
    ❌ {errors.submit}
  </div>
)} */}


          {/* Task Table */}
          <div className="task-table">
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Assigned to</th>
                  <th>Responsibilities</th>
                  <th>Assign Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr key={task.id}>
                    <td>{task.task}</td>
                    {/* <td>{task.assignTo.join(', ')}</td> */}
                    <td>
  {task.assignTo && task.assignTo.length > 0 
    ? task.assignTo.map(id => getEmployeeName(id)).join(', ') 
    : 'Unassigned'}
</td>
                     {/* <td>
                        {task.assignedToName || getEmployeeName(task.assignTo ? task.assignTo[0] : null)}
                      </td> */}
                    <td>
                      <span 
                        className="view-responsibilities-link"
                        onClick={() => toggleResponsibilities(task.id)}
                        style={{ cursor: 'pointer', color: '#1E7CA4', textDecoration: 'underline' }}
                      >
                        View Responsibilities
                      </span>
                      {showResponsibilities === task.id && task.responsibilities && (
  <div className="responsibilities-popup">
    <div className="responsibilities-popup-content">
      <button 
      style={{fontSize:'24px'}}
        className="close-popup-btn"
        onClick={(e) => {
          e.stopPropagation();
          setShowResponsibilities(null);
        }}
      >
        ×
      </button>
      <h2>Responsibilities</h2>
      <ul style={{fontSize:'15px'}} >
        {Object.entries(task.responsibilities).map(([employeeId, responsibility]) => {
          // Get employee name from employees array
          const employee = employees.find(emp => emp.employeeId === employeeId);
          const displayName = employee ? employee.name : `Unknown (${employeeId})`;
          
          return (
            <li key={employeeId}>
              <strong>{displayName}:</strong> {responsibility}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
)}

                    </td>
                    <td>{(task.assignDate)}</td>
                    <td>{(task.dueDate)}</td>
                    <td className={getStatusClass(task.status)}>
                      {task.status === 'PENDING' ? 'In Progress' : 
                       task.status === 'COMPLETED' ? 'Completed' : 'Overdue'}
                    </td>
                    <td>{task.description}</td>
                    <td>
                      <FaEdit className="edit-icon" onClick={() => {
                        setEditTaskDetails({
                          task: task.task,
                          assignedTo: task.assignTo.join(', '),
                          assignDate: task.assignDate,
                          dueDate: task.dueDate,
                          description: task.description,
                          status: task.status === 'PENDING' ? 'In Progress' : 
                                 task.status === 'COMPLETED' ? 'Completed' : 'Overdue',
                          responsibilities: task.responsibilities || {}
                        }); 
                        setIsEditModalOpen(true);
                      }} /> 
                      <FaTrash className="delete-icon" onClick={() => handleDeleteClick(task.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

           <div className="OCbutton">
           <button 
             className={`overdue-btn ${showOverdueTasks ? 'active' : ''}`} 
             onClick={toggleOverdueTasks}
           >
             Overdue Tasks
           </button>
           <button 
             className={`task-btn ${showCompletedTasks ? 'active' : ''}`} 
             onClick={toggleCompletedTasks}
           >
             Completed Tasks
           </button>
         </div>
                   {/* Overdue Task Table */}
                   {showOverdueTasks && (
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
                           {overdueTasks.length === 0 ? (
                             <tr>
                               <td colSpan="7" style={{ textAlign: 'center' }}>No overdue tasks</td>
                             </tr>
                           ) : (
                             overdueTasks.map(task => (
                               <tr key={task.id}>
                                 <td>{task.task}</td>
                                 <td>
                                   {task.assignedToName || getEmployeeName(task.assignTo ? task.assignTo[0] : null)}
                                 </td>
                                 <td>{task.assignDate}</td>
                                 <td>{task.dueDate}</td>
                                 <td className="overdue">Overdue</td>
                                 <td
                                   style={{ cursor: 'pointer', color: "#883C45" }}
                                   onClick={() => handleDetailClick(task)}
                                 >
                                   ...
                                 </td>
                                 <td>
                                   <FaEdit className="edit-icon" onClick={() => handleEditClick(task)} />
                                   <FaTrash className="delete-icon" onClick={() => handleDeleteClick(task.id)} />
                                 </td>
                               </tr>
                             ))
                           )}
                         </tbody>
                       </table>
                     </div>
                   )}
         
                   {/* Completed Task Table */}
                   {showCompletedTasks && (
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
                           {completedTasks.length === 0 ? (
                             <tr>
                               <td colSpan="7" style={{ textAlign: 'center' }}>No completed tasks</td>
                             </tr>
                           ) : (
                             completedTasks.map(task => (
                               <tr key={task.id}>
                                 <td>{task.task}</td>
                                 <td>
                                   {task.assignedToName || getEmployeeName(task.assignTo ? task.assignTo[0] : null)}
                                 </td>
                                 <td>{task.assignDate}</td>
                                 <td>{task.dueDate}</td>
                                 <td className="completed">Completed</td>
                                 <td
                                   style={{ cursor: 'pointer', color: "#008000" }}
                                   onClick={() => handleDetailClick(task)}
                                 >
                                   ...
                                 </td>
                                 <td>
                                   <FaEdit className="edit-icon" onClick={() => handleEditClick(task)} />
                                   <FaTrash className="delete-icon" onClick={() => handleDeleteClick(task.id)} />
                                 </td>
                               </tr>
                             ))
                           )}
                         </tbody>
                       </table>
                     </div>
                   )}
{/*          
              {showSuccessMessage && (
  <div style={{
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '15px 25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 9999,
    fontWeight: 'bold',
    transition: 'opacity 0.5s ease-in-out'
  }}>
    {isEditModalOpen ? '✅ Task updated successfully!' : '✅ Task assigned successfully!'}
  </div>
)} */}
         
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
        <input
          type="text"
          name="assignedTo"
          value={editTaskDetails.assignedTo}
          onChange={handleEditInputChange}
          style={{ borderColor: errors.assignedTo ? "red" : "" }}
        />
        {errors.assignedTo && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.assignedTo}</span>}

        {/* Responsibilities Section */}
        <label>Responsibilities</label>
        {editTaskDetails.responsibilities && Object.entries(editTaskDetails.responsibilities).map(([employeeId, responsibility]) => {
          const employee = employees.find(emp => emp.employeeId === employeeId);
          const displayName = employee ? employee.name : `Employee ${employeeId}`;
          
          return (
            <div key={employeeId} style={{ marginBottom: '8px', }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '100px', fontWeight: 'bold' }}>{displayName}:</span>
                <input
                  type="text"
                  value={responsibility}
                  onChange={(e) => {
                    const newResponsibilities = {...editTaskDetails.responsibilities};
                    newResponsibilities[employeeId] = e.target.value;
                    setEditTaskDetails(prev => ({
                      ...prev,
                      responsibilities: newResponsibilities
                    }));
                  }}
                  style={{ flex: 1, padding: '4px' }}
                />
              </div>
            </div>
          );
        })}

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
        <select 
          name="status" 
          value={editTaskDetails.status} 
          onChange={handleEditInputChange}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Overdue">Overdue</option>
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
              backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '550px', height:"230px"
            }}>
              <button className="close-btn" onClick={() => setShowDeleteModal(false)} style={{
                position: 'relative', marginLeft:"490px", marginBottom:"-200px", fontSize:'25px'
              }}>
                ×
              </button>
              <p style={{ marginTop: '10px', fontWeight: 'bold' , marginLeft:'-10px'}}>Are you sure you want to delete this Task?</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '180px' }}>
                  <button
                    onClick={confirmDelete}
                    style={{
                      backgroundColor: '#D1E7E0',
                      padding: '10px 20px',
                      marginTop: '30px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        fontWeight: 'bold',
                       width:'100px'
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
                      cursor: 'pointer',
                           fontWeight: 'bold',
                       width:'100px'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

      
                      {/* confirm Popup */}
                      {showConfirmPopup && (
                        <div style={{
                          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <div style={{
                            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white', padding: '20px 40px', borderRadius: '8px',
                            textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)',width: '550px', height:"230px"
                          }}>
                            <CheckCircleIcon style={{ width: '130px', height: '130px', color: '#4A6D7C' }} />
                            <p style={{ marginTop: '-10px',fontSize:'20px', fontWeight: 'bold',marginLeft:'-10px' }}>Task Assignd Successfully</p>
                          </div>
                        </div>
                      )}

                         {/* confirm Popup */}
                      {showUpdatePopup && (
                        <div style={{
                          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <div style={{
                            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white', padding: '20px 40px', borderRadius: '8px',
                            textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)',width: '550px', height:"230px"
                          }}>
                            <CheckCircleIcon style={{ width: '130px', height: '130px', color: '#4A6D7C' }} />
                            <p style={{ marginTop: '-10px',fontSize:'20px', fontWeight: 'bold',marginLeft:'-10px' }}>Task updated Successfully</p>
                          </div>
                        </div>
                      )}



 {/*delete Success Popup */}
                 {showSuccessPopup && (
                   <div style={{
                     position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                     backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                   }}>
                     <div style={{
                       position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                       backgroundColor: 'white', padding: '20px 40px', borderRadius: '8px',
                       textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)',width: '550px', height:"230px"
                     }}>
                       <CheckCircleIcon style={{ width: '130px', height: '130px', color: '#4A6D7C' }} />
                       <p style={{ marginTop: '-10px',fontSize:'20px', fontWeight: 'bold',marginLeft:'-10px' }}>Deleted Successfully</p>
                     </div>
                   </div>
                 )}

           {/* Task Detail Modal */}
          {isDetailModalOpen && selectedTask && (
            <div style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999
            }}>
              <div style={{
                width: '90%',
                maxWidth: '800px',
                backgroundColor: '#fff',
                borderRadius: '5px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                maxHeight: '150vh',
                overflowY: 'auto',
                padding: '20px',
                position: 'relative'
              }}>
                {/* Modal Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h2 style={{ fontSize: '17px', fontWeight: 'bold' }}>Task Details</h2>
                  <button
                    onClick={() => setIsDetailModalOpen(false)}
                    style={{
                      fontSize: '24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    ×
                  </button>
                </div>

                {/* Task Info */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: 'bold' }}>Task</label>
                  <input
                    type="text"
                    value={selectedTask.task}
                    readOnly
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      marginTop: '5px',
                      fontSize:"12px"
                    }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: 'bold',fontSize:"12px" }}>Assign to</label>
                  <input
                    type="text"
                    value={
                      selectedTask.assignedToName || getEmployeeName(selectedTask.assignTo ? selectedTask.assignTo[0] : null)
                    }
                    readOnly
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      marginTop: '5px',
                      fontSize:"12px"
                    }}
                  />
                </div>

                {/* Dates */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 'bold',fontSize:"12px" }}>Assign Date</label>
                    <input
                      type="text"
                      value={selectedTask.assignDate}
                      readOnly
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        marginTop: '5px',
                        fontSize:"12px"
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 'bold',fontSize:"12px" }}>Due Date</label>
                    <input
                      type="text"
                      value={selectedTask.dueDate}
                      readOnly
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        marginTop: '5px',
                        fontSize:"12px"
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: 'bold',fontSize:"12px" }}>Description</label>
                  <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    marginTop: '5px',
                    whiteSpace: 'pre-wrap',
                    fontSize:"12px"
                  }}>
                    {selectedTask.description}
                  </div>
                </div>

                {/* Status */}
                {selectedTask.status && (
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold',fontSize:"12px" }}>Status</label>
                    <input
                      type="text"
                      value={formatStatus(selectedTask.status)}
                      readOnly
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        marginTop: '5px',
                        fontSize:"12px"
                      }}
                    />
                  </div>
                )}

                {/* Attachment */}
                {selectedTask.attachment && (
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', fontSize:"12px" }}>Attachment</label>
                    <ul style={{ marginTop: '5px', fontSize:"12px", marginLeft: '20px' }}>
                      {selectedTask.attachment.map((file, i) => (
                        <li key={i}>{file}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add this CSS to your TeamTask.css file */}
      <style jsx>{`
        .view-responsibilities-link:hover {
          color: #C9DEDD;
        }
        
        .responsibilities-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .responsibilities-popup-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 800px;
          height:400px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
        }
        
        .close-popup-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #888;
        }
        
        .responsibilities-popup-content h4 {
          margin-top: 0;
          color: #1f4e5f;
        }
        
        .responsibilities-popup-content ul {
          padding-left: 20px;
        }
        
        .responsibilities-popup-content li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

export default TeamTask;