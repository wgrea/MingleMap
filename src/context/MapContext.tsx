import React, { createContext, useContext, useState, useEffect } from 'react';
import { LocationData } from '../types/location';
import { mockLocations } from '../data/mockData';

interface MapContextType {
  locations: LocationData[];
  userLocation: { lat: number; lng: number } | null;
  selectedLocation: LocationData | null;
  setSelectedLocation: (location: LocationData | null) => void;
  nearbyLocations: LocationData[];
  loading: boolean;
  locationError: string | null;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMap = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};

export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [nearbyLocations, setNearbyLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    // Load locations from mock data
    setLocations(mockLocations);
    setLoading(false);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationError(null);
        },
        (error) => {
          let errorMessage = 'Unable to get your location';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user. Using default location.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information unavailable. Using default location.';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out. Using default location.';
              break;
            default:
              errorMessage = 'An unknown error occurred while getting location. Using default location.';
              break;
          }
          
          console.warn('Geolocation error:', errorMessage);
          setLocationError(errorMessage);
          
          // Default to San Francisco
          setUserLocation({ lat: 37.7749, lng: -122.4194 });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    } else {
      const errorMessage = 'Geolocation not supported by this browser. Using default location.';
      console.warn(errorMessage);
      setLocationError(errorMessage);
      setUserLocation({ lat: 37.7749, lng: -122.4194 }); // San Francisco
    }
  }, []);

  useEffect(() => {
    // Calculate nearby locations based on user location
    if (userLocation) {
      // In a real app, this would filter based on distance calculation
      // For now, just take the first 5 locations as "nearby"
      setNearbyLocations(locations.slice(0, 5));
    }
  }, [userLocation, locations]);

  return (
    <MapContext.Provider
      value={{
        locations,
        userLocation,
        selectedLocation,
        setSelectedLocation,
        nearbyLocations,
        loading,
        locationError,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};