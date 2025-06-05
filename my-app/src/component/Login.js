
// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "./Login.css";
// // // import { FaUser, FaLock } from "react-icons/fa";
// // // import logo from "../component/logo.png";

// // // const Login = () => {
// // //   const [userId, setUserId] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault(); // Prevent default form submission behavior
// // //     setError(""); // Clear previous errors

// // //     if (!userId || !password) {
// // //       setError("Please enter both User ID and Password");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/login", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json", // Changed to JSON
// // //         },
// // //         body: JSON.stringify({
// // //           userId,
// // //           password,
// // //         }),
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error(response.status === 403 ? "Invalid credentials" : "Login failed");
// // //       }

// // //       const result = await response.json(); // Assuming server returns JSON

// // //       // Check user ID prefix and redirect accordingly
// // //       if (userId.startsWith("EMP")) {
// // //         navigate("/employee/dashboard");
// // //       } else if (userId.startsWith("USER")) {
// // //         navigate("/admin/dashboard");
// // //       } else {
// // //         // Default redirect if prefix doesn't match
// // //         navigate("/dashboard");
// // //       }

// // //     } catch (error) {
// // //       setError(error.message);
// // //       console.error("Login error:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <div className="logo1">
// // //         <img src={logo} alt="Your Logo" />
// // //       </div>
// // //       <div className="login-box">
// // //         <h2>LOGIN</h2>
// // //         <p className="sub-text1">For Your Account</p>

// // //         {error && <div className="error-message">{error}</div>}

// // //         <form onSubmit={handleLogin}>
// // //           <div className="input-group1">
// // //             <input
// // //               type="text"
// // //               placeholder="User ID"
// // //               value={userId}
// // //               onChange={(e) => setUserId(e.target.value)}
// // //               required
// // //             />
// // //             <FaUser className="icon" />
// // //           </div>

// // //           <div className="input-group1">
// // //             <input
// // //               type="password"
// // //               placeholder="Password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //             />
// // //             <FaLock className="icon" />
// // //           </div>

// // //           <div className="options">
// // //             <a href="/forgotpassword">Forgot Password?</a>
// // //           </div>

// // //           <button type="submit" className="login-btn1">
// // //             LOGIN
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Login.css";
// // import { FaUser, FaLock } from "react-icons/fa";
// // import logo from "../component/logo.png";

// // const Login = () => {
// //   const [userId, setUserId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Auto-dismiss error after 5 seconds
// //   useEffect(() => {
// //     if (error) {
// //       const timer = setTimeout(() => {
// //         setError("");
// //       }, 5000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [error]);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     console.log("Login attempt:", { userId, password });

// //     if (!userId || !password) {
// //       const errMsg = "Please enter both User ID and Password";
// //       setError(errMsg);
// //       console.error("Validation error:", errMsg);
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ userId, password }),
// //       });

// //       console.log("API response:", response.status);

// //       if (!response.ok) {
// //         const errorData = await response.json().catch(() => ({}));
// //         const errMsg = errorData.message || 
// //                       (response.status === 401 ? "Invalid credentials" : 
// //                       "Login failed");
// //         console.error("API error:", errMsg, errorData);
// //         throw new Error(errMsg);
// //       }

// //       const result = await response.json();
// //       console.log("Login success:", result);

// //       if (userId.startsWith("EMP")) navigate("/employee/dashboard");
// //       else if (userId.startsWith("USER")) navigate("/admin/dashboard");
// //       else navigate("/dashboard");

// //     } catch (error) {
// //       console.error("Login error:", error);
// //       setError(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="logo1">
// //         <img src={logo} alt="Your Logo" />
// //       </div>
// //       <div className="login-box">
// //         <h2>LOGIN</h2>
// //         <p className="sub-text1">For Your Account</p>

// //         {/* Error message (absolute positioned) */}
// //         {error && (
// //           <div className="error-message">
// //             ⚠️ {error}
// //           </div>
// //         )}

// //         <form onSubmit={handleLogin}>
// //           <div className="input-group1">
// //             <input
// //               type="text"
// //               placeholder="User ID"
// //               value={userId}
// //               onChange={(e) => setUserId(e.target.value)}
// //               required
// //             />
// //             <FaUser className="icon" />
// //           </div>

// //           <div className="input-group1">
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //             <FaLock className="icon" />
// //           </div>

// //           <div className="options">
// //             <a href="/forgotpassword">Forgot Password?</a>
// //           </div>

// //           <button 
// //             type="submit" 
// //             className="login-btn1"
// //             disabled={loading}
// //           >
// //             {loading ? "Logging in..." : "LOGIN"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import { FaUser, FaLock } from "react-icons/fa";
// import logo from "../component/logo.png";

// const Login = () => {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (error) {
//       const timer = setTimeout(() => setError(""), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [error]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         const errMsg = errorData.message || 
//                       (response.status === 401 ? "Invalid credentials" : 
//                       "Login failed");
//         throw new Error(errMsg);
//       }

//       const result = await response.json();
      
