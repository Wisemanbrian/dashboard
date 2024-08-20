import { FaHome, FaClipboardList, FaUsers, FaTasks, FaCog } from 'react-icons/fa';
import React from 'react';
import '../styles/styles.css'; 
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <h1>Dashboard</h1>
        <nav>
          <a href="#"><FaHome /> Dashboard</a>
          <a href="#"><FaTasks /> Assignments</a>
          <a href="#"><FaClipboardList /> Classes</a>
          <a href="#"><FaUsers /> Students</a>
        </nav>
      </div>
      <div>
        <a href="#"><FaCog /> Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
