import React from 'react';
import { MapPin } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-8 w-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg shadow-sm">
      <MapPin className="h-5 w-5 text-white" />
    </div>
  );
};

export default Logo;