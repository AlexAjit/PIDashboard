import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import MetricCard from '../common/MetricCard';
import BarChart from '../charts/BarChart';
import StackedBarChart from '../charts/StackedBarChart';

const PlanningOutcome: React.FC = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  const clusterThemeData = {
    labels: data.clusterThemeData.map(item => item.name),
    datasets: [
      {
        label: 'Count',
        data: data.clusterThemeData.map(item => item.count),
        backgroundColor: '#228B22', // Green color
      }
    ]
  };

  // Color map for teams
  const teamColorMap: Record<string, string> = {
    "Cloud Fulfillment": "bg-blue-900",
    "Lambda": "bg-blue-700",
    "EMS": "bg-purple-800",
    "PIOPS": "bg-purple-500",
    "Not Planned": "bg-red-600",
    "Alpha": "bg-green-500",
    "UX": "bg-yellow-500",
    "Gamma": "bg-green-700",
    "Delta": "bg-gray-600",
    "Omega": "bg-blue-500",
    "Sigma": "bg-yellow-600",
    "CLA 2": "bg-gray-400"
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="grid grid-cols-6 gap-4 mb-6">
        <MetricCard 
          value={data.totalFeatures} 
          label="Total Features" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.plannedFeature} 
          label="Planned Feature" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.plannedEnabler} 
          label="Planned Enabler" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.spilloverFeature} 
          label="Spillover Feature" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.spilloverEnabler} 
          label="Spillover Enabler" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.dateFeature} 
          label="Date Feature" 
          color="bg-blue-800" 
        />
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <MetricCard 
          value={data.dateEnabler} 
          label="Date Enabler" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.businessValueCommit} 
          label="B. Value Commit" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.businessValueUncommit} 
          label="B. Value Uncommit" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.committed} 
          label="Committed" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.uncommitted} 
          label="Uncommitted" 
          color="bg-blue-800" 
        />
        <MetricCard 
          value={data.notPlanned} 
          label="Not Planned" 
          color="bg-blue-800" 
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <h3 className="text-sm font-medium mb-2">Investment Cluster & Strategic Theme</h3>
          <BarChart 
            data={clusterThemeData} 
            title="" 
            height={180} 
          />
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Disclaimer! 1 feature can be assigned to more than 1 team</h3>
          <StackedBarChart 
            data={data.teamData} 
            title="" 
            colorMap={teamColorMap} 
            height={180} 
          />
        </div>
      </div>
    </div>
  );
};

export default PlanningOutcome;