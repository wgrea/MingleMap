export interface Venue {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  crowdDensity: number; // 0-1 scale
  venueType: 'restaurant' | 'bar' | 'cafe' | 'club';
  coverImage?: string;
  averageRating: number;
  totalRatings: number;
}

export interface Rating {
  id: string;
  venueId: string;
  userId: string;
  stars: number; // 1-5
  comment?: string;
  createdAt: string;
}

export interface VenuePopupProps {
  venue: Venue;
  onClose: () => void;
  onRatingSubmit: (rating: { stars: number; comment?: string }) => void;
}

export interface CrowdMeterProps {
  density: number; // 0-1 scale
  venueName: string;
}

export interface VenueMarkerProps {
  venue: Venue;
  onClick: (venue: Venue) => void;
}

export interface GoogleMapWrapperProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  venues: Venue[];
  onVenueClick: (venue: Venue) => void;
}