import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import { GoogleMapWrapperProps, Venue } from '../../types/venue';
import VenueMarker from './VenueMarker';
import VenuePopup from './VenuePopup';

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const GoogleMapWrapper: React.FC<GoogleMapWrapperProps> = ({ 
  center, 
  zoom, 
  venues, 
  onVenueClick 
}) => {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleVenueClick = (venue: Venue) => {
    setSelectedVenue(venue);
    onVenueClick(venue);
  };

  const handleClosePopup = () => {
    setSelectedVenue(null);
  };

  const handleRatingSubmit = async (rating: { stars: number; comment?: string }) => {
    if (!selectedVenue) return;
    
    // TODO: Implement API call to submit rating
    console.log('Submitting rating:', {
      venueId: selectedVenue.id,
      ...rating
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Close popup after successful submission
    setSelectedVenue(null);
  };

  // Get the API key from environment variables
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // If no API key is provided, show an error message
  if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'your_google_maps_api_key_here') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Maps API Key Required</h3>
          <p className="text-gray-600 mb-4">
            To use the map functionality, please add your Google Maps API key to the .env.local file.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg text-left">
            <p className="text-sm text-gray-700 mb-2">Steps to fix:</p>
            <ol className="text-sm text-gray-600 list-decimal list-inside space-y-1">
              <li>Get a Google Maps API key from Google Cloud Console</li>
              <li>Create a .env.local file in the project root</li>
              <li>Add: VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key</li>
              <li>Restart the development server</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={mapOptions}
        >
          {venues.map((venue) => (
            <OverlayView
              key={venue.id}
              position={venue.location}
              mapPaneName="overlayMouseTarget"
            >
              <VenueMarker
                venue={venue}
                onClick={handleVenueClick}
              />
            </OverlayView>
          ))}
        </GoogleMap>
      </LoadScript>

      {selectedVenue && (
        <VenuePopup
          venue={selectedVenue}
          onClose={handleClosePopup}
          onRatingSubmit={handleRatingSubmit}
        />
      )}
    </div>
  );
};

export default GoogleMapWrapper;