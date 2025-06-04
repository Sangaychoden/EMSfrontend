import React ,{useState}from "react";
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/solid';
import "../css/Task.css"; // Import the CSS file
import { FaTasks, FaTicketAlt,  FaUserPlus,  FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Task = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    const newTask = {
      ...taskDetails,
      id: Date.now(), // unique ID for each task
      attachment: []  // default empty attachments
    };
    
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowSuccessMessage(true);

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


// const handleEditSubmit = () => {
//   const formErrors = validateEditForm(); // Use edit form validation here
//   if (Object.keys(formErrors).length > 0) {
//     setErrors(formErrors);
//     return;
//   }

//   console.log("Edited Task:", editTaskDetails);
//   setErrors({}); // clear errors after success
//   setIsEditModalOpen(false);
// };
const handleEditSubmit = () => {
  const formErrors = validateEditForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === editTaskDetails.id ? editTaskDetails : task
    )
  );

  setIsEditModalOpen(false);
  setErrors({});
};

const handleEditClick = (task) => {
  setEditTaskDetails(task);
  setIsEditModalOpen(true);
};


const [showDeleteModal, setShowDeleteModal] = useState(false);
const [showSuccessPopup, setShowSuccessPopup] = useState(false);
const [taskToDelete, setTaskToDelete] = useState(null);
// const [tasks, setTasks] = useState([]);
const [selectedTask, setSelectedTask] = useState(null);
const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

const handleDetailClick = (tasks) => {
  setSelectedTask(tasks);
  setIsDetailModalOpen(true);
};



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

const [tasks, setTasks] = useState([
  {
    id: 1,
    task: "Add Dark Mode Feature in the company’s website",
    assignedTo: "Karma Dorji",
    assignDate: "2025-04-19",
    dueDate: "2025-04-23",
    status: "In Progress",
    description: `1. Overview
The Dark Mode feature allows users to switch the website's theme to a darker color scheme...`,
    attachment: ["Assignment.pdf", "Task1.png"],
  },
  // Add more tasks here
]);



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
        <div className="content " style={{marginTop:'-600px', overflowX:'hidden'}}>
          <h2>Welcome, HR</h2>
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

          <div className="taskbutton">
          <button className="task-btn" style={{backgroundColor:"#883C45", color:"white"}}> Individual Task</button>
          <button className="task-btn" onClick={() => navigate('/teamtask')}> Team Tasks</button>
          </div>

         {/* Assign Task Button */}
         <button className="assign-task-btn" onClick={() => setIsModalOpen(true)}>  <FaEdit className="assign-icon" /> Assign Task</button>

         {/* Modal */}
         {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Assign Task</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <label>Task</label>
              <input
                type="text"
                name="task"
                value={taskDetails.task}
                onChange={handleInputChange}
                style={{ borderColor: errors.task ? "red" : "" }}
              />
              {errors.task && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.task}</span>}

              <label>Assign to</label>
              <select
                name="assignedTo"
                value={taskDetails.assignedTo}
                onChange={handleInputChange}
                style={{ borderColor: errors.assignedTo ? "red" : "" }}
              >
                <option value="">Name</option>
                {employees.map((emp) => (
                  <option key={emp} value={emp}>{emp}</option>
                ))}
              </select>
              {errors.assignedTo && <span style={{ color: "red", fontSize: "10px", display: "block", marginTop: "-4px",marginBottom:"4px" }}>{errors.assignedTo}</span>}

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
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Over">Over</option>
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
     {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.task}</td>
      <td>{task.assignedTo}</td>
      <td>{task.assignDate}</td>
      <td>{task.dueDate}</td>
      <td className={
        task.status === "Completed" ? "completed" :
        task.status === "In Progress" ? "in-progress" :
        task.status === "Over" ? "over" : ""
      }>
        {task.status}
      </td>
      <td
        style={{ cursor: 'pointer', color:
          task.status === "Completed" ? "#008000" :
          task.status === "Over" ? "#883C45" :
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
  ))}


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
                  fontWeight: 'bold',

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
    textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '400px', height:"170px"
  }}>
    <CheckCircleIcon style={{ width: '80px', height: '80px', color: 'green' }} />
    <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Deleted Successfully</p>
  </div>
  </div>
)}

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
          value={selectedTask.assignedTo}
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
            value={selectedTask.status}
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
</div>
);
};

export default Task;