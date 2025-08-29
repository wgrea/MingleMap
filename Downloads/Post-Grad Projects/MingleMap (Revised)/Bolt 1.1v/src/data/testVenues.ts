import { Venue } from '../types/venue';

export const testVenues: Venue[] = [
  {
    id: '1',
    name: 'The Rooftop Lounge',
    address: '123 Downtown Ave, San Francisco, CA',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    crowdDensity: 0.75, // High crowd
    venueType: 'bar',
    coverImage: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    averageRating: 4.5,
    totalRatings: 128
  },
  {
    id: '2',
    name: 'Bella Vista Restaurant',
    address: '456 Market Street, San Francisco, CA',
    location: {
      lat: 37.7849,
      lng: -122.4094
    },
    crowdDensity: 0.45, // Moderate crowd
    venueType: 'restaurant',
    coverImage: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    averageRating: 4.2,
    totalRatings: 89
  },
  {
    id: '3',
    name: 'Ocean Breeze Café',
    address: '789 Beach Road, San Francisco, CA',
    location: {
      lat: 37.7694,
      lng: -122.4862
    },
    crowdDensity: 0.25, // Low crowd
    venueType: 'cafe',
    coverImage: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
    averageRating: 4.8,
    totalRatings: 156
  }
];