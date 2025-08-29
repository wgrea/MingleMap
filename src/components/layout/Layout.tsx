import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../ui/LoadingSpinner';

const Layout: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  // Redirect to login if not authenticated and not on login/register page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  if (!isAuthenticated && !isAuthPage) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Layout;