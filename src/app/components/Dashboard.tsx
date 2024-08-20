import React from 'react';
import dynamic from 'next/dynamic';
import '../styles/styles.css'; 

const Chart = dynamic(() => import('./Chart'), { ssr: false });

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="start">
        <div className="start">
        <div className='start-box'><h3>50 Students</h3></div>
        <div className='start-box'><h3>5 Classes</h3></div>
        <div className='start'><h3 className='start-box'>2 Assignments</h3></div>
        </div>
      </div>

      <div className="stats">
        <h2>All Time Stats</h2>
        <Chart />
      </div>

      <div className="activities">
        <h2>Upcoming Activities</h2>
        <ul>
          <li>Assignment - 26 Aug 2024</li>
          <li>Class - 25 Aug 2024</li>
          <li>Assignment - 25 Aug 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
