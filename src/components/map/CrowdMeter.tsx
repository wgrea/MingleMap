import React from 'react';
import { Users } from 'lucide-react';
import { CrowdMeterProps } from '../../types/venue';

const CrowdMeter: React.FC<CrowdMeterProps> = ({ density, venueName }) => {
  const percentage = Math.round(density * 100);
  
  const getCrowdLevel = (density: number) => {
    if (density < 0.3) return { label: 'Quiet', color: 'bg-green-500' };
    if (density < 0.7) return { label: 'Moderate', color: 'bg-yellow-500' };
    return { label: 'Busy', color: 'bg-red-500' };
  };

  const crowdLevel = getCrowdLevel(density);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Users className="h-4 w-4 text-gray-600 mr-2" />
          <span className="text-sm font-medium text-gray-700">Crowd Level</span>
        </div>
        <span className="text-sm font-semibold text-gray-800">
          {crowdLevel.label} ({percentage}%)
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full transition-all duration-300 ${crowdLevel.color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <p className="text-xs text-gray-500 mt-1">
        Current activity at {venueName}
      </p>
    </div>
  );
};

export default CrowdMeter;