import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar1";
import Navbar from "./navbar1";
import eventBanner from "../image.png"; // Adjust if needed
import "../css/eventdetails.css"; // Style this file

const Eventdetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="dashboard-container2">
      <div className="sidebar-with-welcome2">
        <Sidebar />
      </div>

      <div className="main-content2">
        <Navbar />

        <div className="event-details-container">
          <div className="event-header">
            <button className="back-button" onClick={handleBack}>
  &lt;
</button>

            <h2>Celebrating 5 Years of Success</h2>
          </div>

          <img src={eventBanner} alt="Event Banner" className="event-banner" />

          <p className="event-description">
            Join us as we commemorate five incredible years of growth, achievements, and lasting relationships! 
            This milestone wouldn’t have been possible without the dedication of our team, the support of our 
            partners, and the trust of our valued clients. We look forward to celebrating together and sharing 
            our journey with you.
            <br /><br />
            Over the past five years, we have expanded our horizons, embraced challenges, and reached new heights. 
            From our humble beginnings to where we stand today, this journey has been one of resilience, determination, 
            and innovation. We owe our success to each and every individual who has contributed to our story, and 
            this event is a token of our appreciation.
            <br /><br />
            This celebration will be a night of inspiration, joy, and reflection. Expect an evening filled with 
            heartfelt speeches, exciting performances, and a walk down memory lane as we revisit our proudest moments. 
            Whether you have been with us from the start or joined us along the way, your presence has made a difference, 
            and we want to celebrate that together.
          </p>

          <ul className="event-info">
            <li><strong>Start Date:</strong> 16-03-2025</li>
            <li><strong>End Date:</strong> 17-03-2025</li>
            <li><strong>Time:</strong> 9:00 am</li>
            <li><strong>Venue:</strong> Office</li>
          </ul>

          <h3>Program Schedule:</h3>
          <ol className="event-schedule">
            <li>Welcome Speech – Tashi</li>
            <li>Journey Through the Years – A visual and narrative presentation highlighting our milestones, challenges, and achievements.</li>
            <li>Keynote Address – Special guest.</li>
            <li>Awards & Recognitions – Honoring outstanding contributions by employees, partners, and supporters.</li>
            <li>Dinner & Networking – Enjoy a delicious meal while connecting with colleagues and industry peers.</li>
            <li>Entertainment & Celebrations – Live performances, music, and a toast to our future success!</li>
            <li>Closing Remarks – A heartfelt message from CEO on the road ahead.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Eventdetails;
