import React from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { User, Settings, Bookmark, MapPin, Star, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  
  return (
    <div className="container mx-auto px-4 py-6 pb-20 md:pb-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
          
          {/* Profile Info */}
          <div className="px-4 sm:px-6 pb-6 relative">
            <div className="flex flex-col sm:flex-row sm:items-end -mt-16 mb-6">
              <div className="relative inline-block">
                <img 
                  src={user?.avatar || 'https://i.pravatar.cc/150?u=default'} 
                  alt={user?.name || 'User'} 
                  className="h-24 w-24 rounded-full border-4 border-white shadow-md"
                />
                <button className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100">
                  <Settings className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4">
                <h1 className="text-xl font-bold text-gray-900">{user?.name || 'User'}</h1>
                <p className="text-gray-500 text-sm">@{user?.name?.toLowerCase().replace(' ', '') || 'username'}</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="text-gray-700">12 Reviews</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className="text-sm text-gray-500">Member since June 2023</span>
                </div>
              </div>
              
              <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 mb-6">
                Food enthusiast and coffee lover. Always on the lookout for new restaurants and cafés to try out.
                Let's connect and share our favorite spots!
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Activity</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Bookmark className="h-5 w-5 text-orange-500 mr-2" />
                      <h3 className="text-md font-medium text-gray-900">Saved Places</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      You have 8 saved locations
                    </p>
                    <Button variant="text" size="sm" className="mt-2">
                      View All
                    </Button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-orange-500 mr-2" />
                      <h3 className="text-md font-medium text-gray-900">Reviews</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      You've written 12 reviews
                    </p>
                    <Button variant="text" size="sm" className="mt-2">
                      View All
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Settings</h2>
                  
                  <div className="space-y-4">
                    <button className="flex items-center text-gray-700 hover:text-gray-900">
                      <User className="h-5 w-5 mr-3" />
                      Account Settings
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-gray-900">
                      <Settings className="h-5 w-5 mr-3" />
                      Preferences
                    </button>
                    <button 
                      onClick={logout}
                      className="flex items-center text-red-600 hover:text-red-700"
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;