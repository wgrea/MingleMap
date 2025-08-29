import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingInputProps {
  initialRating?: number;
  onRatingChange: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({ 
  initialRating = 0, 
  onRatingChange,
  size = 'md'
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const handleClick = (value: number) => {
    setRating(value);
    onRatingChange(value);
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((value) => {
        const isActive = value <= (hoverRating || rating);
        return (
          <button
            key={value}
            type="button"
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            className="transition-colors duration-150 hover:scale-110 transform"
          >
            <Star
              className={`${sizeClasses[size]} ${
                isActive 
                  ? 'text-yellow-500 fill-yellow-500' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;