import React, { useState } from "react";
import "../css/Employee.css"; // Import the CSS file
import { FaUserEdit, FaTrash, FaUserPlus, FaEdit } from "react-icons/fa";
import { MdDashboard, MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { CheckCircleIcon } from '@heroicons/react/solid';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Employee = () => {
  const employees = [
    { id: 1001, name: "Sangay Choden", email: "sancho@gmail.com", phone: "17890384", title: "IT Officer", type: "Contract" },
    { id: 1002, name: "Sangay Choden", email: "sancho@gmail.com", phone: "17890384", title: "Developer", type: "Regular" },
    { id: 1003, name: "Sangay Choden", email: "sancho@gmail.com", phone: "77890384", title: "Developer", type: "Regular" },
    { id: 1004, name: "Sangay Choden", email: "sancho@gmail.com", phone: "17890384", title: "Developer", type: "Contract" },
    { id: 1005, name: "Sangay Choden", email: "sancho@gmail.com", phone: "77890384", title: "Developer", type: "Contract" },
    { id: 1006, name: "Sangay Choden", email: "sancho@gmail.com", phone: "17890384", title: "IT Officer", type: "Regular" },
    { id: 1007, name: "Sangay Choden", email: "sancho@gmail.com", phone: "17890384", title: "Developer", type: "Regular" },
    { id: 1008, name: "Sangay Choden", email: "sancho@gmail.com", phone: "77890384", title: "Developer", type: "Regular" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    type: "",
  });
  const [errors, setErrors] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      title: "",
      type: "",
    });
    setErrors({});
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      closeModal();
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '12px'
  };

  const [isModalopen, setIsModalopen] = useState(false);
  const [rows, setRows] = useState([{ employeeId: '', name: '', email: '', phone: '', title: '', type: '' }]);
  
  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };
  
  const handleAddRow = () => {
    setRows([...rows, { employeeId: '', name: '', email: '', phone: '', title: '', type: '' }]);
  };
  
  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };
  
  const handleClearAll = () => {
    setRows([{ employeeId: '', name: '', email: '', phone: '', title: '', type: '' }]);
  };
  
  const handleAdd = () => {
    console.log(rows); // Use this to submit your data
    setIsModalOpen(false);
  };


  
  const handleRemoveRow = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    newEmployees(newEmployees);
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

//edit
const [isEditModalOpen, setIsEditModalOpen] = useState(false);
const handleEditClick = () => {
  setIsEditModalOpen(true);
};

// delete
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
        <div style={{ marginRight: '1130px' }}>
          <Navbar />
        </div>

        {/* Dashboard Content */}
        <div className="content" style={{ marginTop: '-600px' }}>
          <h4>Employees</h4>

          {/* Add New Employee Button */}
          <button className="add-employee-btn" onClick={openModal}>
            <FaUserPlus /> Add New Employee
          </button>



