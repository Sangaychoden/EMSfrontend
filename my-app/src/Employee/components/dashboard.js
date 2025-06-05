
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/dashboard.css";
import defaultPic from "../image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleViewMore = (type, id) => {
    if (type === 'events') {
        navigate(`/employee/eventdetails/${id}`);
    } else {
      navigate(`/employee/announcementdetails/${id}`);
    }
  };

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
            defaultPic
        }));

        setEvents(formattedEvents);
      } catch (err) {
        console.error('Fetch events error:', err);
        setError(err.message);
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

  const handleRemoveAnnouncement = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="dashboard-container2">
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      <div className="main-content2">
        <Navbar />

        <div className="combined-box">
          {/* Events Section */}
          <div  className="events-container">
            <h3>Upcoming Events</h3>
            {loading && <p>Loading events...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            {!loading && !error && events.length === 0 && <p>No upcoming events</p>}
            
            {events.map((event) => (
              <div className="event-card1" key={event.id}>
                <img
                  className="event-image"
                  src={event.image}
                  alt={event.title}
                />
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p className="event-description">{event.description}</p>
                  <div className="event-dates">
                    <h5>Event Scheduled</h5>
                    <p>
                      <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />{" "}
                      <strong>Start Date:</strong> {event.startDate}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />{" "}
                      <strong>End Date:</strong> {event.endDate}
                    </p>
                    {event.time && (
                      <p>
                        <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />{" "}
                        <strong>Time:</strong> {event.time}
                      </p>
                    )}
                    {event.venue && (
                      <p>
                        <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />{" "}
                        <strong>Venue:</strong> {event.venue}
                      </p>
                    )}
                  </div>
                  {/* <button 
                    className="view-more-btn" 
                    onClick={() => handleViewMore('events', event.id)}
                  >
                    View More
                  </button> */}
                  <button 
  className="view-more-btn" 
  onClick={() => handleViewMore('events', event.id)}
>
  View More
</button>
                </div>
              </div>
            ))}
          </div>

          {/* Announcements Section */}
          <div className="announcements-container">
            <h3>Latest Announcements</h3>
            {loading && <p>Loading announcements...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            <div className="announcements-container2">
              {announcements.map((announcement) => (
                <div className="announcement-card" key={announcement.id}>
                  <button
                    className="close-btn"
                    onClick={() => handleRemoveAnnouncement(announcement.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <h4>{announcement.title}</h4>
                  <p>{announcement.description}</p>
                  <p className="date-text">Posted: {formatDate(announcement.date)}</p>
                  {/* <button 
                    className="view-more-btn"
                    onClick={() => handleViewMore('announcements', announcement.id)}
                  >
                    View More
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;