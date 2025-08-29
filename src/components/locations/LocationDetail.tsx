import React from 'react';
import { Star, MapPin, Clock, Users, Phone, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { LocationData, Review } from '../../types/location';
import { mockReviews } from '../../data/mockData';

interface LocationDetailProps {
  location: LocationData;
}

const LocationDetail: React.FC<LocationDetailProps> = ({ location }) => {
  const reviews = mockReviews;

  const getCrowdDensityLabel = (density: string) => {
    switch (density) {
      case 'low':
        return 'Not Crowded';
      case 'medium':
        return 'Moderately Busy';
      case 'high':
        return 'Very Crowded';
      default:
        return 'Unknown';
    }
  };

  const getCrowdDensityColor = (density: string) => {
    switch (density) {
      case 'low':
        return 'text-green-500 bg-green-50';
      case 'medium':
        return 'text-yellow-500 bg-yellow-50';
      case 'high':
        return 'text-red-500 bg-red-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  // Get current day for opening hours
  const today = new Date().toLocaleString('en-us', { weekday: 'long' });
  const todayHours = location.openingHours[today] || 'Closed';

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-64 md:h-80">
        <img 
          src={location.photos[0]} 
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-2xl font-bold">{location.name}</h1>
          <div className="flex items-center mt-1">
            <Star className="h-5 w-5 text-yellow-500 mr-1" fill="#F59E0B" />
            <span className="font-medium mr-1">{location.rating}</span>
            <span className="text-sm opacity-90">({location.reviews} reviews)</span>
            <span className="mx-2">•</span>
            <span className="text-sm">{location.category}</span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${getCrowdDensityColor(location.crowdDensity)}`}>
            <Users className="h-4 w-4 inline mr-1" />
            {getCrowdDensityLabel(location.crowdDensity)}
          </span>
          <span className="text-sm font-medium px-3 py-1 bg-orange-50 text-orange-600 rounded-full">
            <Clock className="h-4 w-4 inline mr-1" />
            {todayHours}
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-gray-700">{location.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Location & Contact</h2>
          <div className="flex items-start mb-3">
            <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
            <span className="text-gray-700">{location.address}</span>
          </div>
          <div className="flex items-center mb-3">
            <Phone className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-gray-700">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-gray-500 mr-3" />
            <a href="#" className="text-orange-600 hover:underline">Visit Website</a>
          </div>
        </div>

        {location.dailySpecials.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Today's Specials</h2>
            <ul className="bg-orange-50 rounded-lg p-4">
              {location.dailySpecials.map((special, index) => (
                <li key={index} className="text-gray-800 mb-2 last:mb-0 flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  {special}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Opening Hours</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            {Object.entries(location.openingHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between py-1 border-b border-gray-100 last:border-0">
                <span className={`${day === today ? 'font-medium text-orange-600' : 'text-gray-700'}`}>
                  {day}
                </span>
                <span className={`${day === today ? 'font-medium text-orange-600' : 'text-gray-700'}`}>
                  {hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Reviews</h2>
            <Button variant="outline" size="sm">Write a review</Button>
          </div>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center mb-2">
                  <img 
                    src={review.userAvatar} 
                    alt={review.userName}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{review.userName}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill={i < review.rating ? '#F59E0B' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button fullWidth>Check In</Button>
          <Button variant="outline" fullWidth>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;