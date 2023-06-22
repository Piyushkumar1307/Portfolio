import React, { useState } from 'react';
import axios from 'axios';
import "./uploadpro.css";

const Uploadpro = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [projectLink, setProjectLink] = useState('');

  const handleProjectImageChange = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const handleProjectUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('projectName', projectName);
      formData.append('projectDetails', projectDetails);
      formData.append('projectImage', projectImage);
      formData.append('projectLink', projectLink);

      await axios.post('http://localhost:5000/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset form fields after successful upload
      setProjectName('');
      setProjectDetails('');
      setProjectImage(null);
      setProjectLink('');

      alert('Project uploaded successfully');
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('Failed to upload project');
    }
  };

  return (
    <div>
      <h2>Upload Project</h2>
      <form>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="projectDetails">Project Details:</label>
          <textarea
            id="projectDetails"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="projectImage">Project Image:</label>
          <input type="file" id="projectImage" onChange={handleProjectImageChange} />
        </div>
        <div>
          <label htmlFor="projectLink">Project Link:</label>
          <input
            type="text"
            id="projectLink"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleProjectUpload}>
          Upload Project
        </button>
      </form>
    </div>
  );
};

export default Uploadpro;
