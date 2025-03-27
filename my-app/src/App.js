import logo from './logo.svg';
import './App.css';
import Login from "./component/Login";
import Forgotpassword from "./component/Forgotpassword";
import Otp from "./component/OTP";
import Resetpassword from "./component/Resetpassword";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
    
        <Routes>
          {/* <Route path="/" element={<Landing/>}></Route> */}
          <Route path="/" element={<Login/>}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
          <Route path="/otp" element={<Otp/>}></Route>
          <Route path="/resetpassword" element={<Resetpassword/>}></Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
