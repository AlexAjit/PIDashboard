import React from 'react';
import { MetricCardProps } from '../../types';

const MetricCard: React.FC<MetricCardProps> = ({ value, label, color = 'bg-blue-800' }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className={`${color} text-white w-full py-3 px-4 text-center mt-2`}>
        <div className="text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

export default MetricCard;