import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'text-orange-500'
}) => {
  const sizeClass = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 ${color} ${sizeClass[size]}`}></div>
    </div>
  );
};

export default LoadingSpinner;