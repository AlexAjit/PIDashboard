'use client';

import React, { } from 'react';
import { useDashboard } from '../context/DashboardContext';
import Header from '../components/common/Header';
import FilterBar from '../components/common/FilterBar';
import TabNavigation from '../components/common/TabNavigation';
import ExportButton from '../components/common/ExportButton';
import PlanningOutcome from '../components/dashboard/PlanningOutcome';
import PlanningFeature from '../components/dashboard/PlanningFeature';
import ProgramBoard from '../components/dashboard/ProgramBoard';
import TeamProgramBoard from '../components/dashboard/TeamProgramBoard';
import TeamBoard from '../components/dashboard/TeamBoard';
import ProgramRisks from '../components/dashboard/ProgramRisks';
import NotPlanned from '../components/dashboard/NotPlanned';
import { exportDashboardToCSV } from '../services/exportService';

const Dashboard: React.FC = () => {
  const { activeTab, data } = useDashboard();

  const handleExport = () => {
    if (data) {
      exportDashboardToCSV(data);
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Planning Outcome':
        return <PlanningOutcome />;
      case 'Planning Feature':
        return <PlanningFeature />;
      case 'Program Board':
        return <ProgramBoard />;
      case 'Team Program Board':
        return <TeamProgramBoard />;
      case 'Team Board':
        return <TeamBoard />;
      case 'Program Risks':
        return <ProgramRisks />;
      case 'Not Planned':
        return <NotPlanned />;
      default:
        return <PlanningOutcome />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <Header />
      
      <div className="mb-4 flex justify-end">
        <ExportButton onClick={handleExport} />
      </div>
      
      <FilterBar />
      <TabNavigation />
      
      <div className="bg-white rounded-lg shadow">
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default Dashboard;