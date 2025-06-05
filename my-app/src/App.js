// // // import logo from './logo.svg';
// // // import './App.css';
// // // import Login from "./component/Login";
// // // import Forgotpassword from "./component/Forgotpassword";
// // // import Otp from "./component/OTP";
// // // import Resetpassword from "./component/Resetpassword";

// // // import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


// // // function App() {
// // //   return (
// // //     <div>
// // //       <Router>
    
// // //         <Routes>
// // //           {/* <Route path="/" element={<Landing/>}></Route> */}
// // //           <Route path="/" element={<Login/>}></Route>
// // //           <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
// // //           <Route path="/otp" element={<Otp/>}></Route>
// // //           <Route path="/resetpassword" element={<Resetpassword/>}></Route>
         
// // //         </Routes>
// // //       </Router>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import logo from './logo.svg';
// // import './App.css';
// // import Login from "./component/Login";
// // import Forgotpassword from "./component/Forgotpassword";
// // import Otp from "./component/OTP";
// // import Resetpassword from "./component/Resetpassword";
// // import Dashboard from "./Admin/js/Dashboard";
// // import Announce from "./Admin/js/Announce";
// // import Announcement from "./Admin/js/Announcement";
// // import Employee from "./Admin/js/Employee";
// // import Event from "./Admin/js/Event";
// // import Leave from "./Admin/js/Leave";
// // import Task from "./Admin/js/Task";
// // import TeamTask from "./Admin/js/TeamTask";

// // // import EDashboard from "./Employee/js/Dashboard";
// // // import ETask from "./Employee/js/Task";
// // // import ELeave from "./Employee/js/ELeave";


// // import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// // function App() {
// //   return (
// //     <div>
// //       <Router>
// //         <Routes>
// //           {/* Authentication Routes */}
// //           <Route path="/" element={<Login/>}></Route>
// //           <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
// //           <Route path="/otp" element={<Otp/>}></Route>
// //           <Route path="/resetpassword" element={<Resetpassword/>}></Route>
          
// //           {/* Admin Routes */}
// //           <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
// //           <Route path="/admin/announce" element={<Announce/>}></Route>
// //           <Route path="/admin/announcement" element={<Announcement/>}></Route>
// //           <Route path="/admin/employee" element={<Employee/>}></Route>
// //           <Route path="/admin/event" element={<Event/>}></Route>
// //           <Route path="/admin/leave" element={<Leave/>}></Route>
// //           <Route path="/admin/task" element={<Task/>}></Route>
// //           <Route path="/admin/team-task" element={<TeamTask/>}></Route>

// //           {/* employee Route */}
// //           {/* <Route path="/employee/dashboard" element={<EDashboard/>}></Route>
// //           <Route path="/employee/task" element={<ETask/>}></Route> */}
// //             {/* <Route path="/employee/leave" element={<ELeave/>}></Route> */}
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;
// import logo from './logo.svg';
// import './App.css';

// import Login from "./component/Login";
// import Forgotpassword from "./component/Forgotpassword";
// import Otp from "./component/OTP";
// import Resetpassword from "./component/Resetpassword";

// import Dashboard from "./Admin/js/Dashboard";
// import Announce from "./Admin/js/Announce";
// import Announcement from "./Admin/js/Announcement";
// import Employee from "./Admin/js/Employee";
// import Event from "./Admin/js/Event";
// import Leave from "./Admin/js/Leave";
// import Task from "./Admin/js/Task";
// import TeamTask from "./Admin/js/TeamTask";

// import ELeave from "./Employee/components/leave";
// import EDashboard from "./Employee/components/dashboard";
// import ETask from "./Employee/components/task";
// import ETaskDetails from "./Employee/components/taskDetail";
// import EProfile from "./Employee/components/profile";
// import EEditProfile from "./Employee/components/editprofile";
// import EEventDEtails from "./Employee/components/eventdetail";


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           {/* Authentication Routes */}
//           <Route path="/" element={<Login />} />
//           <Route path="/forgotpassword" element={<Forgotpassword />} />
//           <Route path="/otp" element={<Otp />} />
//           <Route path="/resetpassword" element={<Resetpassword />} />
          
