import React, { useState } from "react";
import "./Resetpassword.css";
import logo from "../component/logo.png";
import { FaLock } from "react-icons/fa";

const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    mismatch: false,
    tooShort: false
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value
    });
    
    // Clear errors when typing
    if (name === "confirmPassword" || errors.mismatch || errors.tooShort) {
      setErrors({
        mismatch: false,
        tooShort: false
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const isTooShort = passwords.newPassword.length < 8;
    const isMismatch = passwords.newPassword !== passwords.confirmPassword;
    
    if (isTooShort || isMismatch) {
      setErrors({
        mismatch: isMismatch,
        tooShort: isTooShort
      });
      return;
    }
    
    // Success - in a real app, you would call your API here
    setSuccess(true);
  };

  return (
    <div className="reset-password-container">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="reset-password-box">
        <h2>LOGIN</h2>
        <p className="sub-text">For Your Account</p>
        <h3>Reset Password</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group2">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={handleChange}
            />
            <FaLock className="icon" />
          </div>
          
          <div className="input-group2">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={passwords.confirmPassword}
              onChange={handleChange}
            />
            <FaLock className="icon" />
          </div>
          
          {(errors.mismatch || errors.tooShort) && (
            <div className="error-message">
              {errors.mismatch && <p>Passwords don't match!</p>}
            </div>
          )}
          
          {success && (
            <div className="success-message">
              <p>Password reset successfully!</p>
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;