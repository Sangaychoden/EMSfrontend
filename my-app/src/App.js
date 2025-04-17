import './App.css';
import Login from "./component/Login";
import Forgotpassword from "./component/Forgotpassword";
import Otp from "./component/OTP";
import Resetpassword from "./component/Resetpassword";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './component/Admin/js/Dashboard';
import Task from './component/Admin/js/Task';
import TeamTask from './component/Admin/js/TeamTask';
import Employee from './component/Admin/js/Employee';
import Leave from './component/Admin/js/Leave';
import Announce from './component/Admin/js/Announce';
import Announcement from './component/Admin/js/Announcement';
import Event from './component/Admin/js/Event';
function App() {
  return (
    <div>
      <Router>
    
        <Routes>
          {/* <Route path="/" element={<Landing/>}></Route> */}
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/task" element={<Task/>}></Route>
          <Route path="/leave" element={<Leave/>}></Route>
          <Route path="/employee" element={<Employee/>}></Route>
          <Route path="/announce" element={<Announce/>}></Route>
          <Route path="/announcements" element={<Announcement/>}></Route>
          <Route path="/events" element={<Event/>}></Route>
          <Route path="/teamtask" element={<TeamTask/>}></Route>



          {/* <Route path="/" element={<Login/>}></Route> */}
          <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
          <Route path="/otp" element={<Otp/>}></Route>
          <Route path="/resetpassword" element={<Resetpassword/>}></Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
