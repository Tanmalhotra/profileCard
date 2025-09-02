import React from "react";
import "./ProfileCard.css"; // we'll add styles here
import profileImg from "./assets/tanisha-pic.jpeg";

const ProfileCard = () => {
  return (
    <>
    <div className="main">
    <div className="profile-card">
      <img
        src={profileImg}
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Tanisha Malhotra</h2>
      <p className="profile-title">Senior Software Developer</p>
            <p className="profile-description">Senior front-end developer with 6+ years of experience and expertise in React, JavaScript, HTML, and CSS.</p>


      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> 
      </div>

<a
  href="mailto:tanisha@example.com"
  className="cta-button"
>
  Contact Me
</a>
    </div></div></>
  );
};

export default ProfileCard;
