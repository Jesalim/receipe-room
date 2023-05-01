import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="../src/assets/login-logo.png" alt="" />
        <p>Allrecipes is part of the Dotdash Meredith publishing family.</p>
        <p> © 2023 Recipe Room.All rights reserved.</p>
      </div>
      <div className="footer-content">
        <div className="features">
          <ul>
            <li>DINNERS</li>
            <li>MEALS</li>
            <li>INGREDIENTS</li>
            <li>CUISINE</li>
            <li>KITCHEN TIPS</li>
            <li>NEWS</li>
            <li>FEATURES</li>
          </ul>
        </div>
        <div className="common">
          <ul>
            <li>About Us</li>
            <li>Anti-Racism Pledge</li>
            <li>Product Vetting</li>
            <li>Advertise</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="common">
          <ul>
            <li>Editorial Process</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>NEWSLETTER</h3>
          <p>
            Subscribe to the Recipe-Room newsletter to get your weekly dose of
            news and updates.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="    &#xf0e0;    Email"></input>
            <h4>Subscribe</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
