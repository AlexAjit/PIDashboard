// // import React from 'react';
// // import Button from './Button';

// // interface ExportButtonProps {
// //   onClick: () => void;
// // }

// // const ExportButton: React.FC<ExportButtonProps> = ({ onClick }) => {
// //   return (
// //     <Button 
// //       onClick={onClick} 
// //       variant="secondary" 
// //       className="flex items-center space-x-1"
// //     >
// //       <svg 
// //         xmlns="http://www.w3.org/2000/svg" 
// //         className="h-4 w-4" 
// //         fill="none" 
// //         viewBox="0 0 24 24" 
// //         stroke="currentColor"
// //       >
// //         <path 
// //           strokeLinecap="round" 
// //           strokeLinejoin="round" 
// //           strokeWidth={2} 
// //           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
// //         />
// //       </svg>
// //       <span>Export</span>
// //     </Button>
// //   );
// // };

// // export default ExportButton;

// // import React, { useState, useRef, useEffect } from 'react';
// // import { useExport } from '../../hooks/useExport';
// // import { useDashboard } from '../../context/DashboardContext';

// // const ExportButton: React.FC = () => {
// //   const { data } = useDashboard();
// //   const { exportToCsv, exportToPowerPoint } = useExport();
// //   const [showOptions, setShowOptions] = useState(false);
// //   const dropdownRef = useRef<HTMLDivElement>(null);

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
// //         setShowOptions(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   if (!data) return null;

// //   return (
// //     <div className="relative" ref={dropdownRef}>
// //       <button 
// //         className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center"
// //         onClick={() => setShowOptions(!showOptions)}
// //       >
// //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
// //           <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
// //         </svg>
// //         Export
// //       </button>
      
// //       {showOptions && (
// //         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
// //           <div className="py-1">
// //             <button 
// //               className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //               onClick={() => {
// //                 exportToCsv(data);
// //                 setShowOptions(false);
// //               }}
// //             >
// //               Export to CSV
// //             </button>
// //             <button 
// //               className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //               onClick={() => {
// //                 exportToPowerPoint(data);
// //                 setShowOptions(false);
// //               }}
// //             >
// //               Export to PowerPoint
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ExportButton;

// // components/common/ExportButton.tsx
// import React from 'react';
// import { DashboardData } from '../../types';
// import { exportDashboardToPPT, exportDashboardToCSV } from '../../services/exportService';

// interface ExportButtonProps {
//   data: DashboardData;
// }

// const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
//   return (
//     <div className="flex space-x-2">
//       <button
//         onClick={() => exportDashboardToPPT(data)}
//         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//       >
//         Export to PowerPoint
//       </button>
//       <button
//         onClick={() => exportDashboardToCSV(data)}
//         className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//       >
//         Export to CSV
//       </button>
//     </div>
//   );
// };

// export default ExportButton;

import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { exportDashboardToPPT } from '../../services/exportService';

interface ExportButtonProps {
  className?: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ className = '' }) => {
  const { data, isLoading } = useDashboard();

  const handleExport = () => {
    if (!data) {
      alert('No dashboard data available to export');
      return;
    }
    
    try {
      console.log('Exporting data:', data);
      exportDashboardToPPT(data);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isLoading || !data}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
      disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Export to PowerPoint
    </button>
  );
};

export default ExportButton;