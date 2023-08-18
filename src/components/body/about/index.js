import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Shazal Hafeez</span>.
          <br /> I have experience working with{" "}
          <p href="https://rad-wi.com/">RADWI</p>.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/profile_pic.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
