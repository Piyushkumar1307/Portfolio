import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';
import imageSrc from '../Images/piyush.jpg'; // Replace with the actual image file path

const About = () => {
  const navigate = useNavigate();
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createRaindrop = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const value = Math.random() < 0.5 ? '0' : '1';

      return {
        x,
        y,
        value,
      };
    };

    const updateRaindrops = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 100; i++) {
        const raindrop = createRaindrop();
        ctx.fillStyle = 'rgb(50, 180, 61)';
        ctx.font = '23px Arial';
        ctx.lineWidth = 5;
        ctx.fillText(raindrop.value, raindrop.x, raindrop.y);
      }

      animationFrameId = requestAnimationFrame(updateRaindrops);
    };

    resizeCanvas();
    updateRaindrops();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleImageClick = () => {
    setShowQuestion((prevShowQuestion) => !prevShowQuestion);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleAnswerSubmit = () => {
    const isAnswerCorrect = answer.toLowerCase() === 'yes';

    if (isAnswerCorrect) {
      navigate('/details');
    } else {
      setShowErrorMessage(true);
      setAnswer('');
    }
  };

  return (
    <div className="about-container">
      <canvas ref={canvasRef} className="rain-effect" />
      <div className="choose-text">Click on Image to get Info.</div>
      <div className="circle-container">
        <img className="image" src={imageSrc} alt="Piyush" onClick={handleImageClick} />
        {showQuestion && (
          <div className="question-container">
            <div className="question">Are you Escaping Matrix?</div>
            <input
              type="text"
              className="answer-input"
              value={answer}
              onChange={handleAnswerChange}
            />
            <button className="submit-button" onClick={handleAnswerSubmit}>
              Submit
            </button>
            {showErrorMessage && (
              <div className="error-message">Incorrect answer. Please try again.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
