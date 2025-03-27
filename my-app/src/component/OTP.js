// import React, { useState } from "react";
// import "./otp.css";
// import logo from "../component/logo.png";

// const OTP = () => {
//   const [showError, setShowError] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleOtpChange = (index, value) => {
//     // Only allow numbers
//     if (value && !/^[0-9]$/.test(value)) return;
    
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
    
//     // Auto focus to next input if a digit was entered
//     if (value && index < 3) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     }
//     // Auto focus to previous input if backspace was pressed
//     else if (!value && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`).focus();
//     }
//   };

//   const handleConfirm = () => {
//     const isOtpComplete = otp.every(digit => digit !== "");
//     setShowError(!isOtpComplete);
//   };

//   const handleResendOtp = () => {
//     setOtp(["", "", "", ""]);
//     document.getElementById("otp-input-0").focus();
//     alert("OTP has been resent to your email");
//   };

//   return (
//     <div className="forgot-password-container">
//       <div className="logo">
//         <img src={logo} alt="Your Logo" />
//       </div>
//       <div className="forgot-password-box">
//         <h3>OTP has been sent to your email</h3>
        
//         <div className="otp-container">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-input-${index}`}
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//               onKeyDown={(e) => e.key === 'Backspace' && !digit && handleOtpChange(index, '')}
//               className="otp-input"
//               autoFocus={index === 0}
//             />
//           ))}
//         </div>
        
//         <button className="submit-btn" onClick={handleConfirm}>Verify</button>
        
//         <p className="resend-otp">
//           <span onClick={handleResendOtp}>Resend OTP</span>
//         </p>
//       </div>

//       {showError && (
//         <div className="error-box">
//           <p>Please enter all 4 digits of the OTP</p>
//           <button className="error-ok-btn" onClick={() => setShowError(false)}>
//             OK
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OTP;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./otp.css";
import logo from "../component/logo.png";

const OTP = () => {
  const [showError, setShowError] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate(); // Initialize navigate function

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

  const handleConfirm = () => {
    const isOtpComplete = otp.every(digit => digit !== "");
    if (isOtpComplete) {
      navigate("/resetpassword"); // Redirect to reset password page
    } else {
      setShowError(true);
    }
  };

  const handleResendOtp = () => {
    setOtp(["", "", "", ""]);
    document.getElementById("otp-input-0").focus();
    alert("OTP has been resent to your email");
  };

  return (
    <div className="forgot-password-container">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="forgot-password-box">
        <h3>OTP has been sent to your email</h3>
        
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
        
        <button className="submit-btnn" onClick={handleConfirm}>Verify</button>
        
        <p className="resend-otp">
          <span onClick={handleResendOtp}>Resend OTP</span>
        </p>
      </div>

      {showError && (
        <div className="error-box">
          <p>Please enter all 4 digits of the OTP</p>
          <button className="error-ok-btn" onClick={() => setShowError(false)}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default OTP;
