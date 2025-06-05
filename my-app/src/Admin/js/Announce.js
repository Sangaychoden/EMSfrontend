
import React, { useState, useEffect } from "react";
import "../css/Announce.css"; // Import CSS
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // For navigation

const Announce = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found');
        }

        const response = await fetch('http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events/upcoming', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

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
        console.log('Events API response:', data);

        setEvents(data.map(event => ({
          id: event.eventId,
          title: event.eventTitle,
          description: event.eventDescription,
          date: event.eventDate
        })));
      } catch (err) {
        console.error('Fetch events error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found');
        }

        const response = await fetch('http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/announcements/latests?limit=3', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

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
        console.log('Announcements API response:', data);

        setAnnouncements(data.map(announcement => ({
          id: announcement.announcementId,
          title: announcement.announcementTitle,
          description: announcement.announcementDescription,
          date: announcement.createdAt
        })));
      } catch (err) {
        console.error('Fetch announcements error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
    fetchAnnouncements();
  }, []);

  // const handleViewMore = (type, id) => {
  //   navigate(`/admin/${type}/${id}`);
  // };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="maincontent">
        {/* Navbar */}
        <div style={{marginRight:'1109px', marginTop:'-20px'}}> 
          <Navbar />
        </div> 

        {/* Tabs */}
        <div className="tabs-container" style={{marginTop:'-950px', marginRight:'625px'}}>
          <button onClick={() => navigate("/admin/announcements")}>Announcements</button>
          <button onClick={() => navigate("/admin/events")}>Upcoming Events</button>
        </div>

        {/* Two Column Layout */}
        <div className="grid-container" style={{ marginRight:'100px'}}>
          {/* Latest Announcements */}
          <div style={{width:"850px"}} className="announcements-section">
            <h2>Latest Announcements</h2>
            {loading && <p>Loading announcements...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            {announcements.map((announcement, index) => (
              <div key={index} style={{width:"750px"}} className="announcement-card">
                <h5>{announcement.title}</h5>
                <p>{announcement.description}</p>
                <p className="date-text">Posted: {new Date(announcement.date).toLocaleDateString()}</p>
                
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div style={{width:"850px"}} className="events-section">
            <h2>Upcoming Events</h2>
            {loading && <p>Loading events...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            {events.map((event, index) => (
              <div key={index} style={{width:"750px",height:'150px'}} className="event-card4">
                <h5>{event.title}</h5>
                <p style={{marginLeft:'5px'}}>{event.description}</p>
                {/* <p style={{marginLeft:'5px'}} className="date-text">Event Date: {new Date(event.startDate).toLocaleDateString()}</p> */}
                {/* <button 
                  className="view-more-btn"
                  onClick={() => handleViewMore('events', event.id)}
                >
                  View More
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announce;