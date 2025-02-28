import React from 'react';
import { ChartData } from '../../types';

interface BarChartProps {
  data: ChartData;
  title: string;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, height = 200 }) => {
  const maxValue = Math.max(...data.datasets.flatMap(dataset => dataset.data));
  const barWidth = 100 / data.labels.length;

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="relative" style={{ height: `${height}px` }}>
        <div className="absolute inset-0">
          {data.labels.map((label, index) => (
            <div
              key={label}
              className="absolute bottom-0"
              style={{
                left: `${index * barWidth}%`,
                width: `${barWidth}%`,
                height: '100%',
              }}
            >
              {data.datasets.map((dataset, datasetIndex) => {
                const value = dataset.data[index];
                const barHeight = value > 0 ? (value / maxValue) * 100 : 0;
                
                return (
                  <div
                    key={`${label}-${datasetIndex}`}
                    className="absolute bottom-0 w-8 mx-auto left-0 right-0"
                    style={{
                      height: `${barHeight}%`,
                      backgroundColor: dataset.backgroundColor,
                    }}
                  ></div>
                );
              })}
              <div className="absolute -bottom-6 text-xs text-center w-full transform -rotate-45 origin-top-left truncate">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default BarChart;