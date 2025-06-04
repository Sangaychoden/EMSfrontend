import React, { useState,useEffect  } from "react";
import "../css/Employee.css"; // Import the CSS file
import { FaUserEdit, FaTrash, FaUserPlus, FaEdit } from "react-icons/fa";
import { MdDashboard, MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { CheckCircleIcon } from '@heroicons/react/solid';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
const [editingEmployee, setEditingEmployee] = useState(null);
// Add the edit modal state here
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  // const [isModalOpen, setIsModalOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

  
   const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    phoneNumber: "",
    employeeTitle: "",
    employeeType: "",
    achievements: "",
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
  const [rows, setRows] = useState([{
  employeeId: '',
  name: '',
  email: '',
  phoneNumber: '',
  employeeTitle: '',
  employeeType: '',
  achievements: ''
}]);
// Add useEffect to fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/all', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchEmployees();
  }, []); 
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const validateForm = () => {
    const newErrors = {};
    if (!formData.employeeId) newErrors.employeeId = "Employee ID is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone is required";
    if (!formData.employeeTitle) newErrors.employeeTitle = "Title is required";
    if (!formData.employeeType) newErrors.employeeType = "Type is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add employee');
      }

      // Show success notification
      toast.success('Employee added successfully!', {
        position: "top-center",
        autoClose: 3000,
      });

      // Refresh the employee list
      const updatedResponse = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/all', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const updatedData = await updatedResponse.json();
      setEmployees(updatedData);

      closeModal();
    } catch (error) {
      console.error('Error adding employee:', error);
      toast.error(`Error: ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
      });
    }
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
 
  
  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };
  

  const handleAddRow = () => {
  setRows([...rows, {
    employeeId: '',
    name: '',
    email: '',
    phoneNumber: '',
    employeeTitle: '',
    employeeType: '',
    achievements: ''
  }]);
};
  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };
  
  const handleClearAll = () => {
    setRows([{ employeeId: '', name: '', email: '', phone: '', title: '', type: '' }]);
  };

const handleAdd = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error("No token found");

    const employeesData = rows.map(row => ({
      employeeId: row.employeeId,
      name: row.name,
      email: row.email,
      phoneNumber: row.phoneNumber,
      employeeTitle: row.employeeTitle,
      employeeType: row.employeeType,
      achievements: row.achievements
    }));

    const response = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/bulk', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeesData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Bulk add failed');
    }

    // Handle partial success
    if (result.errors?.length > 0) {
      toast.warning(
        `Successfully added ${result.successCount} employees. ${result.errors.length} errors occurred.`,
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    } else {
      toast.success(`Successfully added ${result.successCount} employees!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }

    // Refresh employee list
    const updatedResponse = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/all', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const updatedData = await updatedResponse.json();
    setEmployees(updatedData);

    setIsModalopen(false);
  } catch (error) {
    console.error('Bulk add error:', error);
    toast.error(`Error: ${error.message}`, {
  position: "top-center",
  autoClose: 5000,
});
  }
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


const handleEditClick = (employee) => {
  setEditingEmployee(employee);
  setIsEditModalOpen(true);
};

