
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import { CheckCircleIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import "../css/Task.css";
import { FaTasks, FaTicketAlt, FaUserPlus, FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Task = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    assignDate: "",
    dueDate: "",
    description: "",
    status: "PENDING",
    assignTo: null
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTaskDetails, setEditTaskDetails] = useState({
    taskName: "",
    assignTo: null,
    assignDate: "",
    dueDate: "",
    description: "",
    status: "PENDING",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
      const [showConfirmPopup, setShowConfirmPopup] = useState(false);
      const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);
  // const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  // const [showOverdueTasks, setShowOverdueTasks] = useState(false);
  const [showOverdueTasks, setShowOverdueTasks] = useState(true); // Set to true initially
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  // Fetch employees and tasks from API
  useEffect(() => {
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

    fetchEmployees();
    fetchTasks();
    fetchCompletedTasks();
    fetchOverdueTasks();
  }, [navigate]);


  const toggleOverdueTasks = () => {
  setShowOverdueTasks(true);
  setShowCompletedTasks(false);
  };

  const toggleCompletedTasks = () => {
    setShowCompletedTasks(true);
    setShowOverdueTasks(false);
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

  // Validation functions
  const validateForm = () => {
    let formErrors = {};
    if (!taskDetails.taskName.trim()) formErrors.taskName = "Task is required";
    if (!selectedEmployee) formErrors.assignTo = "An employee must be selected";
    if (!taskDetails.assignDate.trim()) formErrors.assignDate = "Assign Date is required";
    if (!taskDetails.dueDate.trim()) formErrors.dueDate = "Due Date is required";
    if (!taskDetails.description.trim()) formErrors.description = "Description is required";
    return formErrors;
  };

  const validateEditForm = () => {
    let formErrors = {};
    if (!editTaskDetails.taskName.trim()) formErrors.taskName = "Task is required";
    if (!editTaskDetails.assignTo) formErrors.assignTo = "An employee must be selected";
    if (!editTaskDetails.assignDate.trim()) formErrors.assignDate = "Assign Date is required";
    if (!editTaskDetails.dueDate.trim()) formErrors.dueDate = "Due Date is required";
    if (!editTaskDetails.description.trim()) formErrors.description = "Description is required";
    return formErrors;
  };

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // const handleEditInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditTaskDetails({ ...editTaskDetails, [name]: value });
  //   setErrors({ ...errors, [name]: "" });
  // };
const handleEditInputChange = (e) => {
  const { name, value } = e.target;
  
  // Special handling for status changes
  if (name === "status" && editTaskDetails.status === "OVERDUE") {
    if (!window.confirm("Changing status from OVERDUE may affect task tracking. Continue?")) {
      return;
    }
  }
  
  setEditTaskDetails({ ...editTaskDetails, [name]: value });
  setErrors({ ...errors, [name]: "" });
};
  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const taskToCreate = {
        task: taskDetails.taskName,
        assignTo: [selectedEmployee.employeeId], // Send as array with employee ID
        dueDate: taskDetails.dueDate,
        description: taskDetails.description,
        status: taskDetails.status
      };

      const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskToCreate)
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newTask = await response.json();
      setTasks([...tasks, {
        ...newTask,
        assignedToName: selectedEmployee.name
      }]);
      setShowConfirmPopup(true);
      setSelectedEmployee(null);
        setIsModalOpen(false);

      setTaskDetails({
        taskName: "",
        assignDate: "",
        dueDate: "",
        description: "",
        status: "PENDING",
        assignTo: null
      });

      setTimeout(() => {
        setShowConfirmPopup(false);
      }, 1500);
    } catch (error) {
      console.error("Error creating task:", error);
      // alert("Failed to create task. Please try again.");
    }
  };

 
