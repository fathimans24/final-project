import React from "react";
// import { cards, projects } from "../../data";
import proVideo from '../../assets/search/proVideo.mp4'
import "./Video.css"

function Video() {
  return (
    <div className="home">
      
      {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src={proVideo} controls />
          </div>
        </div>
      </div>
    </div>  
    );
}


export default Video;