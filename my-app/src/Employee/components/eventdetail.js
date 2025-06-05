
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import defaultPic from "../image.png";
import "../css/eventdetails.css";

const Eventdetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found');
        }

        const response = await fetch(`http://localhost:8765/ANNOUNCEMENTSANDEVENTS/api/events/${id}`, {
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
        console.log('Event details API response:', data);

        setEvent({
          id: data.id,
          title: data.eventTitle,
          description: data.eventDescription,
          tasks: data.projectSchedule ? 
            (typeof data.projectSchedule === 'string' ? 
             data.projectSchedule.split('\n') : 
             data.projectSchedule) : 
            [],
          startDate: formatDate(data.startDate),
          endDate: formatDate(data.endDate),
          startTime: formatTime(data.startTime),
          endTime: formatTime(data.endTime),
          venue: data.venue,
          image: data.photoUrl ? 
            `http://localhost:8765/ANNOUNCEMENTSANDEVENTS/event-photos/${data.photoUrl}` : 
            defaultPic
        });
      } catch (err) {
        console.error('Fetch event details error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEventDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-container2">
        <div className="sidebar-with-welcome2">
          <Sidebar />
        </div>
        <div className="main-content2">
          <Navbar />
          <div className="event-details-container">
            <p>Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container2">
        <div className="sidebar-with-welcome2">
          <Sidebar />
        </div>
        <div className="main-content2">
          <Navbar />
          <div className="event-details-container">
            <p className="error-message">Error: {error}</p>
            <button onClick={handleBack}>Go Back</button>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="dashboard-container2">
        <div className="sidebar-with-welcome2">
          <Sidebar />
        </div>
        <div className="main-content2">
          <Navbar />
          <div className="event-details-container">
            <p>Event not found</p>
            <button onClick={handleBack}>Go Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container2">
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      <div className="main-content2">
        <Navbar />

        <div className="event-details-container">
          <div className="event-header">
            <button className="back-button" onClick={handleBack}>
              &lt;
            </button>
            <h2>{event.title}</h2>
          </div>

          <img src={event.image} alt="Event Banner" className="event-banner" />

          <p className="event-description">
            {event.description}
          </p>

          <ul className="event-info">
            <li><strong>Start Date:</strong> {event.startDate}</li>
            {event.endDate && <li><strong>End Date:</strong> {event.endDate}</li>}
            {event.startTime && (
              <li>
                <strong>Time:</strong> {event.startTime}
                {event.endTime && ` - ${event.endTime}`}
              </li>
            )}
            {event.venue && <li><strong>Venue:</strong> {event.venue}</li>}
          </ul>

          {event.tasks && event.tasks.length > 0 && (
            <>
              <h3>Program Schedule:</h3>
              <ol className="event-schedule">
                {event.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eventdetails;