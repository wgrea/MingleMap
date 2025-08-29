import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useMap } from '../context/MapContext';
import LocationDetail from '../components/locations/LocationDetail';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const LocationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { locations, loading } = useMap();
  
  const location = locations.find(loc => loc.id === id);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!location) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-6">The location you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/map')}
            className="text-orange-500 font-medium hover:text-orange-600"
          >
            Return to Map
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-6 pb-20 md:pb-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back
      </button>
      
      <LocationDetail location={location} />
    </div>
  );
};

export default LocationDetailPage;