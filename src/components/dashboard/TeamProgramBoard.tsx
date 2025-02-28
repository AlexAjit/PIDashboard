import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const TeamProgramBoard: React.FC = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="text-center p-6">
        <h2 className="text-xl font-medium">Team Program Board</h2>
        <p className="mt-4">This tab would display the team-specific view of the program board.</p>
        <p className="mt-2">In a complete implementation, this would include a breakdown of features by team with iteration planning.</p>
      </div>
    </div>
  );
};

export default TeamProgramBoard;