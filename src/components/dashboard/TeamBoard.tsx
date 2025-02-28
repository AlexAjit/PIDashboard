import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const TeamBoard: React.FC = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="text-center p-6">
        <h2 className="text-xl font-medium">Team Board</h2>
        <p className="mt-4">This tab would show detailed team information and capacity planning.</p>
        <p className="mt-2">In a complete implementation, this would include team velocity, capacity, and allocated features.</p>
        <p className="mt-2">For now I kept this blank</p>
      </div>
    </div>
  );
};

export default TeamBoard;