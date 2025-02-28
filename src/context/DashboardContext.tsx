'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DashboardData, FilterOptions } from '../types';
import { fetchDashboardData, fetchInitialData } from '../data/api';
import { releases, teams } from '../data/mockData';

interface DashboardContextType {
  data: DashboardData | null;
  isLoading: boolean;
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  availableReleases: string[];
  availableTeams: string[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterOptions>({
    targetRelease: releases[0],
    team: teams[0],
  });
  const [activeTab, setActiveTab] = useState('Planning Outcome');

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        const initialData = await fetchInitialData();
        setData(initialData);
      } catch (error) {
        console.error("Failed to fetch initial data", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    const loadFilteredData = async () => {
      setIsLoading(true);
      try {
        const filteredData = await fetchDashboardData(filters);
        setData(filteredData);
      } catch (error) {
        console.error("Failed to fetch filtered data", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFilteredData();
  }, [filters]);

  return (
    <DashboardContext.Provider
      value={{
        data,
        isLoading,
        filters,
        setFilters,
        activeTab,
        setActiveTab,
        availableReleases: releases,
        availableTeams: teams,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};