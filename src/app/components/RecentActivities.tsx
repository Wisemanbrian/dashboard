import React from 'react';
import '../styles/recent-activities.css'; 

const RecentActivities: React.FC = () => {
  return (
    <div>
      <h3>Recent Activities</h3>
      <ul>
        <li>
          <span className="activity-icon">📝</span>
          <div>
            <p>Class</p>
            <small>25 August, 2024</small>
          </div>
        </li>
        <li>
          <span className="activity-icon">📋</span>
          <div>
            <p>Assignment</p>
            <small>25 August, 2024</small>
          </div>
        </li>
        <li>
          <span className="activity-icon">📋</span>
          <div>
            <p>Assignment</p>
            <small>25 August, 2024</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivities;
