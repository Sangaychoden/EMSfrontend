// import React, { useState,useEffect } from "react";
// import "../css/Announce.css"; // Import CSS
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom"; // For navigation
// import { FaEdit, FaTrash, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
// import { CheckCircleIcon } from '@heroicons/react/solid';
// import event  from "../images/event.png"; // Adjust the path as necessary

// const Event = () => {

//     const navigate = useNavigate();
//     const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null)


// useEffect(() => {
//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Authentication token not found');
//       }

//       // Corrected API endpoint URL
//       const response = await fetch('http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events/upcoming', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       // Check if response is JSON
//       const contentType = response.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         const text = await response.text();
//         throw new Error(`Expected JSON but got: ${text.substring(0, 100)}...`);
//       }

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('API response:', data); // For debugging

//       // Map API data to component's format
//       const formattedEvents = data.map(event => ({
//         id: event.id,
//         title: event.eventTitle,
//         description: event.eventDescription,
//         tasks: event.projectSchedule ? 
//           (typeof event.projectSchedule === 'string' ? 
//            event.projectSchedule.split('\n') : 
//            event.projectSchedule) : 
//           [],
//         startDate: formatDate(event.startDate),
//         endDate: formatDate(event.endDate),
//         time: `${formatTime(event.startTime)} - ${formatTime(event.endTime)}`,
//         venue: event.venue,
//         image: event.photoUrl ? 
//           `http://localhost:8765/ANNOUNCEMENTSANDEVENTS/event-photos/${event.photoUrl}` : 
//           event
//       }));

//       setEvents(formattedEvents);
//     } catch (err) {
//       console.error('Fetch error:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchEvents();
// }, []);

// // const handleDelete = (id) => {
// //   setEvents(events.filter(event => event.id !== id));
// // }; 
//  // Helper function to format date
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };
// // Helper function to format time
//   const formatTime = (timeString) => {
//     if (!timeString) return '';
//     const time = timeString.split(':');
//     const hours = parseInt(time[0]);
//     const minutes = time[1];
//     const ampm = hours >= 12 ? 'pm' : 'am';
//     const formattedHours = hours % 12 || 12;
//     return `${formattedHours}:${minutes} ${ampm}`;
//   };

//   // Rest of your existing state and handlers remain the same
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     description: '',
//     tasks: '',
//     startDate: '',
//     endDate: '',
//     time: '',
//     venue: '',
//     image: event
//   });


// const handleImageUpload = (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewEvent({ ...newEvent, image: reader.result });
//     };
//     reader.readAsDataURL(file);
//   }
// };




  
//   const [tasks, setTasks] = useState([]);
  
//   const handleDeleteClick = (eventId) => {
//     setTaskToDelete(eventId); // store the event ID to delete
//     setShowDeleteModal(true); // show modal
//   };
  
  
//   const confirmDelete = () => {
//     setShowDeleteModal(false);
//     setShowSuccessPopup(true);
  
//     setTimeout(() => {
//       setEvents((prevEvents) => prevEvents.filter(event => event.id !== taskToDelete));
//       setShowSuccessPopup(false);
//       setTaskToDelete(null);
//     }, 1500);
//   };
  



// const [selectedEvent, setSelectedEvent] = useState(null); // For holding the selected event

//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editedEvent, setEditedEvent] = useState(null); // For holding the selected event

// // State declarations
// const [showDeleteModal, setShowDeleteModal] = useState(false);
// const [taskToDelete, setTaskToDelete] = useState(null); // now used for event ID
// const [showSuccessPopup, setShowSuccessPopup] = useState(false);



// const handleEdit = (id) => {
//   const toEdit = events.find((item) => item.id === id);
//   if (toEdit) {
//     setEditedEvent({ ...toEdit });
//     setSelectedEvent(toEdit);
//     setShowEditModal(true);
//   }
// };

  
// const handleUpdateEvent = () => {
//   const updatedEvents = events.map((item) =>
//     item.id === editedEvent.id ? editedEvent : item
//   );
//   setEvents(updatedEvents);
//   setShowEditModal(false);
//   setSelectedEvent(null);
//   setEditedEvent(null);
// };


