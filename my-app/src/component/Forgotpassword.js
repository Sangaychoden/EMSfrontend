
// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom"; // Import useNavigate
// // // import "./fpassword.css";
// // // import logo from "../component/logo.png";
// // // import { FaUser } from "react-icons/fa";

// // // const ForgotPassword = () => {
// // //   const [showError, setShowError] = useState(false);
// // //   const [email, setEmail] = useState("");
// // //   const navigate = useNavigate(); // Initialize the navigate function

// // //   const handleConfirm = () => {
// // //     // Simulating an error message display
// // //     setShowError(true);
// // //   };

// // //   const handleOkClick = () => {
// // //     setShowError(false);
// // //     navigate('/otp'); // Navigate to the OTP page
// // //   };

// // //   return (
// // //     <div className="forgot-password-container">
// // //       <div className="logo">
// // //         <img src={logo} alt="Your Logo" />
// // //       </div>
// // //       <div className="forgot-password-box">
// // //         <h2>LOGIN</h2>
// // //         <p className="sub-text">For Your Account</p>
// // //         <h4>Forgot Password</h4>
// // //         <div className="input-group">
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //           />
// // //           <FaUser className="icon" />
// // //         </div>
// // //         <button className="submit-btn" onClick={handleConfirm}>Confirm</button>
// // //       </div>

// // //       {showError && (
// // //         <div className="error-box1">
// // //           <p>
// // //             There is no account registered on "sangaychoden@gmail.com" <strong>{email}</strong>.
// // //           </p>
// // //           <p>Kindly re-enter the correct Email.</p>
// // //           <button className="error-ok-btn" onClick={handleOkClick}>
// // //             OK
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ForgotPassword;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./fpassword.css";
// // import logo from "../component/logo.png";
// // import { FaUser } from "react-icons/fa";

// // const ForgotPassword = () => {
// //   const [email, setEmail] = useState("");
// //   const [showError, setShowError] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const navigate = useNavigate();

// //   const handleConfirm = async () => {
// //     try {
// //       const formData = new FormData();
// //       formData.append('email', email);

// //       const response = await fetch("http://localhost:8080/api/forgot-password", {
// //         method: "POST",
// //         body: formData // Send as form-data instead of JSON
// //       });

// //       const result = await response.text(); // Changed from json() to text()

// //       if (response.ok) {
// //         localStorage.setItem("recoveryEmail", email);
// //         navigate("/otp");
// //       } else {
// //         setErrorMessage(result || "No account registered with that email.");
// //         setShowError(true);
// //       }
// //     } catch (error) {
// //       setErrorMessage("Server error: " + error.message);
// //       setShowError(true);
// //     }
// //   };

// //   const handleOkClick = () => {
// //     setShowError(false);
// //   };

// //   return (
// //     <div className="forgot-password-container">
// //       <div className="logo">
// //         <img src={logo} alt="Your Logo" />
// //       </div>
// //       <div className="forgot-password-box">
// //         <h2>LOGIN</h2>
// //         <p className="sub-text">For Your Account</p>
// //         <h4>Forgot Password</h4>
// //         <div className="input-group">
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <FaUser className="icon" />
// //         </div>
// //         <button className="submit-btn" onClick={handleConfirm}>Confirm</button>
// //       </div>

// //       {/* {showError && (
// //         <div className="error-box1">
// //           <p>{errorMessage}</p>
// //           <button className="error-ok-btn" onClick={handleOkClick}>OK</button>
// //         </div> */}
// //         {showError && (
// //   <div className="error-box1">
// //     <p>
// //       There is no account registered on <strong>"{email}"</strong>.
// //     </p>
// //     <p>Kindly re-enter the correct Email.</p>
// //     <button className="error-ok-btn" onClick={handleOkClick}>
// //       OK
// //     </button>
// //   </div>
// // )}

    
// //     </div>
// //   );
// // };

// // export default ForgotPassword;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./fpassword.css";
// import logo from "../component/logo.png";
// import { FaUser } from "react-icons/fa";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [showError, setShowError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleConfirm = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('email', email);

