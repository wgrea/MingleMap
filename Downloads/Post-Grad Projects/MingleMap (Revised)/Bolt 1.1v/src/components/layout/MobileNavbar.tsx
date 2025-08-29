import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, MessageSquare, User } from 'lucide-react';

const MobileNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
            location.pathname === '/' ? 'text-orange-500' : 'text-gray-500'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link
          to="/map"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
            location.pathname === '/map' ? 'text-orange-500' : 'text-gray-500'
          }`}
        >
          <Map className="h-6 w-6" />
          <span className="text-xs mt-1">Map</span>
        </Link>
        
        <Link
          to="/messages"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
            location.pathname === '/messages' ? 'text-orange-500' : 'text-gray-500'
          }`}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Messages</span>
        </Link>
        
        <Link
          to="/profile"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
            location.pathname === '/profile' ? 'text-orange-500' : 'text-gray-500'
          }`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;