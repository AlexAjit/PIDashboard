import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const TabNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useDashboard();

  const tabs = [
    'Planning Outcome',
    'Planning Feature',
    'Program Board',
    'Team Program Board',
    'Team Board',
    'Program Risks',
    'Not Planned',
  ];

  return (
    <div className="mb-4">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`
                border-t border-l border-r rounded-t-md py-2 px-4 text-sm font-medium
                ${
                  activeTab === tab
                    ? 'border-b-0 bg-blue-500 text-white'
                    : 'border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;