import React from 'react';
import { MapPin } from 'lucide-react';
import { VenueMarkerProps } from '../../types/venue';

const VenueMarker: React.FC<VenueMarkerProps> = ({ venue, onClick }) => {
  const getCrowdColor = (density: number) => {
    if (density < 0.3) return 'text-green-500';
    if (density < 0.7) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getVenueIcon = (type: string) => {
    // Using MapPin for all venues with different colors
    return MapPin;
  };

  const Icon = getVenueIcon(venue.venueType);

  return (
    <div 
      className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110 transform"
      onClick={() => onClick(venue)}
    >
      <div className="relative">
        <Icon 
          className={`h-8 w-8 ${getCrowdColor(venue.crowdDensity)} filter drop-shadow-md`}
          fill="currentColor"
        />
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full border border-white" />
      </div>
      <span className="mt-1 text-xs font-medium text-gray-800 max-w-[80px] truncate text-center bg-white px-2 py-1 rounded shadow-sm">
        {venue.name}
      </span>
    </div>
  );
};

export default VenueMarker;