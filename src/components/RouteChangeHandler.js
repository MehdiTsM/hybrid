import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const RouteChangeTracker = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay 
    const timeout = setTimeout(() => setLoading(false), 400); // adjust if needed
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  );
};

export default RouteChangeTracker;