//   const handleDelete = (id) => {
//     const updatedEvents = events.filter((event) => event.id !== id);
//     setEvents(updatedEvents);
//   };

//   const handleAddEvent = () => {
//     setEvents(prev => [
//       ...prev,
//       {
//         ...newEvent,
//         id: Date.now(),
//         tasks: newEvent.tasks.split(',').map(task => task.trim()),
//       },
//     ]);
//     setShowAddModal(false);
//     setNewEvent({
//       title: '',
//       description: '',
//       tasks: '',
//       startDate: '',
//       endDate: '',
//       time: '',
//       venue: '',
//       image: event,
//     });
//   };


//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//   <Sidebar />

//       {/* Main Content */}
//       <div className="maincontent" >
//         {/* Navbar */}
//         <div style={{marginRight:'1093px', marginTop:'-20px', zIndex:'10000]'}}> 
//  <Navbar />
//  </div> 

//  {/* Tabs */}
//  {/* {/* Tabs */}
//         <div className="tabs-container" style={{marginTop:'-600px'}}>
//           <button onClick={() => navigate("/announcements")}>Announcements</button>
//           <button style={{backgroundColor:"#fae8d3", color:"#274552", fontWeight:"800"}}>Upcoming Events</button>
//         </div>

//         {/* Add New Button */}
//         <div style={{ textAlign: "right", marginRight: "30px", marginTop: "-60px" }}>
//           <button onClick={() => setShowAddModal(true)}
//             style={{
//               backgroundColor: "#C9DEDD",
//               border: "none",
//               borderRadius: "5px",
//               padding: "8px 15px",
//               color: "#274552",
//               fontWeight: "600",
//               cursor: "pointer",
//               boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//               transition: "background-color 0.3s",
//             }}>
//             + Add New
//           </button>
//         </div>
//         <h2 style={{ margin: 0, fontSize: "14px",marginTop:"20px" }}>Events</h2>

//         {/* Events List */}
//         <div style={{ padding: "20px"}}>
//           {events.map(event => (
//             <div key={event.id} style={{
//               border: "1px solid #e0e0e0",
//               borderRadius: "8px",
//               marginBottom: "20px",
//               backgroundColor: "#fff",
//               position: "relative",
//               overflow: "hidden",
//               zIndex: 10,
//             }}>
//               {/* Event Image */}
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 style={{ height: "200px",width:"98%", marginTop: "35px", marginLeft:"15px", borderRadius:"8px" }}
//               />

//               {/* Edit and Delete Icons */}
//               <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
//                 <FaEdit style={{ color: "#274552", cursor: "pointer" }} onClick={() => handleEdit(event.id)} />
//                 <FaTrash style={{ color: "#921B29", cursor: "pointer" }} onClick={() => handleDeleteClick(event.id)} />
//               </div>

//               {/* Event Details */}
//               <div style={{ padding: "20px" }}>
//                 <h3 style={{ marginBottom: "10px", color: "#274552" ,fontSize:"17px", fontWeight:"bold"}}>{event.title}</h3>
//                 <p style={{ marginBottom: "15px", color: "#555"  ,fontSize:"15px"}}>{event.description}</p>

