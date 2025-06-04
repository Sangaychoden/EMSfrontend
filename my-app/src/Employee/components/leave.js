
import React from "react";
import { FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import "../css/leave.css";

const Leave = () => {
  return (
    <div className="dashboard-container2">
      {/* Sidebar */}
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content2">
        <Navbar />
        
        {/* Leave Request Form */}
        <div className="leave-container">

        <h2>Leave Request</h2>
          <div className="leave-form-container">
          
            
            <form className="leave-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Employee Name</label>
                  <input type="text" value="Karma" readOnly />
                </div>
                <div className="form-group">
                  <label>Leave type</label>
                  <select>
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Annual Leave</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" />
                </div>
              </div>

              <div className="form-group">
                <label>Approver</label>
                <input type="text" value="Karma Day" readOnly />
              </div>

              {/* <div className="form-group">
                <label>Reason (optional)</label>
                <textarea rows="3"></textarea>
              </div> */}
              <div className="form-group" style={{ marginTop: '30px' }}>
                <label>Reason (optional)</label>
                <textarea rows="3"></textarea>
                </div>


              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          {/* <div className="leave-history">
            <h3>Leave History</h3>
            History items would go here
          </div> */}
            <h3>Leave History</h3>
             <div className="leave-history">
          
            
            {/* Days status row */}
            {/* <div className="days-status-row">
              <h4 className="days-used">2 Days Used</h4>
              
              <h4 className="days-available">8 Days Available</h4>
            </div> */}
<div className="days-status-row">
  <div className="days-used">
    <h4>2 Days</h4>
    <span className="days-label">Used</span>
  </div>
  <div className="days-available">
    <h4>8 Days</h4>
    <span className="days-label">Available</span>
  </div>
</div>
            {/* History table */}
            <table>
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Casual Leave</td>
                  <td>10/03/2025</td>
                  <td>13/03/2025</td>
                  <td>-</td>
                  <td className="status-approved">Approved</td>
                </tr>
                <tr>
                  <td>Casual Leave</td>
                  <td>10/03/2025</td>
                  <td>13/03/2025</td>
                  <td>-</td>
                  <td className="status-approved">Approved</td>
                </tr>
                <tr>
                  <td>Casual Leave</td>
                  <td>10/03/2025</td>
                  <td>13/03/2025</td>
                  <td>-</td>
                  <td className="status-rejected">Rejected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default Leave;