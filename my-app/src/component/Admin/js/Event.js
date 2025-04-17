import React, { useState } from "react";
import "../css/Announce.css"; // Import CSS
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaEdit, FaTrash, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { CheckCircleIcon } from '@heroicons/react/solid';
import event  from "../images/event.png"; // Adjust the path as necessary

const Event = () => {

    const navigate = useNavigate();

 // Dummy event data
 const [events, setEvents] = useState([
  {
    id: 1,
    title: "Tech Innovation Summit 2025",
    description:
      "Join us for an exclusive tech summit where industry leaders discuss AI advancements, cybersecurity trends, and the future of software development.",
    tasks: [
      "Register attendees",
      "Arrange keynote speakers",
      "Set up presentation equipment",
      "Provide networking opportunities",
    ],
    startDate: "April 10, 2025",
    endDate: "April 12, 2025",
    time: "9:00 am to 2:00 pm",
    venue: "Workplace - Innovation Lab",
    image: event,
  },
  {
    id: 2,
    title: "Tech Innovation Summit 2025",
    description:
      "Join us for an exclusive tech summit where industry leaders discuss AI advancements, cybersecurity trends, and the future of software development.",
    tasks: [
      "Register attendees",
      "Arrange keynote speakers",
      "Set up presentation equipment",
      "Provide networking opportunities",
    ],
    startDate: "April 10, 2025",
    endDate: "April 12, 2025",
    time: "9:00 am to 2:00 pm",
    venue: "Workplace - Innovation Lab",
    image: event,
  },
]);

// const handleDelete = (id) => {
//   setEvents(events.filter(event => event.id !== id));
// }; 

const [showAddModal, setShowAddModal] = useState(false);
const [newEvent, setNewEvent] = useState({
  title: '',
  description: '',
  tasks: '',
  startDate: '',
  endDate: '',
  time: '',
  venue: '',
  image: event
});

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewEvent({ ...newEvent, image: reader.result });
    };
    reader.readAsDataURL(file);
  }
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
  
