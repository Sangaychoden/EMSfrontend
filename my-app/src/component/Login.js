import React from "react";
import "./Login.css"; // External CSS
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../component/logo.png"; // Update path

const Login = () => {
  return (
    <div className="login-container">
    <div className="logo">
      {/* Logo Image */}
      <img src={logo} alt="Your Logo" />
    </div>
      <div className="login-box">
        <h2>LOGIN</h2>
        <p className="sub-text">For Your Account</p>

        <div className="input-group1">
          <input type="text" placeholder="User ID" />
          <FaUser className="icon" />
        </div>

        <div className="input-group1">
          <input type="password" placeholder="Password" />
          <FaLock className="icon" />
        </div>

        <div className="options">
          <a href="/forgotpassword">Forgot Password?</a>
        </div>

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;