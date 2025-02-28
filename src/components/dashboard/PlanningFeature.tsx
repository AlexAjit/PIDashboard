import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const PlanningFeature: React.FC = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="text-center p-6">
        <h2 className="text-xl font-medium">Planning Feature</h2>
        <p className="mt-4">This tab would display detailed planning feature information.</p>
        <p className="mt-2">In a complete implementation, this would include feature lists, assignments, and detailed planning metrics.</p>
      </div>
    </div>
  );
};

export default PlanningFeature;