import React from 'react';
import GoogleMapWrapper from './GoogleMapWrapper';
import { testVenues } from '../../data/testVenues';
import { Venue } from '../../types/venue';

interface MapViewProps {
  onMarkerClick?: (locationId: string) => void;
}

const MapView: React.FC<MapViewProps> = ({ onMarkerClick }) => {
  const defaultCenter = {
    lat: 37.7749, // San Francisco
    lng: -122.4194
  };

  const handleVenueClick = (venue: Venue) => {
    if (onMarkerClick) {
      onMarkerClick(venue.id);
    }
  };

  return (
    <div className="relative w-full h-full">
      <GoogleMapWrapper
        center={defaultCenter}
        zoom={13}
        venues={testVenues}
        onVenueClick={handleVenueClick}
      />
    </div>
  );
};

export default MapView;