{/* Add Employee Modal */}
{isModalOpen && (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }}>
    <div style={{
      width: '800px',
      background: '#fff',
      borderRadius: '8px',
      padding: '30px',
      position: 'relative',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    }}>
      {/* Close Button */}
      <span onClick={() => setIsModalOpen(false)} style={{
        position: 'absolute',
        top: '15px',
        right: '20px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>&times;</span>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px'
      }}>
        <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold' }}>Add Employee</h2>
        <div   onClick={() =>{ 
          setIsModalopen(true);
          setIsModalOpen(false);}}
         style={{
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          color: '#274552',
          cursor: 'pointer',
          fontWeight: '500',
          fontStyle: "italic",
          marginTop: "20px"
        }}>
          Add Multiple Employee <span style={{ fontSize: '15px', marginRight: '8px'}}> +</span>
        </div>
      </div>

      {/* Form */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee ID</label>
          <input type="text" placeholder="Employee ID" style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Name</label>
          <input type="text" placeholder="Employee Name" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
          <input type="email" placeholder="Email" style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone Number</label>
          <input type="text" placeholder="Phone Number" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Title</label>
          <select style={inputStyle}>
            <option>IT Officer</option>
            <option>Manager</option>
            <option>HR</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Type</label>
          <select style={inputStyle}>
            <option>Regular</option>
            <option>Contract</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Achievements</label>
        <textarea placeholder="No achievement" style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          resize: 'none',
          minHeight: '80px',
          fontSize: '12px'
        }}></textarea>
      </div>

      {/* Submit Button */}
      <div style={{ textAlign: 'center' }}>
        <button style={{
          backgroundColor: '#C9DEDD',
          color: 'black',
          border: 'none',
          padding: '10px 30px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500',
          fontSize: '15px',
          fontWeight: 'bold',

        }}>
          Add
        </button>
      </div>
    </div>
  </div>
)}


  {/* Employee Table */}
          <div className="employee-table">
            <table>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Employee Title</th>
                  <th>Employee Type</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.title}</td>
                    <td>{employee.type}</td>
                    <td>...</td>
                    <td>
                      <button className="edit-btn"><FaUserEdit  onClick={handleEditClick}/></button>
                      <button className="delete-btn"><FaTrash onClick={() => handleDeleteClick(tasks.id)} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {isModalopen && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '5px',
      width: '100%',
      maxWidth: '900px',
      height: '450px',
      overflowY: 'auto',
      position: 'relative'
    }}>
      <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Add Multiple Employees</h3>

        {/* Editable Table */}
        <div style={{ border: '1px solid #ccc', borderRadius: '10px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius:"10px", border:"1px solid black" }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
            <th style={thStyle}>Employee ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone Number</th>
            <th style={thStyle}>Employee Title</th>
            <th style={thStyle}>Employee Type</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody >
          {rows.map((row, index) => (
            <tr style={{ border:"none", height:"30px"}} key={index}>
              {['employee_Id', 'name', 'email', 'phone number', 'title', 'type'].map((field) => (
                <td style={tdStyle} key={field}>
                  {field === 'title' || field === 'type' ? (
                    <select
                      value={row[field]}
                      onChange={(e) => handleChange(index, field, e.target.value)}
                      style={{ width: '100%', border:"none" }}
                    >
                      <option value="">Select</option>
                      <option value="Manager">Manager</option>
                      <option value="Staff">Staff</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={row[field]}
                      onChange={(e) => handleChange(index, field, e.target.value)}
                      style={{ width: '100%' , border:"none", fontSize:"12px"}}
                      placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    />
                  )}
                </td>
              ))}
 <td>
   <span>
   <FaEdit className="edit-icon"  /> 

  <FaTrash  style={{ color: '#921B29', cursor: 'pointer', marginRight: '3px' }} onClick={() => handleDeleteRow(index)} />
                  
                </span>
        </td>

            </tr>
          ))}
        </tbody>
      </table>
</div>
      <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          style={{
            padding: '8px 12px',
            backgroundColor: '#274552',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={handleAddRow}
        >
          + Add Row
        </button>

        <span
          onClick={handleClearAll}
          style={{
            fontSize: '12px',
            color: '#274552',
            cursor: 'pointer',
            fontStyle: 'italic'
          }}
        >
          Clear all
        </span>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '10px 30px',
            backgroundColor: '#C9DEDD',
            border: 'none',
            borderRadius: '6px',
            fontWeight:"bold",
            color: 'black',
            cursor: 'pointer',
            fontWeight: 'bold',

          }}
        >
          Add
        </button>
      </div>

      <div
      onClick={() => setIsModalopen(false)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          cursor: 'pointer',
          fontSize: '18px'
        }}
      >
        ✖
      </div>
    </div>
  </div>
)}



{/* Edit Employee Modal */}
{isEditModalOpen && (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }}>
    <div style={{
      width: '800px',
      background: '#fff',
      borderRadius: '8px',
      padding: '30px',
      position: 'relative',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    }}>
      {/* Close Button */}
      <span onClick={() => setIsEditModalOpen(false)} style={{
        position: 'absolute',
        top: '15px',
        right: '20px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>&times;</span>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px'
      }}>
        <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold' }}>Edit Employee</h2>

      </div>

      {/* Form */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee ID</label>
          <input type="text" placeholder="Employee ID" style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Name</label>
          <input type="text" placeholder="Employee Name" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
          <input type="email" placeholder="Email" style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone Number</label>
          <input type="text" placeholder="Phone Number" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Title</label>
          <select style={inputStyle}>
            <option>IT Officer</option>
            <option>Manager</option>
            <option>HR</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Type</label>
          <select style={inputStyle}>
            <option>Regular</option>
            <option>Contract</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Achievements</label>
        <textarea placeholder="No achievement" style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          resize: 'none',
          minHeight: '80px',
          fontSize: '12px'
        }}></textarea>
      </div>

      {/* Submit Button */}
      <div style={{ textAlign: 'center' }}>
        <button style={{
          backgroundColor: '#C9DEDD',
          color: 'black',
          border: 'none',
          padding: '10px 30px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500',
          fontSize: '15px',
          fontWeight: 'bold',
        }}>
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
            <p style={{ marginTop: '50px', fontWeight: 'bold' }}>Are you sure you want to remove this employee?</p>
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
                  // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  fontWeight: 'bold',
                }}
              >
                Remove
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
    textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '350px', height:"150px"
  }}>
    <CheckCircleIcon style={{ width: '60px', height: '60px', color: 'green' }} />
    <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Employee removed successfully</p>
  </div>
  </div>
)}


        </div>
      </div>
    </div>
  );
};

export default Employee;