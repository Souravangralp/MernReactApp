import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function useToken() {
  // const navigate = useNavigate(); // Initialize navigate

    const getToken = () => {
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.token
    };
    
    const [token, setToken] = useState(getToken());
  
    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const removeToken = () => {
      sessionStorage.removeItem('token');  // Clear from storage
      setToken(null);  // Reset the token in state
      // navigate('/index')
    };

    return {
    setToken: saveToken,
    token,
    removeToken
    }
}