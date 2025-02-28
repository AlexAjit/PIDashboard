'use client';

import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { useDashboard } from '../../context/DashboardContext';

const Settings: React.FC = () => {
  const { availableReleases, availableTeams } = useDashboard();
  
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <Header />
      
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Settings</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Available Releases</h2>
          <div className="bg-gray-50 p-4 rounded">
            <ul className="space-y-2">
              {availableReleases.map((release) => (
                <li key={release} className="flex items-center justify-between">
                  <span>{release}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Available Teams</h2>
          <div className="bg-gray-50 p-4 rounded">
            <ul className="space-y-2">
              {availableTeams.map((team) => (
                <li key={team} className="flex items-center justify-between">
                  <span>{team}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex space-x-3">
          <Button onClick={() => window.location.href = '/'} variant="secondary">
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;