import React, { useState } from "react";
import "../css/Announce.css"; // Import CSS
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaEdit, FaTrash } from "react-icons/fa";
import { CheckCircleIcon } from '@heroicons/react/solid';

const Announcement = () => {

    const navigate = useNavigate();
    const [announcements, setAnnouncements] = useState([
      {
        id: 1,
        title: "System Upgrade Scheduled on March 20th",
        description:
          "We are upgrading our servers to enhance security and performance. The system will be down from 12:00 AM to 3:00 AM on March 20th. Please save your work in advance.",
      },
      {
        id: 2,
        title: "Office Relocation Update – New Address from April 1st",
        description:
          "Our IT department is moving to a new, larger workspace! The new address is Tech Park, 5th Avenue, Building 12. Please check your emails for seating arrangements.",
      },
      {
        id: 3,
        title: "Cybersecurity Awareness Training – March 25th",
        description:
          "All employees are required to attend a Cybersecurity Awareness Session on March 25th. The session will cover phishing prevention, password security, and data protection best practices.",
      },
    ]);
  

  
    const handleDeleteClick = (id) => {
      setTaskToDelete(id);
      setShowDeleteModal(true);
      console.log("Delete clicked for announcement ID:", id);
    }; 

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
  
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
  
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
  
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [tasks, setTasks] = useState([]);
  
    const handleEditClick = (id) => {
      const toEdit = announcements.find((item) => item.id === id);
      if (toEdit) {
        setEditId(toEdit.id);
        setEditTitle(toEdit.title);
        setEditDescription(toEdit.description);
        setShowEditModal(true);
      }
    };
  
    const handleUpdate = () => {
      const updatedAnnouncements = announcements.map((item) =>
        item.id === editId
          ? { ...item, title: editTitle, description: editDescription }
          : item
      );
      setAnnouncements(updatedAnnouncements);
      setShowEditModal(false);
      setEditId(null);
      setEditTitle("");
      setEditDescription("");
    };
  
      
      const confirmDelete = (id) => {
        if (taskToDelete !== null) {
          const updated = announcements.filter((item) => item.id !== taskToDelete);
          setAnnouncements(updated);
          setTaskToDelete(null);
          setShowDeleteModal(false);
          setShowSuccessPopup(true);
        
        setShowDeleteModal(false);
        setShowSuccessPopup(true);
      
        setTimeout(() => {
          setTasks(tasks.filter(task => task.id !== taskToDelete));
          setShowSuccessPopup(false);
          setTaskToDelete(null);
        }, 1500);
      };
    }


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
  <Sidebar />

      {/* Main Content */}
      <div className="maincontent" >
        {/* Navbar */}
        <div style={{marginRight:'1109px', marginTop:'-20px'}}> 
 <Navbar />
 </div> 

 {/* Tabs */}
 <div className="tabs-container" style={{marginTop:'-600px'}}>
          <button style={{backgroundColor:"#fae8d3", color:"#274552", fontWeight:"800"}}>Announcements</button>
          <button onClick={() => navigate("/events")}>Upcoming Events</button>
        </div>

  {/* Title and Add New button */}
  <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "14px" }}>Latest Announcements</h2>
          <button
           onClick={() => setShowAddModal(true)}
            style={{
              backgroundColor: "#C9DEDD",
              color: "#274552",
              border: "none",
              borderRadius: "6px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "background-color 0.3s",
            }}
          >
           + Add New
          </button>
        </div>

        {/* Announcements list */}
<div style={{border:"1px solid #ddd"}}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding:"20px"}}>
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              style={{
                border: "1px solid #D9D9D9",
                borderRadius: "6px",
                padding: "16px",
                backgroundColor: "#fff",
                position: "relative"
              }}
            >
              {/* Icons */}
              <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
                <FaEdit
                 onClick={() => handleEditClick(announcement.id)}
                  style={{ cursor: "pointer", color: "#274552" }}
                />
                <FaTrash
                 onClick={() => handleDeleteClick(announcement.id)}
                  style={{ cursor: "pointer", color: "#BD2025" }}
                />
              </div>

              {/* Content */}
              <h4 style={{ margin: "0 0 10px", fontSize: "13px", fontWeight: "bold" }}>
                {announcement.title}
              </h4>
              <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.5" }}>
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
   </div>


