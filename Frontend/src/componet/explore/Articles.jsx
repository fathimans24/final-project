import React, { useRef } from 'react';
import './Article.css';

const Gallery = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const items = [
        { title: 'AI Artists', subtitle: 'Add talent to AI', img: 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1730985158~exp=1730988758~hmac=eb6e253af141be6f3433f3cb7aa28a1fdbd4bfedd484cd6c1e5dd987e7c9ed66&w=996' },
        { title: 'Logo Design', subtitle: 'Build your brand', img: 'https://img.freepik.com/premium-photo/thoughtful-businessman-programmer-casual-wear-typing-laptop-office-workplace-concept-tech-work-business-education-internet-surfing-information-technology-ai-hologram_269648-14574.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'WordPress', subtitle: 'Customize your site', img: 'https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142153.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'Voice Over', subtitle: 'Share your message', img: 'https://img.freepik.com/free-photo/close-up-talented-woman-singing_23-2149199997.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'Video Explainer', subtitle: 'Engage your audience', img: 'https://img.freepik.com/free-photo/asia-businesswoman-using-desktop-talk-colleagues-about-plan-video-call-meeting-living-room_7861-3175.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'Content Creater', subtitle: 'Engage your audience', img:'https://media.istockphoto.com/id/1676005325/photo/selfie-phone-screen-and-hands-food-and-table-nutrition-and-influencer-with-blog-social-media.jpg?s=612x612&w=0&k=20&c=ZirCB4FdVovvb_CUWbCVHrQgp38JDbYEm8DdlUnQgpo=' },
        { title: 'Photgrapher', subtitle: 'Engage your audience', img:'https://img.freepik.com/free-photo/focused-young-photographer-is-taking-photo-dark-grunge-background_613910-12960.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'Interior Designer', subtitle: 'Engage your audience', img:'https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'Arcitecuture', subtitle: 'Engage your audience', img:'https://img.freepik.com/free-photo/modern-business-building-scenery-touching-sky_181624-5785.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
        { title: 'Artisan', subtitle: 'Engage your audience', img:'https://media.istockphoto.com/id/1183183791/photo/talented-female-artist-works-on-abstract-oil-painting-using-paint-brush-she-creates-modern.jpg?s=612x612&w=0&k=20&c=QrR6QQxioyM6zT5qPpKxr9KFz2VRrhVO3rXJ8fIfswY=' },
        { title: 'Sculptures', subtitle: 'Engage your audience', img:'https://img.freepik.com/free-photo/side-view-woman-clay-sculpting_23-2149730894.jpg?ga=GA1.1.1478068123.1730924170&semt=ais_hybrid' },
    ];

    return (
        <div className="gallery-container">
            <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
            <div className="gallery" ref={scrollRef}>
                {items.map((item, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={item.img} alt={item.title} className="gallery-image" />
                        <div className="gallery-overlay">
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
        </div>
    );
};

export default Gallery;
