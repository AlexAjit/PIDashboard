// import { DashboardData } from '../types';

// export const dashboardData: DashboardData = {
//   totalFeatures: 171,
//   plannedFeature: 60,
//   plannedEnabler: 66,
//   spilloverFeature: 21,
//   spilloverEnabler: 12,
//   dateFeature: 6,
//   dateEnabler: 1,
//   businessValueCommit: 104,
//   businessValueUncommit: 63,
//   committed: 104,
//   uncommitted: 66,
//   notPlanned: 25,
//   clusterThemeData: [
//     { name: "Continuous Optimization-Opportunity to Cash", count: 3, theme: "Continuous Optimization" },
//     { name: "Transformation-T-Opportunity to Cash Simplifications", count: 7, theme: "Transformation-T" },
//     { name: "Legal, Compliance & Security-Digital Rights", count: 2, theme: "Legal, Compliance & Security" },
//     { name: "Continuous Optimization-Funnel Q4 Services", count: 10, theme: "Continuous Optimization" },
//     { name: "Transformation-T-Digital First Experience", count: 2, theme: "Transformation-T" },
//     { name: "Continuous Optimization-Funnel Q3 Sales", count: 23, theme: "Continuous Optimization" },
//     { name: "Legal, Compliance & Security-Compliance", count: 1, theme: "Legal, Compliance & Security" },
//     { name: "Continuous Optimization-Configuration Management", count: 4, theme: "Continuous Optimization" },
//     { name: "Continuous Optimization-Quote to Cash", count: 3, theme: "Continuous Optimization" },
//     { name: "Legal, Compliance & Security-Interoperability", count: 1, theme: "Legal, Compliance & Security" },
//     { name: "Transformation-T-(defunct)", count: 1, theme: "Transformation-T" }
//   ],
//   teamData: {
//     "Cloud Fulfillment": 27,
//     "Lambda": 28,
//     "EMS": 22,
//     "PIOPS": 26,
//     "Not Planned": 25,
//     "Alpha": 17,
//     "UX": 8,
//     "Gamma": 14,
//     "Delta": 25,
//     "Omega": 9,
//     "Sigma": 20,
//     "CLA 2": 21
//   }
// };

// export const teams = [
//   "All",
//   "Cloud Fulfillment",
//   "Lambda",
//   "EMS",
//   "PIOPS",
//   "Alpha", 
//   "UX",
//   "Gamma",
//   "Delta",
//   "Omega",
//   "Sigma"
// ];

// export const releases = [
//   "PI Q2 2025",
//   "PI Q1 2025",
//   "PI Q4 2024",
//   "PI Q3 2024"
// ];

// export const getFilteredData = (targetRelease: string, team: string): DashboardData => {
//   // In a real application, this would filter the data based on the release and team
//   // For this mock, we'll just return the same data
//   return dashboardData;
// };

import { DashboardData } from '../types';

export const dashboardData: DashboardData = {
  totalFeatures: 171,
  plannedFeature: 60,
  plannedEnabler: 66,
  spilloverFeature: 21,
  spilloverEnabler: 12,
  dateFeature: 6,
  dateEnabler: 1,
  businessValueCommit: 104,
  businessValueUncommit: 63,
  committed: 104,
  uncommitted: 66,
  notPlanned: 25,
  clusterThemeData: [
    { name: "Continuous Optimization-Opportunity to Cash", count: 3, theme: "Continuous Optimization" },
    { name: "Transformation-T-Opportunity to Cash Simplifications", count: 7, theme: "Transformation-T" },
    { name: "Legal, Compliance & Security-Digital Rights", count: 2, theme: "Legal, Compliance & Security" },
    { name: "Continuous Optimization-Funnel Q4 Services", count: 10, theme: "Continuous Optimization" },
    { name: "Transformation-T-Digital First Experience", count: 2, theme: "Transformation-T" },
    { name: "Continuous Optimization-Funnel Q3 Sales", count: 23, theme: "Continuous Optimization" },
    { name: "Legal, Compliance & Security-Compliance", count: 1, theme: "Legal, Compliance & Security" },
    { name: "Continuous Optimization-Configuration Management", count: 4, theme: "Continuous Optimization" },
    { name: "Continuous Optimization-Quote to Cash", count: 3, theme: "Continuous Optimization" },
    { name: "Legal, Compliance & Security-Interoperability", count: 1, theme: "Legal, Compliance & Security" },
    { name: "Transformation-T-(defunct)", count: 1, theme: "Transformation-T" }
  ],
  teamData: {
    "Cloud Fulfillment": 27,
    "Lambda": 28,
    "EMS": 22,
    "PIOPS": 26,
    "Not Planned": 25,
    "Alpha": 17,
    "UX": 8,
    "Gamma": 14,
    "Delta": 25,
    "Omega": 9,
    "Sigma": 20,
    "CLA 2": 21
  }
};

export const teams = [
  "All",
  "Cloud Fulfillment",
  "Lambda",
  "EMS",
  "PIOPS",
  "Alpha", 
  "UX",
  "Gamma",
  "Delta",
  "Omega",
  "Sigma"
];

export const releases = [
  "PI Q2 2025",
  "PI Q1 2025",
  "PI Q4 2024",
  "PI Q3 2024"
];

/**
 * Filters the dashboard data based on the selected release and team.
 * @param targetRelease - The target PI release.
 * @param team - The selected team.
 * @returns Filtered DashboardData.
 */
export const getFilteredData = (targetRelease: string, team: string): DashboardData => {
  // Clone the data to avoid mutation
  const filteredData: DashboardData = JSON.parse(JSON.stringify(dashboardData));

  // Filter logic (mocked for now, implement actual logic if needed)
  if (team !== "All") {
    const filteredTeamData: Record<string, number> = {};
    if (filteredData.teamData[team]) {
      filteredTeamData[team] = filteredData.teamData[team];
    }
    filteredData.teamData = filteredTeamData;
  }

  // Return the filtered data
  return filteredData;
};
