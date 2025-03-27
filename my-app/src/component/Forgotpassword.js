
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./fpassword.css";
import logo from "../component/logo.png";
import { FaUser } from "react-icons/fa";

const ForgotPassword = () => {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleConfirm = () => {
    // Simulating an error message display
    setShowError(true);
  };

  const handleOkClick = () => {
    setShowError(false);
    navigate('/otp'); // Navigate to the OTP page
  };

  return (
    <div className="forgot-password-container">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="forgot-password-box">
        <h2>LOGIN</h2>
        <p className="sub-text">For Your Account</p>
        <h4>Forgot Password</h4>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <button className="submit-btn" onClick={handleConfirm}>Confirm</button>
      </div>

      {showError && (
        <div className="error-box1">
          <p>
            There is no account registered on "sangaychoden@gmail.com" <strong>{email}</strong>.
          </p>
          <p>Kindly re-enter the correct Email.</p>
          <button className="error-ok-btn" onClick={handleOkClick}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;