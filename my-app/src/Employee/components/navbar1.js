// import React from "react";
// import "../css/navbar.css";
// import { MdDateRange } from "react-icons/md";
// import { IoMdPerson } from "react-icons/io";

// const Navbar = () => {
//   // Get today's date
//   const today = new Date();
//   const options = { day: 'numeric', month: 'long' };
//   const formattedDate = today.toLocaleDateString('en-US', options);

//   return (
//     <div className="dashboard-container1">
//       {/* Main Content */}
//       <div className="main-content1">
//         {/* Navbar */}
//         <div className="navbar1">
//           <div style={{fontSize:"14px", fontWeight:"bold",marginRight:"1090px", marginTop:"10px", color:"#4A6D7C", borderBottom:"1px solid #4A6D7C" }}>EMS</div>
//           <span className="date1">
//             <MdDateRange /> {formattedDate}
//           </span>
//           <span className="profile-icon1">
//             <IoMdPerson />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";
import { MdDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  
  // Get today's date
  const today = new Date();
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  // Handle profile icon click
  const handleProfileClick = () => {
    navigate("/employee/profile");
  };

  return (
    <div className="dashboard-container1">
      {/* Main Content */}
      <div className="main-content1">
        {/* Navbar */}
        <div className="navbar1">
          <div style={{
            fontSize: "14px", 
            fontWeight: "bold",
            marginRight: "1090px", 
            marginTop: "10px", 
            color: "#4A6D7C", 
            borderBottom: "1px solid #4A6D7C"
          }}>
            EMS
          </div>
          <span className="date1">
            <MdDateRange /> {formattedDate}
          </span>
          <span 
            className="profile-icon1" 
            onClick={handleProfileClick}
            title="View Profile"
          >
            <IoMdPerson />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;