const handleEditSubmit = async () => {
  const formErrors = validateEditForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  try {
    const token = localStorage.getItem('token');
    
    const taskToUpdate = {
      task: editTaskDetails.taskName,
      assignTo: Array.isArray(editTaskDetails.assignTo) ? 
                editTaskDetails.assignTo : 
                [editTaskDetails.assignTo],
      assignDate: editTaskDetails.assignDate, // Make sure to include assignDate
      dueDate: editTaskDetails.dueDate,
      description: editTaskDetails.description,
      // status: editTaskDetails.status,
      status: editTaskDetails.status, // Ensure this is included
      userResponsibilities: editTaskDetails.userResponsibilities || {},
      userStatuses: editTaskDetails.userStatuses || {}
    };

    const response = await fetch(`http://localhost:8765/TASKSERVICE/api/tasks/update/${editTaskDetails.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskToUpdate)
    });

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setShowUpdatePopup(true);

    setTimeout(() => {
      setShowUpdatePopup(false);
    }, 1500);

    const updatedTask = await response.json();
    
setTasks(tasks.map(task => 
  task.id === updatedTask.id ? {
    ...task, // Keep existing fields
    ...updatedTask, // Apply updated fields
    assignedToName: Array.isArray(updatedTask.assignTo) ? 
      updatedTask.assignTo.map(id => getEmployeeName(id)).join(', ') :
      getEmployeeName(updatedTask.assignTo?.[0]),
    assignDate: updatedTask.assignDate || task.assignDate, // Fallback to existing if missing
    status: updatedTask.status || task.status // Ensure status is properly merged
  } : task
));

    setIsEditModalOpen(false);
    setErrors({});
  } 
  
  
  
  catch (error) {
    console.error("Error updating task:", error);
    alert("Failed to update task. Please try again.");
  }
};
  
  const handleEditClick = (task) => {
  setEditTaskDetails({
    id: task.id,
    taskName: task.task,
    assignTo: task.assignTo ? 
      (Array.isArray(task.assignTo) ? task.assignTo : [task.assignTo]) : 
      null,
    assignDate: task.assignDate,
    dueDate: task.dueDate,
    description: task.description,
    status: task.status,
    // Include these for team tasks
    userResponsibilities: task.userResponsibilities || {},
    userStatuses: task.userStatuses || {}
  });
  setIsEditModalOpen(true);
};

  const handleDetailClick = (task) => {
    setSelectedTask(task);
    setIsDetailModalOpen(true);
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

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content" >
        {/* Navbar */}
        <div style={{marginLeft:'22px'}}> 
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
              <h3>{tasks.filter(task => task.status === 'IN_PROGRESS').length}</h3>
            </div>
            <div style={{width:'490px'}}  className="card">
              <FaTicketAlt  style={{width:'45px', height:'45px'}}  className="card-icon joined" />
              <p>Completed Tasks</p>
              <h3>{tasks.filter(task => task.status === 'COMPLETED').length}</h3>
            </div>
          </div>
          <h6>Task</h6>

          <div className="taskbutton">
            <button className="task-btn" style={{backgroundColor:"#883C45", color:"white"}}> Individual Task</button>
            <button className="task-btn" onClick={() => navigate('/admin/team-task')}> Team Tasks</button>
          </div>

          {/* Assign Task Button */}
          <div style={{marginLeft:'500px'}}>
          <button  className="assign-task-btn" onClick={() => setIsModalOpen(true)}>
            <FaEdit className="assign-icon" /> Assign Task
          </button>
          </div>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Assign Task</h3>
                  <button style={{fontSize:'24px', marginRight:'5px'}} className="close-btn" onClick={() => {
                    setIsModalOpen(false);
                    setSelectedEmployee(null);
                    
                  }}>
                    ×
                  </button>
                </div>

                <div className="modal-body">
                  <label>Task</label>
                  <input
                    type="text"
                    name="taskName"
                    value={taskDetails.taskName}
                    onChange={handleInputChange}
                    style={{ borderColor: errors.taskName ? "red" : "" }}
                  />
                  {errors.taskName && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.taskName}</span>}

                  <label>Assign to</label>
                  <div className="employee-selector">
                    <div 
                      className="employee-dropdown-toggle"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      style={{ borderColor: errors.assignTo ? "red" : "" }}
                    >
                      {selectedEmployee ? selectedEmployee.name : "Select Employee"}
                      <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className="employee-dropdown">
                        {loadingEmployees ? (
                          <p>Loading employees...</p>
                        ) : fetchError ? (
                          <p className="error">Error loading employees: {fetchError}</p>
                        ) : (
                          employees.map(employee => (
                            <div 
                              key={employee.employeeId}
                              className="dropdown-item"
                              onClick={() => selectEmployee(employee)}
                            >
                              {employee.name} ({employee.employeeId})
                            </div>
                          ))
                        )}
                      </div>
                    )}
                    
                    {selectedEmployee && (
                      <div  className="selected-employees">
                        <div style={{fontSize:'15px', marginRight:'5px'}} className="selected-employee">
                          {selectedEmployee.name}
                          <button 
                            onClick={removeSelectedEmployee}
                            className="remove-employee-btn"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {errors.assignTo && (
                      <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "4px" }}>
                        {errors.assignTo}
                      </span>
                    )}
                  </div>

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

                  <label>Description</label>
                  <textarea
                    name="description"
                    value={taskDetails.description}
                    onChange={handleInputChange}
                    style={{ borderColor: errors.description ? "red" : "" }}
                  ></textarea>
                  {errors.description && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px"}}>{errors.description}</span>}

                  <label>Status</label>
                  <select name="status" value={taskDetails.status} onChange={handleInputChange}>
                    <option value="PENDING">Pending</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="OVERDUE">Overdue</option>
                  </select>
                </div>

                <div className="modal-footer">
                  <button className="done-btn" onClick={handleSubmit}>
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
                {loadingTasks ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center' }}>Loading tasks...</td>
                  </tr>
                ) : tasks.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center' }}>No tasks found</td>
                  </tr>
                ) : (
                  tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.task}</td>
                      <td>
                        {task.assignedToName || getEmployeeName(task.assignTo ? task.assignTo[0] : null)}
                      </td>
                      <td>{task.assignDate}</td>
                      <td>{task.dueDate}</td>
                      <td className={
                        task.status === "COMPLETED" ? "completed" :
                        task.status === "IN_PROGRESS" ? "in-progress" :
                        task.status === "PENDING" ? "pending" :
                        task.status === "OVERDUE" ? "over" : ""
                      }>
                        {formatStatus(task.status)}
                      </td>
                      <td
                        style={{ cursor: 'pointer', color:
                          task.status === "COMPLETED" ? "#008000" :
                          task.status === "OVERDUE" ? "#883C45" :
                          "#246392"
                        }}
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
          <FaEdit 
            className="edit-icon" 
            onClick={async () => {
              await handleEditClick(task);
              setIsEditModalOpen(true);
              // Refresh tasks after edit modal closes
              const interval = setInterval(async () => {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/overdue', {
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                  }
                });
                const data = await response.json();
                setOverdueTasks(data);
              }, 1000);
              
              // Cleanup interval when modal closes
              const cleanup = () => {
                clearInterval(interval);
                window.removeEventListener('modalClosed', cleanup);
              };
              window.addEventListener('modalClosed', cleanup);
            }} 
          />
          <FaTrash 
            className="delete-icon" 
            onClick={async () => {
              await handleDeleteClick(task.id);
              // Refresh immediately after delete
              const token = localStorage.getItem('token');
              const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/overdue', {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
              });
              const data = await response.json();
              setOverdueTasks(data);
            }} 
          />
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
                {/* <tbody>
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
                </tbody> */}
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
          <FaEdit 
            className="edit-icon" 
            onClick={async () => {
              await handleEditClick(task);
              setIsEditModalOpen(true);
              
              // Set up refresh function
              const refreshData = async () => {
                try {
                  const token = localStorage.getItem('token');
                  const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/completed', {
                    headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json'
                    }
                  });
                  const data = await response.json();
                  setCompletedTasks(data);
                } catch (error) {
                  console.error("Refresh error:", error);
                }
              };

              // Immediate refresh
              await refreshData();

              // Set up interval for periodic refresh
              const refreshInterval = setInterval(refreshData, 3000);
              
              // Clean up when modal closes
              const modalCloseHandler = () => {
                clearInterval(refreshInterval);
                document.removeEventListener('modalClosed', modalCloseHandler);
              };
              document.addEventListener('modalClosed', modalCloseHandler);
            }} 
          />
          <FaTrash 
            className="delete-icon" 
            onClick={async () => {
              await handleDeleteClick(task.id);
              // Refresh after delete
              try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8765/TASKSERVICE/api/tasks/completed', {
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                  }
                });
                const data = await response.json();
                setCompletedTasks(data);
              } catch (error) {
                console.error("Delete refresh error:", error);
              }
            }} 
          />
        </td>
      </tr>
    ))
  )}
</tbody>
              </table>
            </div>
          )}

          
          {isEditModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div  className="modal-header">
                  <h3>Edit Task</h3>
                  <button style={{fontSize:'24px', marginRight:'5px'}} className="close-btn" onClick={() => setIsEditModalOpen(false)}>
                    ×
                  </button>
                </div>

                <div className="modal-body">
                  <label>Task</label>
                  <input
                    type="text"
                    name="taskName"
                    value={editTaskDetails.task}
                    onChange={handleEditInputChange}
                    style={{ borderColor: errors.taskName ? "red" : "" }}
                  />
                  {errors.taskName && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px", marginBottom: "4px" }}>{errors.taskName}</span>}

                  <label>Assign to</label>
                  <select
                    name="assignTo"
                    value={editTaskDetails.assignTo || ''}
                    onChange={(e) => {
                      setEditTaskDetails({...editTaskDetails, assignTo: e.target.value});
                      setErrors({...errors, assignTo: ""});
                    }}
                    style={{ borderColor: errors.assignTo ? "red" : "" }}
                  >
                    <option value="">Select Employee</option>
                    {employees.map((employee) => (
                      <option key={employee.employeeId} value={employee.employeeId}>
                        {employee.name} ({employee.employeeId})
                      </option>
                    ))}
                  </select>
                  {errors.assignTo && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "4px" }}>{errors.assignTo}</span>}

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
                  <select name="status" value={editTaskDetails.status} onChange={handleEditInputChange}>
                    <option value="PENDING">Pending</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="OVERDUE">Overdue</option>
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
                      fontSize:"12px",
                      fontStyle:'italic',
                      color:'#696969'
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
                      fontSize:"12px",
                      fontStyle:'italic',
                      color:'#696969'
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
                        fontSize:"12px",
                      fontStyle:'italic',
                      color:'#696969'
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
                        fontSize:"12px",
                      fontStyle:'italic',
                      color:'#696969'
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
                    fontSize:"12px",
                      fontStyle:'italic',
                      color:'#696969'
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
                        fontSize:"12px",
                      fontStyle:'italic',
                      color:'#696969'
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
    </div>
  );
};

export default Task;