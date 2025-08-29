import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { LocationData } from '../../types/location';

interface LocationMarkerProps {
  location: LocationData;
  onClick: () => void;
}

export const LocationMarker: React.FC<LocationMarkerProps> = ({ location, onClick }) => {
  const getCrowdDensityColor = (density: string) => {
    switch (density) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div 
      className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative">
        <MapPin 
          className="h-8 w-8 text-orange-500 filter drop-shadow-md" 
          fill="#FFEDD5" /* Light orange fill */
        />
        <div 
          className={`absolute -top-1 -right-1 h-3 w-3 ${getCrowdDensityColor(location.crowdDensity)} rounded-full border border-white`}
          title={`Crowd density: ${location.crowdDensity}`}
        />
      </div>
      <span className="mt-1 text-xs font-medium text-gray-800 max-w-[80px] truncate text-center">
        {location.name}
      </span>
    </div>
  );
};