//       // Store user details
//       console.log("Logged in user ID:", userId);
//       console.log("User details from server:", result);
      
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('userDetails', JSON.stringify(result));

//       // Redirect based on user type
//       if (userId.startsWith("EMP")) {
//         navigate("/employee/dashboard");
//         console.log("Employee logged in:", result.name);
//       } else if (userId.startsWith("USER")) {
//         navigate("/admin/dashboard");
//         console.log("Admin logged in:", result.name);
//       } else {
//         navigate("/dashboard");
//         console.log("Generic user logged in:", result.name);
//       }

//     } catch (error) {
//       console.error("Login error:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="logo1">
//         <img src={logo} alt="Company Logo" />
//       </div>
//       <div className="login-box">
//         <h2>LOGIN</h2>
//         <p className="sub-text1">For Your Account</p>

//         {error && (
//           <div className="error-message">
//             ⚠️ {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>
//           <div className="input-group1">
//             <input
//               type="text"
//               placeholder="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               required
//             />
//             <FaUser className="icon" />
//           </div>

//           <div className="input-group1">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <FaLock className="icon" />
//           </div>

//           <div className="options">
//             <a href="/forgotpassword">Forgot Password?</a>
//           </div>

//           <button 
//             type="submit" 
//             className="login-btn1"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "LOGIN"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../component/logo.png";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setLoading(true);

  //   try {
  //     const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ userId, password }),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json().catch(() => ({}));
  //       const errMsg = errorData.message || 
  //                     (response.status === 401 ? "Invalid credentials" : 
  //                     "Login failed");
  //       throw new Error(errMsg);
  //     }

  //     const result = await response.json();
  //       // Clean the token before storing
  //     const rawToken = result.token;
  //     const cleanToken = rawToken.replace(/^Bearer\s+/i, '');

  //     // Store user details and token
  //     console.log("Logged in user ID:", userId);
  //     console.log("User details from server:", result);
  //     // console.log("Authentication token:", result.token); // Log the token
      
  //     localStorage.setItem('userId', userId);
  //     // / Save the email from userDetails
  //     const userEmail = result.userDetails?.email || '';
  //     const userName = result.userDetails?.name|| '';
  //     localStorage.setItem('userDetails', JSON.stringify(result.userDetails));
  //     localStorage.setItem('userDetails', JSON.stringify(result));
  //       console.log("Stored user email:", userEmail)
  //       console.log("Stored user email:", userName)
  //     // localStorage.setItem('token', result.token); // Store the token
  //     localStorage.setItem('userRole', result.role); // Store user role if available
  //     localStorage.setItem('token', cleanToken); 
  //     // console.log("Stored token in localStorage:", localStorage.getItem('token')); // Verify storage

  //     console.log("Stored CLEAN token:", cleanToken);
  //     // Redirect based on user type
  //     if (userId.startsWith("EMP")) {
  //       navigate("/employee/dashboard");
  //       console.log("Employee logged in:", result.name);
  //     } else if (userId.startsWith("USER")) {
  //       navigate("/admin/dashboard");
  //       console.log("Admin logged in:", result.name);
  //     } else {
  //       navigate("/dashboard");
  //       console.log("Generic user logged in:", result.name);
  //     }

  //   } catch (error) {
  //     console.error("Login error:", error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const response = await fetch("http://localhost:8765/EMSUSERMICROSERVICE/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errMsg = errorData.message || 
                    (response.status === 401 ? "Invalid credentials" : 
                    "Login failed");
      throw new Error(errMsg);
    }

    const result = await response.json();
    
    // Clean the token before storing
    const cleanToken = result.token.replace(/^Bearer\s+/i, '');
    
    // Extract user details
    const userEmail = result.userDetails?.email || '';
    const userName = result.userDetails?.name || '';
    const userRole = result.role || '';
    const approver = result.userDetails?.approver || '';

    // Store authentication and user data
    localStorage.setItem('token', cleanToken);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userRole', userRole);
    localStorage.setItem('approver', approver);
    
    // Store complete user details as a single object if needed
    localStorage.setItem('userDetails', JSON.stringify(result.userDetails));

    // Log stored values for verification
    console.log("Login successful. Stored values:");
    console.log("User ID:", userId);
    console.log("User Email:", userEmail);
    console.log("User Name:", userName);
    console.log("User Role:", userRole);
    console.log("Approver:", approver);
    console.log("Clean Token:", cleanToken);

    // Redirect based on user type
    const redirectPath = userId.startsWith("EMP") ? "/employee/dashboard" :
                        userId.startsWith("USER") ? "/admin/dashboard" :
                        "/dashboard";
    
    navigate(redirectPath);
    console.log(`Redirecting ${userName} (${userId}) to ${redirectPath}`);

  } catch (error) {
    console.error("Login error:", error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-container">
      <div className="logo2">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="login-box">
        <h2>LOGIN</h2>
        <p className="sub-text1">For Your Account</p>

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-group1">
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-group1">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="options">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="login-btn1"
            disabled={loading}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;