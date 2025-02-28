import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import Button from './Button';

const FilterBar: React.FC = () => {
  const { filters, setFilters, availableReleases, availableTeams } = useDashboard();
  
  const [localFilters, setLocalFilters] = React.useState(filters);
  
  const handleApply = () => {
    setFilters(localFilters);
  };
  
  const handleReset = () => {
    const resetFilters = {
      targetRelease: availableReleases[0],
      team: availableTeams[0],
    };
    setLocalFilters(resetFilters);
    setFilters(resetFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="text-sm font-medium mb-2">Filters:</div>
      <div className="flex flex-wrap gap-4 items-end">
        <div className="min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Release:
          </label>
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={localFilters.targetRelease}
              onChange={(e) => setLocalFilters({ ...localFilters, targetRelease: e.target.value })}
            >
              {availableReleases.map((release) => (
                <option key={release} value={release}>
                  {release}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Team:
          </label>
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={localFilters.team}
              onChange={(e) => setLocalFilters({ ...localFilters, team: e.target.value })}
            >
              {availableTeams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            onClick={handleApply} 
            variant="primary" 
            className="bg-gray-500 hover:bg-gray-600"
          >
            Apply
          </Button>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;