//                 <div style={{ marginBottom: "15px" }}>
//                   <strong style={{ fontSize:"15px"}}>List of Tasks:</strong>
//                   <ul style={{ marginTop: "10px", paddingLeft: "50px", color: "#555" ,fontSize:"15px", gap:"15px"}}> 
//                     {event.tasks.map((task, index) => (
//                       <li key={index}>{task}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div style={{ marginBottom: "10px", color: "#555" ,fontSize:"15px" }}>
//                   <strong style={{ fontSize:"15px"}}>Event Schedule:</strong>
//                   <div style={{ display: "flex", alignItems: "center", marginTop: "5px",fontSize:"14px", marginLeft:"40px" }}>
//                     <FaCalendarAlt style={{ marginRight: "8px", color: "#274552" }} />
//                     <span>Start Date: {event.startDate}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", marginTop: "5px", marginLeft:"40px"  }}>
//                     <FaCalendarAlt style={{ marginRight: "8px", color: "#274552" }} />
//                     <span>End Date: {event.endDate}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", marginTop: "5px",fontSize:"14px",marginTop:"5px", marginLeft:"40px" }}> 
//                     <FaClock style={{ marginRight: "8px", color: "#274552" }} />
//                     <span>Time: {event.time}</span>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center", color: "#555" ,fontSize:"14px"}}>
//                   <span>Venue: {event.venue}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div> 


// {/* add event */}
// {showAddModal && (
//   <div style={{
//     position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//     backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
//     zIndex: 1000
//   }}>
//     <div style={{
//       backgroundColor: 'white', padding: '30px', borderRadius: '10px', width: '90%', maxWidth: '1000px',height:"695px",
//       display: 'flex', flexDirection: 'column', position: 'relative', borderRadius: '5px',
//     }}>

//       {/* Close Button */}
//       <button
//         onClick={() => setShowAddModal(false)}
//         style={{
//           position: 'absolute', top: '10px', right: '15px',
//           background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
//         }}
//       >×</button>

//       <h3 style={{ marginBottom: '20px', color: '#274552' }}>Add New Event</h3>

//       {/* Two-Column Grid */}
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

//         {/* Left Column */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Title</label>
//           <input
//             type="text"
//             placeholder="Title"
//             value={newEvent.title}
//             onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Description</label>
//           <textarea
//             placeholder="Description"
//             value={newEvent.description}
//             onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
//             rows="4"
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Tasks </label>
//           <input
//             type="text"
//             placeholder="Tasks(comma separated)"
//             value={newEvent.tasks}
//             onChange={e => setNewEvent({ ...newEvent, tasks: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Venue</label>
//           <input
//             type="text"
//             placeholder="Venue"
//             value={newEvent.venue}
//             onChange={e => setNewEvent({ ...newEvent, venue: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>

//         {/* Right Column */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Start Date</label>
//           <input
//             type="date"
//             value={newEvent.startDate}
//             onChange={e => setNewEvent({ ...newEvent, startDate: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>End Date</label>
//           <input
//             type="date"
//             value={newEvent.endDate}
//             onChange={e => setNewEvent({ ...newEvent, endDate: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Time</label>
//           <input
//             type="text"
//             placeholder="Time"
//             value={newEvent.time}
//             onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Upload Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               if (file) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                   setNewEvent(prev => ({ ...prev, image: reader.result }));
//                 };
//                 reader.readAsDataURL(file);
//               }
//             }}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           {/* Preview */}
//           {newEvent.image && (
//             <img
//               src={newEvent.image}
//               alt="Preview"
//               style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Add Button */}
//       <div style={{ marginTop: '30px', textAlign: 'center' }}>
//         <button
//           onClick={() => {
//             setEvents(prev => [
//               ...prev,
//               {
//                 ...newEvent,
//                 id: Date.now(),
//                 tasks: newEvent.tasks.split(',').map(task => task.trim()),
//               },
//             ]);
//             setShowAddModal(false);
//             setNewEvent({
//               title: '',
//               description: '',
//               tasks: '',
//               startDate: '',
//               endDate: '',
//               time: '',
//               venue: '',
//               image: null,
//             });
//           }}
//           style={{
//             padding: '10px 25px',
//             backgroundColor: '#C9DEDD',
//             color: 'black',
//             border: 'none',
//             borderRadius: '6px',
//             fontWeight: 'bold',

