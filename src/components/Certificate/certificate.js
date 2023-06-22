import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import './certificate.css';

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/certificates');
      setCertificates(response.data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    }
  };

  const images = certificates.map((certificate) => ({
    original: `data:image/jpeg;base64,${certificate.image}`,
    thumbnail: `data:image/jpeg;base64,${certificate.image}`,
  }));

  return (
    <div className="certificate-container">
      <div className="certificate">
        <h2 className="certificate-heading">Certificates</h2>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Certificate;