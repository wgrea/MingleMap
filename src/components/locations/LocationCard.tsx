import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock } from 'lucide-react';
import Card, { CardContent, CardMedia, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import { LocationData } from '../../types/location';

interface LocationCardProps {
  location: LocationData;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
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
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  // Get current day for opening hours
  const today = new Date().toLocaleString('en-us', { weekday: 'long' });
  const todayHours = location.openingHours[today] || 'Closed';

  return (
    <Card hover className="h-full">
      <Link to={`/location/${location.id}`}>
        <CardMedia 
          src={location.photos[0]} 
          alt={location.name} 
          className="h-48"
        />
        <CardContent>
          <div className="flex justify-between items-start mb-2">
            <CardTitle>{location.name}</CardTitle>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#F59E0B" />
              <span className="text-sm font-medium">{location.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({location.reviews})</span>
            </div>
          </div>
          
          <CardDescription className="mb-3">
            {location.description.length > 100 
              ? `${location.description.substring(0, 100)}...` 
              : location.description}
          </CardDescription>
          
          <div className="flex items-center mb-2">
            <Users className="h-4 w-4 text-gray-400 mr-2" />
            <span className={`text-xs ${getCrowdDensityColor(location.crowdDensity)}`}>
              {getCrowdDensityLabel(location.crowdDensity)}
            </span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-xs text-gray-600">{todayHours}</span>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="flex justify-between">
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-700">
          {location.category}
        </span>
        
        {location.dailySpecials.length > 0 && (
          <span className="text-xs font-medium px-2 py-1 bg-orange-100 rounded-full text-orange-700">
            Today's special
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default LocationCard;