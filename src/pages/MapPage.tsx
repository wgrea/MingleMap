import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapView from '../components/map/MapView';
import LocationCard from '../components/locations/LocationCard';
import { testVenues } from '../data/testVenues';
import { Menu, X, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [filter, setFilter] = useState('all');
  
  const handleMarkerClick = (venueId: string) => {
    // For now, we'll navigate to the location detail page
    // In the future, this could show venue details in a modal
    navigate(`/location/${venueId}`);
  };
  
  const filteredVenues = filter === 'all' 
    ? testVenues 
    : testVenues.filter(venue => venue.venueType === filter);
  
  return (
    <div className="flex h-[calc(100vh-64px)] relative">
      {/* Map */}
      <div className="flex-grow">
        <MapView onMarkerClick={handleMarkerClick} />
      </div>
      
      {/* Toggle Button */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)}
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
      >
        {showSidebar ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      
      {/* Sidebar */}
      {showSidebar && (
        <div className="w-full max-w-md bg-white shadow-lg overflow-hidden flex flex-col h-full z-10 transition-all">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">Discover Venues</h1>
            
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              <Button 
                variant={filter === 'all' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              <Button 
                variant={filter === 'restaurant' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('restaurant')}
              >
                Restaurants
              </Button>
              <Button 
                variant={filter === 'bar' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('bar')}
              >
                Bars
              </Button>
              <Button 
                variant={filter === 'cafe' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('cafe')}
              >
                Cafés
              </Button>
              <Button 
                variant="outline" 
                size="sm"
              >
                <Filter className="h-4 w-4 mr-1" />
                More
              </Button>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4">
            <div className="space-y-4">
              {filteredVenues.map((venue) => {
                // Convert venue to location format for existing LocationCard
                const location = {
                  id: venue.id,
                  name: venue.name,
                  description: `${venue.venueType.charAt(0).toUpperCase() + venue.venueType.slice(1)} with ${Math.round(venue.crowdDensity * 100)}% crowd density`,
                  address: venue.address,
                  category: venue.venueType,
                  rating: venue.averageRating,
                  reviews: venue.totalRatings,
                  crowdDensity: venue.crowdDensity < 0.3 ? 'low' : venue.crowdDensity < 0.7 ? 'medium' : 'high',
                  dailySpecials: [],
                  photos: venue.coverImage ? [venue.coverImage] : ['https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg'],
                  coordinates: venue.location,
                  openingHours: {
                    'Monday': '9:00 AM - 10:00 PM',
                    'Tuesday': '9:00 AM - 10:00 PM',
                    'Wednesday': '9:00 AM - 10:00 PM',
                    'Thursday': '9:00 AM - 11:00 PM',
                    'Friday': '9:00 AM - 12:00 AM',
                    'Saturday': '10:00 AM - 12:00 AM',
                    'Sunday': '10:00 AM - 9:00 PM'
                  }
                };
                
                return <LocationCard key={venue.id} location={location} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;