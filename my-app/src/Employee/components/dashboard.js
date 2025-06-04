
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
  const handleViewMore = () => {
    navigate("/employee/eventdetails");
  };
  useEffect(() => {
    setEvents([
      {
        id: 1,
        title: "Celebrating 5 Years of Success",
        image: defaultPic,
        description:
          "Five years ago, we started with a dream and a vision. Today, we celebrate the milestones we’ve achieved...",
        startDate: "April 10, 2025",
        endDate: "April 12, 2025",
      },
      {
        id: 2,
        title: "Summer Innovation Summit",
        image: defaultPic,
        description:
          "Join us this summer for the Innovation Summit where industry leaders share insights on the future of technology.",
        startDate: "July 15, 2025",
        endDate: "July 17, 2025",
      },
    ]);

    setAnnouncements([
      {
        id: 1,
        title: "System Upgrade Scheduled on March 20th",
        content:
          "We are upgrading our servers. The system will be down from 12:00 AM to 3:00 AM.",
      },
      {
        id: 2,
        title: "Cybersecurity Awareness Training – March 25th",
        content:
          "All employees must attend a cybersecurity session on March 25th covering phishing prevention, password security, and more.",
      }
    ]);
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
          <div className="events-container">
            <h3>Upcoming Events</h3>
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
                  </div>
                    <button className="view-more-btn" onClick={handleViewMore}>View More</button>
                  {/* <button className="view-more-btn"></button> */}
                </div>
              </div>
            ))}
          </div>

          {/* Announcements Section */}
          <div className="announcements-container">
            <h3>Latest Announcements</h3>
          <div className="announcements-container2">
            {announcements.map((a) => (
              <div className="announcement-card" key={a.id}>
                <button
                  className="close-btn"
                  onClick={() => handleRemoveAnnouncement(a.id)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <h4>{a.title}</h4>
                <p>{a.content}</p>
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