//             fontSize: '14px',
//             cursor: 'pointer'
//           }}
//         >
//           Add Event
//         </button>
//       </div>
//     </div>
//   </div>
// )}



// {/* Edit Event */}
// {showEditModal && selectedEvent && (
//   <div style={{
//     position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//     backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
//     zIndex: 1000
//   }}>
//     <div style={{
//       backgroundColor: 'white', padding: '30px', borderRadius: '10px', width: '90%', maxWidth: '1000px', height: "695px",
//       display: 'flex', flexDirection: 'column', position: 'relative',
//     }}>

//       {/* Close Button */}
//       <button
//         onClick={() => setShowEditModal(false)}
//         style={{
//           position: 'absolute', top: '10px', right: '15px',
//           background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
//         }}
//       >×</button>

//       <h3 style={{ marginBottom: '20px', color: '#274552' }}>Edit Event</h3>

//       {/* Two-Column Grid */}
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

//         {/* Left Column */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Title</label>
//           <input
//             type="text"
//             value={editedEvent.title}
//             onChange={e => setEditedEvent({ ...editedEvent, title: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Description</label>
//           <textarea
//             rows="4"
//             value={editedEvent.description}
//             onChange={e => setEditedEvent({ ...editedEvent, description: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Tasks</label>
//           <input
//             type="text"
//             value={editedEvent.tasks}
//             onChange={e => setEditedEvent({ ...editedEvent, tasks: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Venue</label>
//           <input
//             type="text"
//             value={editedEvent.venue}
//             onChange={e => setEditedEvent({ ...editedEvent, venue: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>

//         {/* Right Column */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Start Date</label>
//           <input
//             type="date"
//             value={editedEvent.startDate}
//             onChange={e => setEditedEvent({ ...editedEvent, startDate: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>End Date</label>
//           <input
//             type="date"
//             value={editedEvent.endDate}
//             onChange={e => setEditedEvent({ ...editedEvent, endDate: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Time</label>
//           <input
//             type="text"
//             value={editedEvent.time}
//             onChange={e => setEditedEvent({ ...editedEvent, time: e.target.value })}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Upload Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               if (file) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                   setEditedEvent(prev => ({ ...prev, image: reader.result }));
//                 };
//                 reader.readAsDataURL(file);
//               }
//             }}
//             style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />

//           {editedEvent.image && (
//             <img
//               src={editedEvent.image}
//               alt="Preview"
//               style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Update Button */}
//       <div style={{ marginTop: '30px', textAlign: 'center' }}>
//         <button
//           onClick={handleUpdateEvent}
//           style={{
//             padding: '10px 25px',
//             backgroundColor: '#C9DEDD',
//             color: 'black',
//             border: 'none',
//             borderRadius: '6px',
//             fontWeight: 'bold',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }}
//         >
//           Update Event
//         </button>
//       </div>
//     </div>
//   </div>
// )}




//       {/* Delete Confirmation Modal */}
//     {showDeleteModal && (
//         <div style={{
//           position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//           backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
//         }}>
       
