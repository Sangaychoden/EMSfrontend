
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/task.css";
import { useNavigate } from 'react-router-dom';

const Task = () => {
  const [individualTasks, setIndividualTasks] = useState([]);
  const [teamTasks, setTeamTasks] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Consolidated user data retrieval
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData?.userId || localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!userId || !token) {
          throw new Error("Authentication credentials missing");
        }

        const endpoints = [
          `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/individual`,
          `http://localhost:8765/TASKSERVICE/api/tasks/user/${userId}/team`,
          `http://localhost:8765/TASKSERVICE/api/tasks/reminders/${userId}`
        ];

        const responses = await Promise.all(
          endpoints.map(async (url) => {
            const response = await fetch(url, {
              headers: { Authorization: `Bearer ${token}` }
            });

            if (!response.ok) {
              const text = await response.text();
              throw new Error(`HTTP error! Status: ${response.status} - ${text}`);
            }

            const contentType = response.headers.get("content-type");
            return contentType?.includes("application/json") ? response.json() : null;
          })
        );

        const [individualData, teamData, remindersData] = responses;

        setIndividualTasks(Array.isArray(individualData) ? individualData : []);
        setTeamTasks(Array.isArray(teamData) ? teamData : []);
        
        const processedReminders = remindersData?.your_overdue_reminders?.concat(
          remindersData?.your_upcoming_reminders || []
        ) || [];
        setReminders(processedReminders.filter(r => r));

      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [userId, token]);

  const handleCloseReminder = (index) => {
    setReminders(prev => prev.filter((_, i) => i !== index));
  };

 const handleViewTask = (taskId, isTeamTask) => {
  // Just navigate without taskDetails - your TaskDetail component will fetch it
  navigate(`/employee/taskdetails/${taskId}`, {
    state: { 
      isTeamTask
      // Don't pass taskDetails - let the detail page fetch fresh data
    }
  });
};
  const renderTaskTable = (tasks, isTeam) => (
    <div className="table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={`${isTeam ? 'team' : 'ind'}-${task.id}`} className="task-row">
              <td className="serial-number">{index + 1}</td>
              <td className="task-description">
                {task.task || task.description || "No description available"}
              </td>
              <td className="task-status">
                <span className={`status-badge ${task.status?.toLowerCase()}`}>
                  {task.status || 'N/A'}
                </span>
              </td>
              <td>
                <button 
                  className="view-button"
                  onClick={() => handleViewTask(task.id, isTeam)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tasks.length === 0 && !loading && (
        <div className="no-tasks">No {isTeam ? 'team' : 'individual'} tasks found</div>
      )}
    </div>
  );

  return (
    <div className="dashboard-container">
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
          <p>Loading tasks...</p>
        </div>
      )}

      <div className="sidebar-with-welcome">
        <Sidebar />
      </div>

      <div className="main-content">
        <Navbar />
        
        {error && (
          <div className="error-banner">
            ⚠️ Error: {error}
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        <div className="split-layout">
          <div className="tasks-side">
            <div className="task-section new-tasks">
              <h2 className="section-title">Individual Tasks</h2>
              {renderTaskTable(individualTasks, false)}
            </div>

            <div className="vertical-spacer"></div>

            <div className="task-section team-tasks">
              <h2 className="section-title">Team Tasks</h2>
              {renderTaskTable(teamTasks, true)}
            </div>
          </div>

          <div className="reminder-container">
            <h3 className="reminder-title">Reminders</h3>
            <div className="reminders-scroll">
              {reminders.length === 0 ? (
                <div className="no-reminders">No current reminders</div>
              ) : (
                reminders.map((reminder, index) => (
                  <div key={index} className="reminder-card">
                    <div className="card-header">
                      <div className="bell-icon">🔔</div>
                      <button 
                        className="close-btn"
                        onClick={() => handleCloseReminder(index)}
                      >
                        ×
                      </button>
                    </div>
                    <div className="card-content">
                      <p>{reminder.message || reminder}</p>
                      {reminder.dueDate && (
                        <div className="reminder-date">
                          Due: {new Date(reminder.dueDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;