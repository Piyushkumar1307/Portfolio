import React, { useState } from 'react';
import axios from 'axios';
import "./uploadcert.css"

const UploadCert = () => {
  const [certificateName, setCertificateName] = useState('');
  const [certificateDetails, setCertificateDetails] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleCertificateNameChange = (e) => {
    setCertificateName(e.target.value);
  };

  const handleCertificateDetailsChange = (e) => {
    setCertificateDetails(e.target.value);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('certificateName', certificateName);
      formData.append('certificateDetails', certificateDetails);
      formData.append('image', selectedImage);

      await axios.post('https://portfolio-backend-em5j.vercel.app/certificates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset the form fields
      setCertificateName('');
      setCertificateDetails('');
      setSelectedImage(null);

      setIsUploaded(true); // Set the uploaded state to true

      console.log('Certificate uploaded successfully');
    } catch (error) {
      console.error('Error uploading certificate:', error);
    }
  };

  return (
    <div>
      <h2>Upload Certificate</h2>
      {isUploaded && <p>Certificate uploaded successfully!</p>}
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div>
          <label htmlFor="certificateName">Certificate Name:</label>
          <input
            type="text"
            id="certificateName"
            value={certificateName}
            onChange={handleCertificateNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="certificateDetails">Certificate Details:</label>
          <textarea
            id="certificateDetails"
            value={certificateDetails}
            onChange={handleCertificateDetailsChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Certificate Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Upload Certificate</button>
      </form>
    </div>
  );
};

export default UploadCert;
