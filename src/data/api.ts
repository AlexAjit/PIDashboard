import { DashboardData, FilterOptions } from '../types';
import { dashboardData, getFilteredData } from './mockData';

export const fetchDashboardData = async (filters: FilterOptions): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getFilteredData(filters.targetRelease, filters.team));
    }, 300);
  });
};

export const fetchInitialData = async (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 300);
  });
};
