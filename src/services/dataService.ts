import { DashboardData } from '../types';
import { exportToPPT } from '../utils/exportToPPT';

export const exportDashboardToPPT = (data: DashboardData): void => {
  exportToPPT(data);
};

export const exportDashboardToCSV = (data: DashboardData): void => {
  // Convert dashboard data to CSV format
  const headers = [
    "Metric,Value",
  ].join("\n");

  const rows = [
    `Total Features,${data.totalFeatures}`,
    `Planned Feature,${data.plannedFeature}`,
    `Planned Enabler,${data.plannedEnabler}`,
    `Spillover Feature,${data.spilloverFeature}`,
    `Spillover Enabler,${data.spilloverEnabler}`,
    `Date Feature,${data.dateFeature}`,
    `Date Enabler,${data.dateEnabler}`,
    `Business Value Commit,${data.businessValueCommit}`,
    `Business Value Uncommit,${data.businessValueUncommit}`,
    `Committed,${data.committed}`,
    `Uncommitted,${data.uncommitted}`,
    `Not Planned,${data.notPlanned}`,
  ].join("\n");

  const csvContent = `${headers}\n${rows}`;
  
  // Create a blob and download the file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'pi-planning-data.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};