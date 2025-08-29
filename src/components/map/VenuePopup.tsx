import React, { useState } from 'react';
import { X, MapPin, Star } from 'lucide-react';
import { VenuePopupProps } from '../../types/venue';
import CrowdMeter from './CrowdMeter';
import StarRatingInput from './StarRatingInput';
import Button from '../ui/Button';

const VenuePopup: React.FC<VenuePopupProps> = ({ venue, onClose, onRatingSubmit }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitRating = async () => {
    if (selectedRating === 0) return;
    
    setIsSubmitting(true);
    try {
      await onRatingSubmit({
        stars: selectedRating,
        comment: comment.trim() || undefined
      });
      
      // Reset form
      setSelectedRating(0);
      setComment('');
    } catch (error) {
      console.error('Failed to submit rating:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 max-w-sm mx-auto">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-orange-700 font-bold text-lg mb-1">{venue.name}</h3>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-gray-600 mr-1 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{venue.address}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {venue.coverImage && (
        <div className="mb-4">
          <img 
            src={venue.coverImage} 
            alt={venue.name}
            className="w-full h-32 object-cover rounded-md"
          />
        </div>
      )}

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#F59E0B" />
          <span className="text-sm font-medium text-gray-700">
            {venue.averageRating.toFixed(1)} ({venue.totalRatings} reviews)
          </span>
        </div>
      </div>

      <CrowdMeter density={venue.crowdDensity} venueName={venue.name} />

      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Rate this venue</h4>
        
        <div className="mb-3">
          <StarRatingInput 
            onRatingChange={setSelectedRating}
            initialRating={selectedRating}
          />
        </div>

        <div className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience (optional)"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
            rows={3}
            maxLength={500}
          />
          <div className="text-xs text-gray-500 mt-1">
            {comment.length}/500 characters
          </div>
        </div>

        <Button
          onClick={handleSubmitRating}
          disabled={selectedRating === 0 || isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Rating'}
        </Button>
      </div>
    </div>
  );
};

export default VenuePopup;