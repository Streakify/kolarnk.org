import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = ({ onClose }) => {
  return (
    <div className="bg-light border-end" id="sidebar">
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="sidebar-heading">Menu</div>
        <button className="btn btn-dark" onClick={onClose}>
          Close
        </button>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default SideBar;
