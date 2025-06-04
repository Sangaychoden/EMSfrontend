

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./otp.css";
import logo from "../component/logo.png";

const OTP = () => {
  const [showError, setShowError] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("recoveryEmail");
    if (storedEmail) {
      setEmail(storedEmail); // Retrieve email from localStorage and set it in the state
    } else {
      navigate("/forgot-password"); // Redirect to forgot-password if no email is found
    }
  }, [navigate]);

  const handleOtpChange = (index, value) => {
    if (value && !/^[0-9]$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    } else if (!value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };


  const handleConfirm = async () => {
    const isOtpComplete = otp.every(digit => digit !== "");
    if (isOtpComplete) {
      try {
        const otpString = otp.join(""); // Convert OTP array to string
        const formData = new FormData();
        formData.append("otp", otpString); // Add OTP to form data
        formData.append("email", email); // Send email along with OTP
  
        const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/verify-otp", {
          method: "POST",
          body: formData, // Send OTP and email as form-data
        });
  
        const contentType = response.headers.get("content-type");
  
        if (response.ok) {
          navigate("/resetpassword");
        } else {
          let errorMsg = "Invalid OTP.";
          if (contentType && contentType.includes("application/json")) {
            const result = await response.json();
            errorMsg = result.message || errorMsg;
          } else {
            const text = await response.text();
            errorMsg = text || errorMsg;
          }
  
          setShowError(true);
          setErrorMessage(errorMsg);
        }
      } catch (error) {
        setShowError(true);
        setErrorMessage("Error verifying OTP: " + error.message);
      }
    } else {
      setShowError(true);
      setErrorMessage("Please enter all 4 digits of the OTP.");
    }
  };
  

  const handleResendOtp = () => {
    setOtp(["", "", "", ""]);
    document.getElementById("otp-input-0").focus();
    alert("OTP has been resent to your email");
  };

  return (
    <div className="forgot-password-container">
      <div className="logo1">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="forgot-password-box">
      {/* <h3>OTP has been sent to your email</h3> */}
      <h3>OTP has been sent to your email: {email}</h3>
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => e.key === 'Backspace' && !digit && handleOtpChange(index, '')}
              className="otp-input"
              autoFocus={index === 0}
            />
          ))}
        </div>
        
        <button className="submit-btnn1" onClick={handleConfirm}>Verify</button>
        
        <p className="resend-otpp">
          <span onClick={handleResendOtp}>Resend OTP</span>
        </p>
      </div>

      {showError && (
        <div className="error-box">
          <p>{errorMessage}</p>
          <button className="error-ok-btn" onClick={() => setShowError(false)}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default OTP;
