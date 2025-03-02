import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { exportDashboardToPPT } from '../../services/exportService';

interface ExportButtonProps {
  className?: string;
  onClick?: () => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ className = '', onClick }) => {
  const { data, isLoading } = useDashboard();

  const handleExport = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (!data) {
      alert('No dashboard data available to export');
      return;
    }
    
    try {
      console.log('Exporting data:', data);
      exportDashboardToPPT(data);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isLoading || !data}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
      disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Export to PowerPoint
    </button>
  );
};

export default ExportButton;