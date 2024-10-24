// LogoutHandler.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutHandler = ({ removeToken, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      removeToken(); // Clear token
      setUser(null); // Clear user data
      navigate('/index'); // Redirect to login page after logout
    };

    handleLogout(); // Call the function when component mounts

    // Optional: Clean up if necessary
    return () => {};
  }, [navigate, removeToken, setUser]);

  return null; // This component does not render anything
};

export default LogoutHandler;
