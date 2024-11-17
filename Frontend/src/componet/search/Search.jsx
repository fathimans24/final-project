import React from "react";
import "./Search.css";

const FreelancerSection = () => {
  return (
    <div className="freelancer-section">
      <div className="content">
        <h1>Find & Hire Expert Freelancers</h1>
        <p>
          Work with the best freelance talent from around the world on our
          secure, flexible and cost-effective platform.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="What skill are you looking for?"
            className="search-input"
          />
          <button className="search-button"></button>
          
        </div>
        <div className="tags">
          <span className="tag">Artificial Intelligent</span>
          <span className="tag">Web Development</span>
          <span className="tag">Graphic Design</span>
          <span className="tag">Design</span>
          <span className="tag">Writing</span>
        </div>
      </div>
     
    </div>
  );
};

export default FreelancerSection;