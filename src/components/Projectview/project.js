import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './project.css';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://portfolio-backend-em5j.vercel.app/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className='project-list'>
      <h2>Project List</h2>
      {projects.length > 0 ? (
        <Carousel showStatus={false} showThumbs={true} infiniteLoop={true}>
          {projects.map((project) => (
            <div className='project-card' key={project._id}>
              <h3>{project.projectName}</h3>
              <p>{project.projectDetails}</p>
              {project.projectImage && (
                <img
                  src={`data:image/jpeg;base64,${project.projectImage}`}
                  alt={project.projectName}
                  className='project-image'
                />
              )}
              <a href={project.projectLink} target='_blank' rel='noopener noreferrer'>
                View Project
              </a>
            </div>
          ))}
        </Carousel>
      ) : (
        <p className='no-projects'>No projects found</p>
      )}
    </div>
  );
};

export default Project;
