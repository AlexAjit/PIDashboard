import { DashboardData, FilterOptions } from '../types';
import { dashboardData, getFilteredData } from './mockData';

export const fetchDashboardData = async (filters: FilterOptions): Promise<DashboardData> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getFilteredData(filters.targetRelease, filters.team));
    }, 300);
  });
};

export const fetchInitialData = async (): Promise<DashboardData> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 300);
  });
};