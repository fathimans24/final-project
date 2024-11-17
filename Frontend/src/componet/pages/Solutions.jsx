import React from 'react';
import './Solution.css';
import Header from '../header/Header';

const freelancers = [
  {
    id: 1,
    name: 'J. Doe',
    role: 'Founder at Whitelance',
    rating: 5,
    hourlyRate: '£10/hr',
    description: 'John is a talented freelancer with a whole range of fantastic skills.',
    matchPercentage: '0%',
  },
  {
    id: 2,
    name: 'L. Omelechenko',
    role: 'Introduction',
    rating: null,
    hourlyRate: '£10/hr',
    description: 'Read More',
    matchPercentage: '0%',
  },
  {
    id: 3,
    name: 'I. Fadaei',
    role: 'Introduction',
    rating: null,
    hourlyRate: '£50/hr',
    description: "Here's my intro.",
    matchPercentage: '0%',
  },
];

function Solutions() {
  return (
    <>
      <Header />
      <div className="solutions-container">
        <h2>Let explore what u need........</h2>
        <div className="card-list">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="card">
              <div className="card-info">
                <img src={'https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?t=st=1731396077~exp=1731399677~hmac=4954e54ef84646e6a2b00189701c657b275052af5216cb8d92cccb7190792fe1&w=740'} alt="Profile" className="profile-img" />
                <div className="card-details">
                  <h3>{freelancer.name}</h3>
                  <p>{freelancer.role}</p>
                  {freelancer.rating && (
                    <p className="rating">⭐ {freelancer.rating}</p>
                  )}
                  <p>{freelancer.description}</p>
                  <p className="hourly-rate">{freelancer.hourlyRate}</p>
                  <p className="match-percentage">{freelancer.matchPercentage} MATCH</p>
                </div>
              </div>
              <div className="card-actions">
                <button>View Profile</button>
                <button>Invite</button>
                <button>Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Solutions;
