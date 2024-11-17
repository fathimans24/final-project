import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='/src/assets/search/workit.jpeg' alt="Logo" className="logo-image" /> 
        
      </div>
      <div className="navbar-links">
      <Link to='/freelancer'> <a href="#" className="navbar-link">Find Freelancers</a></Link>
       <Link to='/findjobs'><a href="#" className="navbar-link">Find Job</a></Link>
        <Link to='/about'><a href="#" className="navbar-link">About</a></Link>
        <Link to='/solution'><a href="#" className="navbar-link">Solutions</a></Link>
      </div>
      <div className="navbar-actions">
       <Link to='/sign'> <a href="#" className="action-link">Sign Up</a></Link>
       <Link to={'/login'}> <a href="#" className="action-link">Log In</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;