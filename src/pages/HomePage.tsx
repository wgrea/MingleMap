import React from 'react';
import { Link } from 'react-router-dom';
import { useMap } from '../context/MapContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import LocationCard from '../components/locations/LocationCard';
import { Search, Zap, TrendingUp, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const { nearbyLocations, locations } = useMap();
  
  // For the purpose of this demo, use the first few locations for different categories
  const trendingLocations = locations.slice(0, 3);
  const popularLocations = [...locations].sort((a, b) => b.rating - a.rating).slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-6 pb-20 md:pb-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-6 md:p-8 mb-8 text-white shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Discover Your City</h1>
        <p className="mb-6 opacity-90">Find popular spots, check crowd levels, and connect with others.</p>
        
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search for cafés, restaurants, bars..."
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <Button
            className="absolute right-1 top-1 bottom-1"
          >
            Search
          </Button>
        </div>
      </div>
      
      {/* Nearby Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Nearby Locations</h2>
          <Link to="/map" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
            View Map
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>
      
      {/* Trending Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Trending Now</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>
      
      {/* Top Rated Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Award className="h-5 w-5 text-orange-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Top Rated</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>
      
      {/* Daily Specials Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Zap className="h-5 w-5 text-orange-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Today's Specials</h2>
        </div>
        
        <div className="bg-orange-50 rounded-xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations
              .filter(location => location.dailySpecials.length > 0)
              .slice(0, 3)
              .map((location) => (
                <Link key={location.id} to={`/location/${location.id}`} className="block">
                  <Card hover className="bg-white">
                    <div className="p-4">
                      <div className="flex items-start">
                        <img 
                          src={location.photos[0]} 
                          alt={location.name}
                          className="h-16 w-16 object-cover rounded-md"
                        />
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">{location.name}</h3>
                          <div className="flex items-center mt-1 mb-2">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#F59E0B" />
                            <span className="text-sm text-gray-600">{location.rating}</span>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 bg-orange-100 rounded-full text-orange-700">
                            Special Offer
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 border-t border-gray-100 pt-3">
                        <p className="text-sm text-gray-700">
                          {location.dailySpecials[0]}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import { Star } from 'lucide-react';

export default HomePage;