//           {/* Admin Routes */}
//           <Route path="/admin/dashboard" element={<Dashboard />} />
//           <Route path="/admin/announce" element={<Announce />} />
//           <Route path="/admin/announcements" element={<Announcement />} />
//           <Route path="/admin/employee" element={<Employee />} />
//           <Route path="/admin/events" element={<Event />} />
//           <Route path="/admin/leave" element={<Leave />} />
//           <Route path="/admin/task" element={<Task />} />
//           <Route path="/admin/team-task" element={<TeamTask />} />

//           {/* Employee Routes */}
//           <Route path="/employee/dashboard" element={<EDashboard />} />
//           <Route path="/employee/task" element={<ETask />} />
//           <Route path="/employee/leave" element={<ELeave />} />
//           <Route path="/employee/profile" element={<EProfile/>} />
//           <Route path="/employee/editprofile" element={<EEditProfile/>} />
//           {/* <Route path="/employee/eventdetails" element={<EEventDEtails/>} /> */}
//           <Route path="/employee/eventdetails/:id" element={<EEventDEtails />} />
//           <Route path="/employee/taskdetails/:taskId" element={<ETaskDetails />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "./component/Login";
import Forgotpassword from "./component/Forgotpassword";
import Otp from "./component/OTP";
import Resetpassword from "./component/Resetpassword";

// Admin Components
import Dashboard from "./Admin/js/Dashboard";
import Announce from "./Admin/js/Announce";
import Announcement from "./Admin/js/Announcement";
import Employee from "./Admin/js/Employee";
import Event from "./Admin/js/Event";
import Leave from "./Admin/js/Leave";
import Task from "./Admin/js/Task";
import TeamTask from "./Admin/js/TeamTask";

// Employee Components
import ELeave from "./Employee/components/leave";
import EDashboard from "./Employee/components/dashboard";
import ETask from "./Employee/components/task";
import ETaskDetails from "./Employee/components/taskDetail";
import EProfile from "./Employee/components/profile";
import EEditProfile from "./Employee/components/editprofile";
import EEventDEtails from "./Employee/components/eventdetail";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // User not logged in, redirect to login page
    return <Navigate to="/" replace />;
  }
  
  // User is logged in, allow access to the requested route
  return children;
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Authentication Routes (Public) */}
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          
          {/* Admin Routes (Protected) */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/announce" element={
            <ProtectedRoute>
              <Announce />
            </ProtectedRoute>
          } />
          <Route path="/admin/announcements" element={
            <ProtectedRoute>
              <Announcement />
            </ProtectedRoute>
          } />
          <Route path="/admin/employee" element={
            <ProtectedRoute>
              <Employee />
            </ProtectedRoute>
          } />
          <Route path="/admin/events" element={
            <ProtectedRoute>
              <Event />
            </ProtectedRoute>
          } />
          <Route path="/admin/leave" element={
            <ProtectedRoute>
              <Leave />
            </ProtectedRoute>
          } />
          <Route path="/admin/task" element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          } />
          <Route path="/admin/team-task" element={
            <ProtectedRoute>
              <TeamTask />
            </ProtectedRoute>
          } />

          {/* Employee Routes (Protected) */}
          <Route path="/employee/dashboard" element={
            <ProtectedRoute>
              <EDashboard />
            </ProtectedRoute>
          } />
          <Route path="/employee/task" element={
            <ProtectedRoute>
              <ETask />
            </ProtectedRoute>
          } />
          <Route path="/employee/leave" element={
            <ProtectedRoute>
              <ELeave />
            </ProtectedRoute>
          } />
          <Route path="/employee/profile" element={
            <ProtectedRoute>
              <EProfile />
            </ProtectedRoute>
          } />
          <Route path="/employee/editprofile" element={
            <ProtectedRoute>
              <EEditProfile />
            </ProtectedRoute>
          } />
          <Route path="/employee/eventdetails/:id" element={
            <ProtectedRoute>
              <EEventDEtails />
            </ProtectedRoute>
          } />
          <Route path="/employee/taskdetails/:taskId" element={
            <ProtectedRoute>
              <ETaskDetails />
            </ProtectedRoute>
          } />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;