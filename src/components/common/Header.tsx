import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h1 className="text-lg font-medium text-gray-700">Planning Dashboard - BSBI task</h1>
      </div>
    </header>
  );
};

export default Header;