const [selectedEvent, setSelectedEvent] = useState(null); // For holding the selected event

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null); // For holding the selected event
// Add these for editing
const [editId, setEditId] = useState(null);
const [editTitle, setEditTitle] = useState('');
const [editDescription, setEditDescription] = useState('');
const [editSchedule, setEditSchedule] = useState('');
const [editVenue, setEditVenue] = useState('');


  const handleEdit = (id) => {
    const toEdit = events.find((item) => item.id === id);
    if (toEdit) {
      setEditId(toEdit.id);
      setEditTitle(toEdit.title);
      setEditDescription(toEdit.description);
      setEditSchedule(toEdit.schedule);
      setEditVenue(toEdit.venue);

       setSelectedEvent(event);
      setShowEditModal(true);
    }
  };
  

  const handleUpdateEvent = () => {
    const updatedEvents = events.map((item) =>
      item.id === editId
        ? { ...item, title: editTitle, description: editDescription, schedule: editSchedule, venue: editVenue }
        : item
    );
    setEvents(updatedEvents);
    setShowEditModal(false);
    setEditId(null);
    setEditTitle('');
    setEditDescription('');
    setEditSchedule('');
    setEditVenue('');
  };

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleAddEvent = () => {
    setEvents(prev => [
      ...prev,
      {
        ...newEvent,
        id: Date.now(),
        tasks: newEvent.tasks.split(',').map(task => task.trim()),
      },
    ]);
    setShowAddModal(false);
    setNewEvent({
      title: '',
      description: '',
      tasks: '',
      startDate: '',
      endDate: '',
      time: '',
      venue: '',
      image: event,
    });
  };


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
  <Sidebar />

      {/* Main Content */}
      <div className="maincontent" >
        {/* Navbar */}
        <div style={{marginRight:'1093px', marginTop:'-20px', zIndex:'10000'}}> 
 <Navbar />
 </div> 

 {/* Tabs */}
 <div className="tabs-container" style={{marginTop:'-600px'}}>
          <button onClick={() => navigate("/announcements")}>Announcements</button>
          <button style={{backgroundColor:"#fae8d3", color:"#274552", fontWeight:"800"}}>Upcoming Events</button>
        </div>

 {/* Add New Button */}
 <div style={{ textAlign: "right", marginRight: "30px", marginTop: "-60px" }}>
  
          <button onClick={() => setShowAddModal(true)}
           style={{
            backgroundColor: "#C9DEDD",
            border: "none",
            borderRadius: "5px",
            padding: "8px 15px",
            color: "#274552",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "background-color 0.3s",
          }}>
            + Add New
          </button>
        </div>
        <h2 style={{ margin: 0, fontSize: "14px",marginTop:"20px" }}>Events</h2>



        {/* Events List */}
        <div style={{ padding: "20px"}}>
          {events.map(event => (
            <div key={event.id} style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundColor: "#fff",
              position: "relative",
              overflow: "hidden",
              zIndex: -1,
            }}>
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                style={{ height: "200px",width:"98%", marginTop: "35px", marginLeft:"15px", borderRadius:"8px" }}
              />

              {/* Edit and Delete Icons */}
              <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
                <FaEdit style={{ color: "#274552", cursor: "pointer" }}   onClick={() => handleEdit(event)}
                  />
                <FaTrash style={{ color: "#921B29", cursor: "pointer" }} onClick={() => handleDelete(event.id)} />
              </div>

              {/* Event Details */}
              <div style={{ padding: "20px" }}>
                <h3 style={{ marginBottom: "10px", color: "#274552" ,fontSize:"17px", fontWeight:"bold"}}>{event.title}</h3>
                <p style={{ marginBottom: "15px", color: "#555"  ,fontSize:"15px"}}>{event.description}</p>

                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ fontSize:"15px"}}>List of Tasks:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "50px", color: "#555" ,fontSize:"15px", gap:"15px"}}> 
                    {event.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "10px", color: "#555" ,fontSize:"15px" }}>
                  <strong style={{ fontSize:"15px"}}>Event Schedule:</strong>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "5px",fontSize:"14px", marginLeft:"40px" }}>
                    <FaCalendarAlt style={{ marginRight: "8px", color: "#274552" }} />
                    <span>Start Date: {event.startDate}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "5px", marginLeft:"40px"  }}>
                    <FaCalendarAlt style={{ marginRight: "8px", color: "#274552" }} />
                    <span>End Date: {event.endDate}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "5px",fontSize:"14px",marginTop:"5px", marginLeft:"40px" }}> 
                    <FaClock style={{ marginRight: "8px", color: "#274552" }} />
                    <span>Time: {event.time}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", color: "#555" ,fontSize:"14px"}}>
                  {/* <FaMapMarkerAlt style={{ marginRight: "8px", color: "#274552" }} /> */}
                  <span>Venue: {event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


{/* add event */}
{showAddModal && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: 'white', padding: '30px', borderRadius: '10px', width: '90%', maxWidth: '1000px',height:"695px",
      display: 'flex', flexDirection: 'column', position: 'relative', borderRadius: '5px',
    }}>

      {/* Close Button */}
      <button
        onClick={() => setShowAddModal(false)}
        style={{
          position: 'absolute', top: '10px', right: '15px',
          background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
        }}
      >×</button>

      <h3 style={{ marginBottom: '20px', color: '#274552' }}>Add New Event</h3>

      {/* Two-Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Description</label>
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
            rows="4"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Tasks </label>
          <input
            type="text"
            placeholder="Tasks(comma separated)"
            value={newEvent.tasks}
            onChange={e => setNewEvent({ ...newEvent, tasks: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Venue</label>
          <input
            type="text"
            placeholder="Venue"
            value={newEvent.venue}
            onChange={e => setNewEvent({ ...newEvent, venue: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Start Date</label>
          <input
            type="date"
            value={newEvent.startDate}
            onChange={e => setNewEvent({ ...newEvent, startDate: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>End Date</label>
          <input
            type="date"
            value={newEvent.endDate}
            onChange={e => setNewEvent({ ...newEvent, endDate: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Time</label>
          <input
            type="text"
            placeholder="Time"
            value={newEvent.time}
            onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNewEvent(prev => ({ ...prev, image: reader.result }));
                };
                reader.readAsDataURL(file);
              }
            }}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          {/* Preview */}
          {newEvent.image && (
            <img
              src={newEvent.image}
              alt="Preview"
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
            />
          )}
        </div>
      </div>

      {/* Add Button */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={() => {
            setEvents(prev => [
              ...prev,
              {
                ...newEvent,
                id: Date.now(),
                tasks: newEvent.tasks.split(',').map(task => task.trim()),
              },
            ]);
            setShowAddModal(false);
            setNewEvent({
              title: '',
              description: '',
              tasks: '',
              startDate: '',
              endDate: '',
              time: '',
              venue: '',
              image: null,
            });
          }}
          style={{
            padding: '10px 25px',
            backgroundColor: '#C9DEDD',
            color: 'black',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',

            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Add Event
        </button>
      </div>
    </div>
  </div>
)}



{/* Edit Event */}
{showEditModal && editedEvent && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: 'white', padding: '30px', borderRadius: '10px', width: '90%', maxWidth: '1000px', height: "695px",
      display: 'flex', flexDirection: 'column', position: 'relative',
    }}>

      {/* Close Button */}
      <button
        onClick={() => setShowEditModal(false)}
        style={{
          position: 'absolute', top: '10px', right: '15px',
          background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
        }}
      >×</button>

      <h3 style={{ marginBottom: '20px', color: '#274552' }}>Edit Event</h3>

      {/* Two-Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Title</label>
          <input
            type="text"
            value={editedEvent.title}
            onChange={e => setEditedEvent({ ...editedEvent, title: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Description</label>
          <textarea
            rows="4"
            value={editedEvent.description}
            onChange={e => setEditedEvent({ ...editedEvent, description: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Tasks</label>
          <input
            type="text"
            value={editedEvent.tasks}
            onChange={e => setEditedEvent({ ...editedEvent, tasks: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Venue</label>
          <input
            type="text"
            value={editedEvent.venue}
            onChange={e => setEditedEvent({ ...editedEvent, venue: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Start Date</label>
          <input
            type="date"
            value={editedEvent.startDate}
            onChange={e => setEditedEvent({ ...editedEvent, startDate: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>End Date</label>
          <input
            type="date"
            value={editedEvent.endDate}
            onChange={e => setEditedEvent({ ...editedEvent, endDate: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Time</label>
          <input
            type="text"
            value={editedEvent.time}
            onChange={e => setEditedEvent({ ...editedEvent, time: e.target.value })}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setEditedEvent(prev => ({ ...prev, image: reader.result }));
                };
                reader.readAsDataURL(file);
              }
            }}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          {editedEvent.image && (
            <img
              src={editedEvent.image}
              alt="Preview"
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
            />
          )}
        </div>
      </div>

      {/* Update Button */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={handleUpdateEvent}
          style={{
            padding: '10px 25px',
            backgroundColor: '#C9DEDD',
            color: 'black',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Update Event
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
  );
};

export default Event;