import { useState, useCallback } from 'react';
import { FilterOptions } from '../types';
import { releases, teams } from '../data/mockData';

export const useFilters = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    targetRelease: releases[0],
    team: teams[0],
  });

  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      targetRelease: releases[0],
      team: teams[0],
    });
  }, []);

  return {
    filters,
    updateFilters,
    resetFilters,
    availableReleases: releases,
    availableTeams: teams,
  };
};