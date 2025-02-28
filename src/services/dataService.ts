import { DashboardData } from '../types';
import { exportToPPT } from '../utils/exportToPPT';
import { FilterOptions } from '../types';
import { dashboardData } from '../data/mockData';

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

export const fetchDashboardData = async (filters: FilterOptions): Promise<DashboardData> => {
  // In a real application, this would make an API call with the filters
  // For now, we'll just simulate a delay and return the mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 500);
  });
};

export const getDashboardDataByRelease = async (release: string): Promise<DashboardData> => {
  // In a real application, this would fetch data for a specific release
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 500);
  });
};

export const getDashboardDataByTeam = async (team: string): Promise<DashboardData> => {
  // In a real application, this would fetch data for a specific team
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 500);
  });
};