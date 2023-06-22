import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../Images/intro.mp4';
import image1 from '../Images/red.png';
import image2 from '../Images/blue.png';
import './home.css';

const Home = () => {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (page) => {
    setShowText(false);
    setTimeout(() => {
      navigate(page); // Redirect to the specified page
    }, 10);
  };

  const handleImageHover = () => {
    setShowText(true);
  };

  const handleImageLeave = () => {
    setShowText(false);
  };

  return (
    <div className="home-container">
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="image-overlay">
        <div className="choose-text">Choose one</div> {/* Added choose-text div */}
        <div className="image-wrapper">
          <img
            className={`home-image ${showText ? 'rotate' : ''}`}
            src={image1}
            alt=""
            onClick={() => handleImageClick('/auth')}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
          {showText && <div className="image-text">Backend</div>}
        </div>
        <div className="image-wrapper">
          <img
            className={`home-image ${showText ? 'rotate' : ''}`}
            src={image2}
            alt=""
            onClick={() => handleImageClick('/about')}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
          {showText && <div className="image-text">Frontend</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