//       const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/forgot-password", {
//         method: "POST",
//         body: formData // Send as form-data instead of JSON
//       });

//       const result = await response.text(); // Changed from json() to text()

//       if (response.ok) {
//         localStorage.setItem("recoveryEmail", email);
//         navigate("/otp");  // Redirect to OTP page
//       } else {
//         setErrorMessage(result || "No account registered with that email.");
//         setShowError(true);
//       }
//     } catch (error) {
//       setErrorMessage("Server error: " + error.message);
//       setShowError(true);
//     }
//   };

//   const handleOkClick = () => {
//     setShowError(false);
//     // navigate("/");  // Redirect to login page
//   };

//   return (
//     <div className="forgot-password-container">
//       <div className="logo">
//         <img src={logo} alt="Your Logo" />
//       </div>
//       <div className="forgot-password-box">
//         <h2>LOGIN</h2>
//         <p className="sub-text">For Your Account</p>
//         <h4>Forgot Password</h4>
//         <div className="input-group">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <FaUser className="icon" />
//         </div>
//         <button className="submit-btn" onClick={handleConfirm}>Confirm</button>

//         {showError && (
//           <div className="error-box1">
//             <p>
//               There is no account registered on <strong>"{email}"</strong>.
//             </p>
//             <p>Kindly re-enter the correct Email.</p>
//             <button className="error-ok-btn" onClick={handleOkClick}>OK</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fpassword.css";
import logo from "../component/logo.png";
import { FaUser } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // const handleConfirm = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("email", email);

  //     const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/forgot-password", {
  //       method: "POST",
  //       body: formData, // Send as form-data instead of JSON
  //     });

  //     const result = await response.text(); // Changed from json() to text()

  //     if (response.ok) {
  //       setShowSuccess(true);
  //       setMessage("OTP has been successfully sent to your email.");
  //       localStorage.setItem("recoveryEmail", email);
  //       setTimeout(() => {
  //         navigate("/otp");  // Redirect to OTP page after a brief delay
  //       }, 2000); // Wait 2 seconds before redirecting
  //     } else {
  //       setShowError(true);
  //       setErrorMessage(result || "No account registered with that email.");
  //     }
  //   } catch (error) {
  //     setShowError(true);
  //     setErrorMessage("Server error: " + error.message);
  //   }
  // };
  const handleConfirm = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
  
      const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/forgot-password", {
        method: "POST",
        body: formData, // Send as form-data instead of JSON
      });
  
      const result = await response.text(); // Changed from json() to text()
  
      if (response.ok) {
        setShowSuccess(true);
        setMessage("OTP has been successfully sent to your email.");
        localStorage.setItem("recoveryEmail", email); // Store the email in localStorage
        setTimeout(() => {
          navigate("/otp");  // Redirect to OTP page after a brief delay
        }, 2000); // Wait 2 seconds before redirecting
      } else {
        setShowError(true);
        setErrorMessage(result || "No account registered with that email.");
      }
    } catch (error) {
      setShowError(true);
      setErrorMessage("Server error: " + error.message);
    }
  };
  
  const handleOkClick = () => {
    setShowError(false);
    setShowSuccess(false);
    setMessage(""); // Reset message
    setErrorMessage(""); // Reset error message
    // navigate("/"); // Redirect to login page if needed
  };

  return (
    <div className="forgot-password-container">
      <div className="logo1">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="forgot-password-box1">
        <h2>LOGIN</h2>
        <p className="sub-text1">For Your Account</p>
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
        <button className="submit-btn1" onClick={handleConfirm}>
          Confirm
        </button>

        {/* Error Message */}
        {showError && (
          <div className="error-box1">
            <p>
              There is no account registered on <strong>"{email}"</strong>.
            </p>
            <p>Kindly re-enter the correct email.</p>
            <button className="error-ok-btn1" onClick={handleOkClick}>
              OK
            </button>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className=" success-box1">
            <p>{message}</p>
            <button className="error-ok-btn" onClick={handleOkClick}>
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