//           <div style={{
//             backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '450px', height:"200px"
//           }}>
//                <button className="close-btn" onClick={() => setShowDeleteModal(false)} style={{
//             position: 'absolute', marginLeft:"180px"
//           }}>
//           ×
//         </button>
//             <p style={{ marginTop: '50px', fontWeight: 'bold' }}>Are you sure you want to delete this Event?</p>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '140px' }}>
//               <button
//                 onClick={confirmDelete}
//                 style={{
//                   backgroundColor: '#D1E7E0',
//                   padding: '10px 20px',
//                   marginTop: '30px',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                 }}
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 style={{
//                   backgroundColor: '#A32020',
//                   color: 'white',
//                   padding: '10px 20px',
//                   marginTop: '30px',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

// {/* Success Popup */}
// {showSuccessPopup && (
//      <div style={{
//       position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//       backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
//     }}>
//   <div style={{
//     position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//     backgroundColor: 'white', padding: '20px 40px', borderRadius: '8px',
//     textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '350px', height:"150px"
//   }}>
//     <CheckCircleIcon style={{ width: '60px', height: '60px', color: 'green' }} />
//     <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Deleted Successfully</p>
//   </div>
//   </div>
// )}
   
//       </div>
//     </div>
//   );
// };

// export default Event;
import React, { useState, useEffect } from "react";
import "../css/Announce.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
// import { CheckCircleIcon } from '@heroicons/react/solid';
// For solid icons
import { CheckCircleIcon } from '@heroicons/react/24/solid'

// For outline icons
// import { CheckCircleIcon } from '@heroicons/react/24/outline'
import event from "../images/event.png";

const Event = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      // Corrected API endpoint URL
      const response = await fetch('http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events/upcoming', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Expected JSON but got: ${text.substring(0, 100)}...`);
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response:', data); // For debugging

      // Map API data to component's format
      const formattedEvents = data.map(event => ({
        id: event.id,
        title: event.eventTitle,
        description: event.eventDescription,
        tasks: event.projectSchedule ? 
          (typeof event.projectSchedule === 'string' ? 
           event.projectSchedule.split('\n') : 
           event.projectSchedule) : 
          [],
        startDate: formatDate(event.startDate),
        endDate: formatDate(event.endDate),
        time: `${formatTime(event.startTime)} - ${formatTime(event.endTime)}`,
        venue: event.venue,
        image: event.photoUrl ? 
          `http://localhost:8765/ANNOUNCEMENTSANDEVENTS/event-photos/${event.photoUrl}` : 
          event
      }));

      setEvents(formattedEvents);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchEvents();
}, []);

  // Helper functions
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const time = timeString.split(':');
    const hours = parseInt(time[0]);
    const minutes = time[1];
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  // Add Event Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventTitle: '',
    eventDescription: '',
    projectSchedule: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    venue: '',
    photo: null
  });

  // Edit Event Modal State
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);

  // Delete Modal State
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
      const [showUpdatePopup, setShowUpdatePopup] = useState(false);

const handleAddEvent = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token not found');
    }

    const formData = new FormData();
    formData.append('eventTitle', newEvent.eventTitle);
    formData.append('eventDescription', newEvent.eventDescription);
    formData.append('projectSchedule', newEvent.projectSchedule);
    formData.append('startDate', newEvent.startDate);
    formData.append('endDate', newEvent.endDate);
    formData.append('startTime', newEvent.startTime);
    formData.append('endTime', newEvent.endTime);
    formData.append('venue', newEvent.venue);
    if (newEvent.photo) {
      formData.append('photo', newEvent.photo);
    }

    const response = await fetch('http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseText = await response.text();
    console.log('Server response:', responseText); // For debugging

    // Use the existing newEvent data to update UI since backend doesn't return JSON
    setEvents(prev => [
      ...prev,
      {
        id: Date.now(), // or generate a unique ID if needed
        title: newEvent.eventTitle,
        description: newEvent.eventDescription,
        tasks: newEvent.projectSchedule ? newEvent.projectSchedule.split('\n') : [],
        startDate: formatDate(newEvent.startDate),
        endDate: formatDate(newEvent.endDate),
        time: `${formatTime(newEvent.startTime)} - ${formatTime(newEvent.endTime)}`,
        venue: newEvent.venue,
        image: newEvent.photo ? URL.createObjectURL(newEvent.photo) : '', // Temporary preview
      }
    ]);

    setShowAddModal(false);
    setNewEvent({
      eventTitle: '',
      eventDescription: '',
      projectSchedule: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      venue: '',
      photo: null
    });

    // alert('Event added successfully!');
      setShowConfirmPopup(true);
 setTimeout(() => {
        setShowConfirmPopup(false);
      }, 1500);


  } catch (err) {
    console.error('Error adding event:', err);
    alert('Failed to add event: ' + err.message);
  }
};


  // Handle Edit Event
  const handleEdit = (id) => {
    const toEdit = events.find(event => event.id === id);
    if (toEdit) {
      setEditedEvent({ ...toEdit });
      setShowEditModal(true);
    }
  };
