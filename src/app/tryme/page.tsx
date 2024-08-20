import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import RecentActivities from '../components/RecentActivities';
import Calendar from '../components/Calendar';
import Chart from '../components/Chart';
import '../styles/styles.css';

const HomePage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="dashboard">
          <div className="stats">
            <Dashboard />
            <RecentActivities />
          </div>
          <div className="charts">
           
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
