import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            
          </div>
          <div className="item">
            <h2>Resource</h2>
            <span>Help & FAQ</span>
            <span>Blog</span>
            <span>Contact Us</span>
            <span>Mobile App</span>
            <span>APIs</span>
            <span>Cookie Settings</span>
          </div>
          
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>Policy</h2>
            <span>Ip Policy</span>
            <span>Privacy Policy</span>
            <span>Term and Service</span>
           
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Workitup</h2>
            <span>© WorkiUp International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="https://img.freepik.com/premium-vector/download-new-twitter-logo-free-twitter-marker-free-icon-twitter-clip-art_999008-1048.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              <img src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296987.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              
              <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
            </div>
            <div className="link">
              <img src="https://img.freepik.com/premium-photo/cartoon-planet-earth-vector-icon-white-background-generated-ai_847976-592.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
