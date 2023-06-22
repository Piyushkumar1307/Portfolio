import React from "react";
import "./pabout.css";
import image from "../Images/Piyush.jpeg";

const About = () => {
  return (
    <>
      
      <div className="pabout-container">
        <div className="image-container">
          <img src={image} alt="About us" />
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <p>
            I am an ambitious computer science student at NIIT University.
            Currently pursuing my Bachelors in Computer Science and Engineering,
            I aim to build a career at the intersection of web development and
            AI.
          </p>
          <p>
            I developed a passion for computers at a young age, spending much of
            my spare time tinkering with code and building small web
            applications. I completed my schooling from Bihar Board and chose to
            study computer engineering to pursue my interests at a higher
            level.
          </p>
          <p>
            When I'm not studying data structures or algorithms, I enjoy fitness
            and outdoor activities like hiking. Being physically active helps
            balance my predominantly sedentary lifestyle as a student. I also
            enjoy spending time developing small web and game applications as a
            hobby. I especially like science fiction movies for the futuristic
            technologies they showcase.
          </p>
          <p>
            As I progress through university, I aspire to increase my knowledge
            and build up a portfolio of impactful web and AI projects which
            demonstrate my programming and problem-solving abilities. My
            ultimate dream is to launch a tech startup that could make a
            positive difference in the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
