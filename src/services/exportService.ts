// // import { DashboardData } from '../types';
// // import { exportToPPT } from '../utils/exportToPPT';

// // export const exportDashboardToPPT = (data: DashboardData): void => {
// //   exportToPPT(data);
// // };

// // export const exportDashboardToCSV = (data: DashboardData): void => {
// //   const headers = [
// //     "Metric,Value",
// //   ].join("\n");

// //   const rows = [
// //     `Total Features,${data.totalFeatures}`,
// //     `Planned Feature,${data.plannedFeature}`,
// //     `Planned Enabler,${data.plannedEnabler}`,
// //     `Spillover Feature,${data.spilloverFeature}`,
// //     `Spillover Enabler,${data.spilloverEnabler}`,
// //     `Date Feature,${data.dateFeature}`,
// //     `Date Enabler,${data.dateEnabler}`,
// //     `Business Value Commit,${data.businessValueCommit}`,
// //     `Business Value Uncommit,${data.businessValueUncommit}`,
// //     `Committed,${data.committed}`,
// //     `Uncommitted,${data.uncommitted}`,
// //     `Not Planned,${data.notPlanned}`,
// //   ].join("\n");

// //   const csvContent = `${headers}\n${rows}`;
  
// //   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
// //   const url = URL.createObjectURL(blob);
// //   const link = document.createElement('a');
// //   link.setAttribute('href', url);
// //   link.setAttribute('download', 'pi-planning-data.csv');
// //   link.style.visibility = 'hidden';
// //   document.body.appendChild(link);
// //   link.click();
// //   document.body.removeChild(link);
// // };

// // services/exportService.ts
// import { DashboardData } from '../types';
// import { exportToPPT } from '../utils/exportToPPT';

// export const exportDashboardToPPT = (data: DashboardData): void => {
//   exportToPPT(data);
// };

// export const exportDashboardToCSV = (data: DashboardData): void => {
//   const headers = "Metric,Value";

//   const rows = [
//     `Total Features,${data.totalFeatures}`,
//     `Planned Feature,${data.plannedFeature}`,
//     `Planned Enabler,${data.plannedEnabler}`,
//     `Spillover Feature,${data.spilloverFeature}`,
//     `Spillover Enabler,${data.spilloverEnabler}`,
//     `Date Feature,${data.dateFeature}`,
//     `Date Enabler,${data.dateEnabler}`,
//     `Business Value Commit,${data.businessValueCommit}`,
//     `Business Value Uncommit,${data.businessValueUncommit}`,
//     `Committed,${data.committed}`,
//     `Uncommitted,${data.uncommitted}`,
//     `Not Planned,${data.notPlanned}`
//   ].join("\n");

//   const csvContent = `${headers}\n${rows}`;
  
//   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.setAttribute('href', url);
//   link.setAttribute('download', 'pi-planning-data.csv');
//   link.style.visibility = 'hidden';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

import { DashboardData } from '../types';
import { exportToPPT } from '../utils/exportToPPT';

export const exportDashboardToPPT = (data: DashboardData): void => {
  if (!data) {
    console.error('Cannot export: data is undefined');
    return;
  }
  
  // Create a deep copy of the data to avoid any reference issues
  const dataCopy = JSON.parse(JSON.stringify(data));
  exportToPPT(dataCopy);
};

export const exportDashboardToCSV = (data: DashboardData): void => {
  if (!data) {
    console.error('Cannot export: data is undefined');
    return;
  }

  const headers = ["Metric,Value"].join("\n");

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