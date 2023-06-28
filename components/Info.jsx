import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img src="../images/small.jpg" className="image" />
      <h1 className="info-name">Rachel VanHorn</h1>
      <h4 className="info-title">Full Stack Developer</h4>
      <p className="info-website">rkvanhorn.website</p>
      <div className="button-row">
        <button className="email-btn">
          <img src="../images/Mail.png" />
          Email
        </button>
        <button className="linkedin-btn">
          <a href="https://www.linkedin.com/in/rachelkvanhorn/">
            <img src="../images/linkedin.png" />
          </a>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
