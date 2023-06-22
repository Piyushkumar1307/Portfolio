import React from 'react';
import { Link } from 'react-router-dom';
import './action.css';

const ChooseAction = () => {
  return (
    <div className="choose-action">
      <h2 className="choose-action-title">Choose Action</h2>
      <div className="choose-action-buttons">
        <Link to="/uploadcert" className="choose-action-button">Upload Certificate</Link>
        <Link to="/uploadpro" className="choose-action-button">Upload Project</Link>
      </div>
    </div>
  );
};

export default ChooseAction;
