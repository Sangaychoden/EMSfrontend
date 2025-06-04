// // import React, { useState } from "react";
// // import "./Resetpassword.css";
// // import logo from "../component/logo.png";
// // import { FaLock } from "react-icons/fa";

// // const ResetPassword = () => {
// //   const [passwords, setPasswords] = useState({
// //     newPassword: "",
// //     confirmPassword: ""
// //   });
// //   const [errors, setErrors] = useState({
// //     mismatch: false,
// //     tooShort: false
// //   });
// //   const [success, setSuccess] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setPasswords({
// //       ...passwords,
// //       [name]: value
// //     });
    
// //     // Clear errors when typing
// //     if (name === "confirmPassword" || errors.mismatch || errors.tooShort) {
// //       setErrors({
// //         mismatch: false,
// //         tooShort: false
// //       });
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Validation
// //     const isTooShort = passwords.newPassword.length < 8;
// //     const isMismatch = passwords.newPassword !== passwords.confirmPassword;
    
// //     if (isTooShort || isMismatch) {
// //       setErrors({
// //         mismatch: isMismatch,
// //         tooShort: isTooShort
// //       });
// //       return;
// //     }
    
// //     // Success - in a real app, you would call your API here
// //     setSuccess(true);
// //   };

// //   return (
// //     <div className="reset-password-container">
// //       <div className="logo">
// //         <img src={logo} alt="Your Logo" />
// //       </div>
// //       <div className="reset-password-box">
// //         <h2>LOGIN</h2>
// //         <p className="sub-text">For Your Account</p>
// //         <h3>Reset Password</h3>
        
// //         <form onSubmit={handleSubmit}>
// //           <div className="input-group2">
// //             <input
// //               type="password"
// //               name="newPassword"
// //               placeholder="New Password"
// //               value={passwords.newPassword}
// //               onChange={handleChange}
// //             />
// //             <FaLock className="icon" />
// //           </div>
          
// //           <div className="input-group2">
// //             <input
// //               type="password"
// //               name="confirmPassword"
// //               placeholder="Confirm Password"
// //               value={passwords.confirmPassword}
// //               onChange={handleChange}
// //             />
// //             <FaLock className="icon" />
// //           </div>
          
// //           {(errors.mismatch || errors.tooShort) && (
// //             <div className="error-message">
// //               {errors.mismatch && <p>Passwords don't match!</p>}
// //             </div>
// //           )}
          
// //           {success && (
// //             <div className="success-message">
// //               <p>Password reset successfully!</p>
// //             </div>
// //           )}
          
// //           <button type="submit" className="submit-btn">
// //             Reset Password
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResetPassword;



// export default ResetPassword;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Resetpassword.css";
import logo from "../component/logo.png";
import { FaLock } from "react-icons/fa";

const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    mismatch: false,
    tooShort: false,
    apiError: "",
  });
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("recoveryEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate("/forgot-password");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });

    if (name === "confirmPassword" || errors.mismatch || errors.tooShort) {
      setErrors({
        mismatch: false,
        tooShort: false,
        apiError: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isTooShort = passwords.newPassword.length < 8;
    const isMismatch = passwords.newPassword !== passwords.confirmPassword;

    if (isTooShort || isMismatch) {
      setErrors({
        mismatch: isMismatch,
        tooShort: isTooShort,
        apiError: "",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create form data as shown in your working Postman example
      const formData = new FormData();
      formData.append("email", email);
      formData.append("newPassword", passwords.newPassword);
      formData.append("confirmPassword", passwords.confirmPassword);

      const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/reset-password", {
        method: "POST",
        body: formData, // Send as form-data
      });

      const result = await response.text();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          alert(" password reset successful")
          navigate("/");
          localStorage.removeItem("recoveryEmail");
        }, 3000);
      } else {
        setErrors({ 
          mismatch: false, 
          tooShort: false, 
          apiError: result || "Password reset failed" 
        });
      }
    } catch (error) {
      setErrors({ 
        mismatch: false, 
        tooShort: false, 
        apiError: "Error resetting password: " + error.message 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="logo1">
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
              minLength="8"
              required
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
              minLength="8"
              required
            />
            <FaLock className="icon" />
          </div>

          {(errors.mismatch || errors.tooShort) && (
            <div className="error-message">
              {errors.mismatch && <p>Passwords don't match!</p>}
              {errors.tooShort && <p>Password must be at least 8 characters!</p>}
            </div>
          )}

          {errors.apiError && (
            <div className="error-message">
              <p>{errors.apiError}</p>
            </div>
          )}

          {success && (
            <div className="success-message">
              <p>Password reset successfully! Redirecting to login...</p>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn3" 
            disabled={isLoading || success}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;