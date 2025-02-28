import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const ProgramRisks: React.FC = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="text-center p-6">
        <h2 className="text-xl font-medium">Program Risks</h2>
        <p className="mt-4">This tab would display identified program risks and mitigation strategies.</p>
        <p className="mt-2">In a complete implementation, this would include risk assessments, impact analysis, and ownership.</p>
        <p className="mt-2">For now I kept this blank</p>

      </div>
    </div>
  );
};

export default ProgramRisks;