{/* add announcement modal */}
{showAddModal && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex',
    alignItems: 'center', justifyContent: 'center'
  }}>
    <div style={{
      backgroundColor: 'white', padding: '30px', borderRadius: '7px',
      width: '650px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      position: 'relative'
    }}>
      <button onClick={() => setShowAddModal(false)} style={{
        position: 'absolute', top: '10px', right: '15px',
        background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
      }}>×</button>

      <h3 style={{ marginBottom: '20px', color: '#274552' }}>Add New Announcement</h3>

      <label style={{ fontWeight: 'bold', fontSize: '13px', marginBottom:"20px" }}>Announcement Title</label>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        style={{
          width: '100%', padding: '10px', marginBottom: '25px',
          border: '1px solid #ccc', borderRadius: '5px'
        }}
        placeholder="Enter announcement title"
      />

      <label style={{ fontWeight: 'bold', fontSize: '13px', marginBottom:"20px" }}>Announcement Description</label>
      <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        rows={4}
        style={{
          width: '100%', padding: '10px', border: '1px solid #ccc',
          borderRadius: '5px'
        }}
        placeholder="Enter description"
      />

      <div style={{ marginTop: '40px', marginLeft:"250px" }}>
        {/* <button
          onClick={() => setShowAddModal(false)}
          style={{
            backgroundColor: '#ccc', color: '#333',
            padding: '8px 16px', border: 'none',
            borderRadius: '5px', cursor: 'pointer'
          }}
        >
          Cancel
        </button> */}
        <button
          onClick={() => {
            const newAnnouncement = {
              id: announcements.length + 1,
              title: newTitle,
              description: newDescription
            };
            setAnnouncements([newAnnouncement, ...announcements]);
            setShowAddModal(false);
            setNewTitle("");
            setNewDescription("");
          }}
          style={{
            backgroundColor: '#C9DEDD', color: 'black', fontWeight: 'bold',
            padding: '8px 16px', border: 'none',
            borderRadius: '5px', cursor: 'pointer',
            width: '90px', height: '40px', 
          }}
        >
          Add 
        </button>
      </div>
    </div>
  </div>
)}



        {/* Edit Modal */}
        {showEditModal && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
      backgroundColor: 'white', padding: '30px', borderRadius: '7px',
      width: '650px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      position: 'relative'
    }}>
              <button onClick={() => setShowEditModal(false)} style={{
        position: 'absolute', top: '10px', right: '15px',
        background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
      }}>×</button>
              <h3 style={{ marginBottom: '20px', color: '#274552' }}>Edit Announcement</h3>
              <label style={{ fontWeight: 'bold', fontSize: '13px', marginBottom:"20px" }}>Title</label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{
                  width: '100%', padding: '10px', marginBottom: '25px',
                  border: '1px solid #ccc', borderRadius: '5px'
                }}
              />
              <label>Description</label>
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows={4}
                style={{
                  width: '100%', padding: '10px', marginBottom: '25px',
                  border: '1px solid #ccc', borderRadius: '5px'
                }}
              />
              <button
                onClick={handleUpdate}
                style={{
                  backgroundColor: '#C9DEDD', color: 'black', fontWeight: 'bold',
                  padding: '8px 16px', border: 'none',
                  borderRadius: '5px', cursor: 'pointer',
                  width: '90px', height: '40px',  marginTop: '20px', marginLeft:"250px"
                }}
              >
                Update
              </button>
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
            <p style={{ marginTop: '50px', fontWeight: 'bold' }}>Are you sure you want to delete this Announcement?</p>
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
  );
};

export default Announcement;