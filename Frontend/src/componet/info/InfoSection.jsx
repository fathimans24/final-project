import React from 'react';
import './InfoSection.css';
import deviceImage from '../../assets/search/log.jpg'; 
import { Link } from 'react-router-dom';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="text-content">
        <h5>Forget the old rules
        </h5>
        <p>
        "Looking to bring your project to the next level? Our freelance marketplace is the ultimate destination for connecting with top-tier professionals across industries. 
        </p>
       <Link to='/getstart'><button className="venmo-button">get started</button></Link>
        
      </div>
      <div className="image-content">
        <img src={deviceImage} alt="Device displaying app or QR code" className="device-image" />
      </div>
    </section>
  );
}

export default InfoSection;
