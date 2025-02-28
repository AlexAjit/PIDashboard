// import React from 'react';

// interface StackedBarChartProps {
//   data: Record<string, number>;
//   title: string;
//   colorMap: Record<string, string>;
//   height?: number;
// }

// const StackedBarChart: React.FC<StackedBarChartProps> = ({ 
//   data, 
//   title, 
//   colorMap, 
//   height = 200 
// }) => {
//   const total = Object.values(data).reduce((acc, value) => acc + value, 0);
  
//   const sortedEntries = Object.entries(data)
//     .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

//   return (
//     <div className="w-full">
//       <h3 className="text-sm font-medium mb-2">{title}</h3>
//       <div className="relative" style={{ height: `${height}px` }}>
//         <div className="flex items-end h-full">
//           {sortedEntries.map(([key, value]) => {
//             const percentage = (value / total) * 100;
//             const barColor = colorMap[key] || 'bg-gray-400';
            
//             return (
//               <div 
//                 key={key}
//                 className="flex flex-col items-center group"
//                 style={{ width: `${100 / sortedEntries.length}%` }}
//               >
//                 <div className="relative w-full px-1">
//                   <div 
//                     className={`w-full ${barColor}`} 
//                     style={{ height: `${Math.max(percentage * 1.8, 5)}px` }}
//                   ></div>
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs p-1 rounded pointer-events-none transition-opacity">
//                     {value}
//                   </div>
//                 </div>
//                 <div className="text-xs mt-1 text-center truncate w-full">
//                   {key}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StackedBarChart;

// src/components/charts/StackedBarChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StackedBarChartProps {
  data: unknown[];
  keys: string[];
  colors: string[];
  nameKey: string;
  height?: number;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  keys,
  colors,
  nameKey,
  height = 400
}) => {
  return (
    <div className="w-full overflow-x-auto" id="team-distribution-chart">
      <ResponsiveContainer width="100%" height={height} minWidth={data.length * 60}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={nameKey} 
            angle={-45} 
            textAnchor="end" 
            interval={0} 
            height={70}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: 20 }} />
          {keys.map((key, index) => (
            <Bar 
              key={key} 
              dataKey={key} 
              stackId="a" 
              fill={colors[index % colors.length]} 
              name={key}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;