const handleUpdateEvent = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication token not found');

    const formData = new FormData();
    formData.append('eventTitle', editedEvent.title);
    formData.append('eventDescription', editedEvent.description);
    formData.append('projectSchedule', editedEvent.tasks.join('\n'));
    formData.append('startDate', editedEvent.startDate);
    formData.append('endDate', editedEvent.endDate);
    
    // Split time if it exists, otherwise use empty strings
    const [startTime = '', endTime = ''] = editedEvent.time ? editedEvent.time.split(' - ') : [];
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);
    
    formData.append('venue', editedEvent.venue);
    if (editedEvent.photo instanceof File) {
      formData.append('photo', editedEvent.photo);
    }

    const response = await fetch(
      `http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events/${editedEvent.id}`, 
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      }
    );

    const responseText = await response.text();
    console.log('Server response:', responseText); // For debugging

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
 setShowUpdatePopup(true);

    setTimeout(() => {
      setShowUpdatePopup(false);
    }, 1500);
    // Update UI with the edited data (similar to handleAddEvent pattern)
    setEvents(prev => prev.map(event =>
      event.id === editedEvent.id ? {
        ...event,
        title: editedEvent.title,
        description: editedEvent.description,
        tasks: editedEvent.tasks,
        startDate: formatDate(editedEvent.startDate),
        endDate: formatDate(editedEvent.endDate),
        time: editedEvent.time,
        venue: editedEvent.venue,
        image: editedEvent.photo instanceof File 
          ? URL.createObjectURL(editedEvent.photo) 
          : event.image // Keep existing image if no new photo
      } : event
    ));

    setShowEditModal(false);
    setEditedEvent(null);
    // alert('Event updated successfully!');
     setShowUpdatePopup(true);

    setTimeout(() => {
      setShowUpdatePopup(false);
    }, 1500);

  } catch (err) {
    console.error('Error updating event:', err);
    alert('Failed to update event: ' + err.message);
  }
};


  const handleDeleteClick = (id) => {
    setEventToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events/${eventToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setShowDeleteModal(false);
      setShowSuccessPopup(true);

      setTimeout(() => {
        setEvents(prev => prev.filter(event => event.id !== eventToDelete));
        setShowSuccessPopup(false);
        setEventToDelete(null);
      }, 1500);
    } catch (err) {
      console.error('Error deleting event:', err);
      alert('Failed to delete event: ' + err.message);
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="maincontent">
        <div style={{marginRight:'1093px', marginTop:'-20px'}}> 
          <Navbar />
        </div> 

        <div className="tabs-container" style={{marginTop:'-950px', marginRight:'1200px'}}>
          <button onClick={() => navigate("/admin/announcements")}>Announcements</button>
          <button style={{backgroundColor:"#fae8d3", color:"#274552", fontWeight:"800"}}>Upcoming Events</button>
        </div>

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
        <h2 style={{ margin: 0, fontSize: "24px",marginTop:"20px" }}>Events</h2>

        <div style={{ padding: "20px"}}>
          {events.map(event => (
            <div key={event.id} style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundColor: "#fff",
              position: "relative",
              overflow: "hidden",
            }}>
              <img
                src={event.image}
                alt={event.title}
                style={{ height: "350px",width:"75%", marginTop: "35px", marginLeft:"15px", borderRadius:"8px" }}
              />

              <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
                <FaEdit style={{ color: "#274552", cursor: "pointer" }} onClick={() => handleEdit(event.id)} />
                <FaTrash style={{ color: "#921B29", cursor: "pointer" }} onClick={() => handleDeleteClick(event.id)} />
              </div>

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
                  <span>Venue: {event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Event Modal */}
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
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  position: 'absolute', top: '10px', right: '15px',
                  background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
                }}
              >×</button>

              <h3 style={{ marginBottom: '20px', color: '#274552' }}>Add New Event</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newEvent.eventTitle}
                    onChange={e => setNewEvent({ ...newEvent, eventTitle: e.target.value })}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Description</label>
                  <textarea
                    placeholder="Description"
                    value={newEvent.eventDescription}
                    onChange={e => setNewEvent({ ...newEvent, eventDescription: e.target.value })}
                    rows="4"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Project Schedule (one per line)</label>
                  <textarea
                    placeholder="Enter tasks, one per line"
                    value={newEvent.projectSchedule}
                    onChange={e => setNewEvent({ ...newEvent, projectSchedule: e.target.value })}
                    rows="4"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
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

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Start Time</label>
                  <input
                    type="time"
                    value={newEvent.startTime}
                    onChange={e => setNewEvent({ ...newEvent, startTime: e.target.value })}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>End Time</label>
                  <input
                    type="time"
                    value={newEvent.endTime}
                    onChange={e => setNewEvent({ ...newEvent, endTime: e.target.value })}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setNewEvent({ ...newEvent, photo: e.target.files[0] });
                    }}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />

                  
                </div>
              </div>

              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                  onClick={handleAddEvent}
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

        {/* Edit Event Modal */}
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
              <button
                onClick={() => setShowEditModal(false)}
                style={{
                  position: 'absolute', top: '10px', right: '15px',
                  background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
                }}
              >×</button>

              <h3 style={{ marginBottom: '20px', color: '#274552' }}>Edit Event</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Project Schedule (one per line)</label>
                  <textarea
                    value={editedEvent.tasks.join('\n')}
                    onChange={e => setEditedEvent({ ...editedEvent, tasks: e.target.value.split('\n') })}
                    rows="4"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Venue</label>
                  <input
                    type="text"
                    value={editedEvent.venue}
                    onChange={e => setEditedEvent({ ...editedEvent, venue: e.target.value })}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>

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

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Start Time</label>
                  <input
                    type="time"
                    value={editedEvent.time.split(' - ')[0]}
                    onChange={e => setEditedEvent({ 
                      ...editedEvent, 
                      time: `${e.target.value} - ${editedEvent.time.split(' - ')[1]}` 
                    })}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>End Time</label>
                  <input
                    type="time"
                    value={editedEvent.time.split(' - ')[1]}
                    onChange={e => setEditedEvent({ 
                      ...editedEvent, 
                      time: `${editedEvent.time.split(' - ')[0]} - ${e.target.value}` 
                    })}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />

                  <label style={{ fontWeight: 'bold', fontSize: '13px' }}>Upload New Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setEditedEvent({ ...editedEvent, photo: e.target.files[0] });
                    }}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>
              </div>

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
              backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '550px', height:"230px"
            }}>
              <button className="close-btn" onClick={() => setShowDeleteModal(false)} style={{
                position: 'relative', marginLeft:"490px", marginBottom:"-200px", fontSize:'25px'
              }}>
                ×
              </button>
              <p style={{ marginTop: '10px', fontWeight: 'bold' , marginLeft:'-10px'}}>Are you sure you want to delete this Event?</p>
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
                    fontWeight:'bold',
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
                    fontWeight:'bold',
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
              <p style={{ marginTop: '-10px',fontSize:'20px', fontWeight: 'bold',marginLeft:'-10px' }}>Event uploaded Successfully</p>
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
                            <p style={{ marginTop: '-10px',fontSize:'20px', fontWeight: 'bold',marginLeft:'-10px' }}>Event updated Successfully</p>
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
              <p style={{ marginTop: '-10px',fontSize:'20px', fontWeight: 'bold',marginLeft:'-10px' }}>Event Deleted Successfully</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;