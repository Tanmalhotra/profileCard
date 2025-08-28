import React from "react";
import "./ProfileCard.css"; // we'll add styles here

const ProfileCard = () => {
  return (
    <>
    <div className="main">
    <div className="profile-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Tanisha Malhotra</h2>
      <p className="profile-title">Senior Software Developer</p>
            <p className="profile-description">Description</p>


      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <button className="cta-button">Contact Me</button>
    </div></div></>
  );
};

export default ProfileCard;