// Add this function for handling edit form submission
const handleEditSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await fetch(`http://localhost:8765/EMSUSERMICROSERVICE/api/employee/update/${editingEmployee.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingEmployee)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update employee');
    }

    toast.success('Employee updated successfully!', {
      position: "top-center",
      autoClose: 3000,
    });

    // Refresh employee list
    const updatedResponse = await fetch('http://localhost:8765/EMSUSERMICROSERVICE/api/employee/all', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const updatedData = await updatedResponse.json();
    setEmployees(updatedData);

    setIsEditModalOpen(false);
  } catch (error) {
    console.error('Error updating employee:', error);
    toast.error(`Error: ${error.message}`, {
      position: "top-center",
      autoClose: 5000,
    });
  }
};

// delete
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [tasks, setTasks] = useState([]);

const handleDeleteClick = (employeeId) => {
    setTaskToDelete(employeeId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setShowDeleteModal(false);
    
    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error("No authentication token found");

      const response = await fetch(`http://localhost:8765/EMSUSERMICROSERVICE/api/employee/${taskToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }

      // Update UI state
      setEmployees(employees.filter(emp => emp.id !== taskToDelete));
      
      toast.success('Employee deleted successfully!', {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Delete error:', error);
      toast.error(`Error: ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="dashboard-container">
       {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    <ToastContainer
  position="top-center"  // Base position
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastClassName="centered-toast"
  bodyClassName="centered-toast-body"
/>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div style={{ marginRight: '1130px' }}>
          <Navbar />
        </div>

        {/* Dashboard Content */}
        <div className="content" style={{ marginTop: '-650px', marginLeft:'-150px' }}>
          <h4>Employees</h4>

          {/* Add New Employee Button */}
          <button className="add-employee-btn" onClick={openModal}>
            <FaUserPlus /> Add New Employee
          </button>



{/* Add Employee Modal */}
 {/* Updated Add Employee Modal */}
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
                <span onClick={closeModal} style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>&times;</span>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold' }}>Add Employee</h2>
                  <div onClick={() => { 
                    setIsModalopen(true);
                    setIsModalOpen(false);
                  }} style={{
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

                {/* Updated Form with proper field names */}
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee ID</label>
                      <input 
                        type="text" 
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        placeholder="Employee ID" 
                        style={inputStyle} 
                      />
                      {errors.employeeId && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employeeId}</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Employee Name" 
                        style={inputStyle} 
                      />
                      {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email" 
                        style={inputStyle} 
                      />
                      {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone Number</label>
                      <input 
                        type="text" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone Number" 
                        style={inputStyle} 
                      />
                      {errors.phoneNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phoneNumber}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Title</label>
                      <select 
                        name="employeeTitle"
                        value={formData.employeeTitle}
                        onChange={handleInputChange}
                        style={inputStyle}
                      >
                        <option value="">Select Title</option>
                        <option value="IT Officer">IT Officer</option>
                        <option value="Manager">Manager</option>
                        <option value="HR">HR</option>
                      </select>
                      {errors.employeeTitle && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employeeTitle}</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Type</label>
                      <select 
                        name="employeeType"
                        value={formData.employeeType}
                        onChange={handleInputChange}
                        style={inputStyle}
                      >
                        <option value="">Select Type</option>
                        <option value="Regular">Regular</option>
                        <option value="Contract">Contract</option>
                      </select>
                      {errors.employeeType && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employeeType}</span>}
                    </div>
                  </div>

                
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Achievements</label>
                    <textarea 
                      name="achievements"  // Add name attribute
                      value={formData.achievements}  // Bind to state
                      onChange={handleInputChange}  // Use the same handler
                      placeholder="No achievement" 
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        resize: 'none',
                        minHeight: '80px',
                        fontSize: '12px'
                      }}
                    ></textarea>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button 
                      type="submit"
                      style={{
                        backgroundColor: '#C9DEDD',
                        color: 'black',
                        border: 'none',
                        padding: '10px 30px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '15px',
                      }}
                    >
                      Add
                    </button>
                  </div>
                </form>
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
                  {/* <th>Details</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.employeeTitle}</td>
                    <td>{employee.employeeType}</td>
                    {/* <td>...</td> */}
                    {/* <td>
                      <button className="edit-btn"><FaUserEdit  onClick={handleEditClick}/></button>
                      <button className="delete-btn"><FaTrash onClick={() => handleDeleteClick(tasks.id)} /></button>
                    </td> */}
                    <td>
                        <button className="edit-btn" onClick={() => handleEditClick(employee)}>
    <FaUserEdit />
  </button>
    {/* <button className="edit-btn"><FaUserEdit onClick={handleEditClick}/></button> */}
    <button className="delete-btn" onClick={() => handleDeleteClick(employee.id)}>
      <FaTrash />
    </button>
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
    {/* <th style={thStyle}>Actions</th> */}
  </tr>
</thead>
        <tbody >
          {rows.map((row, index) => (
            <tr style={{ border:"none", height:"30px"}} key={index}>
            {['employeeId', 'name', 'email', 'phoneNumber', 'employeeTitle', 'employeeType'].map((field) => (
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
 {/* <td>
   <span>
   <FaEdit className="edit-icon"  /> 

  <FaTrash  style={{ color: '#921B29', cursor: 'pointer', marginRight: '3px' }} onClick={() => handleDeleteRow(index)} />
                  
                </span>
        </td> */}

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


{isEditModalOpen && editingEmployee && (
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
      <span onClick={() => setIsEditModalOpen(false)} style={{
        position: 'absolute',
        top: '15px',
        right: '20px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>&times;</span>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px'
      }}>
        <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold' }}>Edit Employee</h2>
      </div>

      <form onSubmit={handleEditSubmit}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee ID</label>
            <input 
              type="text" 
              value={editingEmployee.employeeId}
              onChange={(e) => setEditingEmployee({...editingEmployee, employeeId: e.target.value})}
              style={inputStyle} 
              disabled
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Name</label>
            <input 
              type="text" 
              value={editingEmployee.name}
              onChange={(e) => setEditingEmployee({...editingEmployee, name: e.target.value})}
              style={inputStyle} 
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
            <input 
              type="email" 
              value={editingEmployee.email}
              onChange={(e) => setEditingEmployee({...editingEmployee, email: e.target.value})}
              style={inputStyle} 
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone Number</label>
            <input 
              type="text" 
              value={editingEmployee.phoneNumber}
              onChange={(e) => setEditingEmployee({...editingEmployee, phoneNumber: e.target.value})}
              style={inputStyle} 
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Title</label>
            <select 
              value={editingEmployee.employeeTitle}
              onChange={(e) => setEditingEmployee({...editingEmployee, employeeTitle: e.target.value})}
              style={inputStyle}
            >
              <option value="IT Officer">IT Officer</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Employee Type</label>
            <select 
              value={editingEmployee.employeeType}
              onChange={(e) => setEditingEmployee({...editingEmployee, employeeType: e.target.value})}
              style={inputStyle}
            >
              <option value="Regular">Regular</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Achievements</label>
          <textarea 
            value={editingEmployee.achievements}
            onChange={(e) => setEditingEmployee({...editingEmployee, achievements: e.target.value})}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              resize: 'none',
              minHeight: '80px',
              fontSize: '12px'
            }}
          ></textarea>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            type="submit"
            style={{
              backgroundColor: '#C9DEDD',
              color: 'black',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '15px',
            }}
          >
            Update
          </button>
        </div>
      </form>
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