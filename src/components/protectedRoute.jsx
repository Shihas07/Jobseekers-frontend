import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Refresh } from '../services/user';

export default function ProtectedRoute({ element }) {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);  // To control loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const accessTokenFromCookie = Cookies.get('accessToken');
      const refreshTokenFromCookie = Cookies.get('refreshToken');

      console.log(accessTokenFromCookie, refreshTokenFromCookie);

      if (!accessTokenFromCookie && !refreshTokenFromCookie) {
        // If no access or refresh token, redirect to login
        navigate('/login');
        return;  // Stop execution if no tokens are available
      }

      if (!accessTokenFromCookie && refreshTokenFromCookie) {
        
        try {
          const response = await Refresh(); // Await the refresh call
          // const newAccessToken = Cookies.get('accessToken');
            console.log("dfsdsf",response)
               
          if (response.status===200) {
            setAccessToken(response.data.accessToken); 
            navigate('/');  
          } else {
            navigate('/login');  
          }
        } catch (error) {
          console.error("Error refreshing token:", error);
          navigate('/login');  // On error, redirect to login
        }
      } else {
        // Access token is present, update state
        setAccessToken(accessTokenFromCookie);
      }
      
      setLoading(false);  // Done loading once checks complete
    };

    checkAuth();
  }, [navigate]);

  // Render a loading indicator or nothing while checking tokens
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // Only render the protected element if the accessToken exists
  return accessToken ? element : null;
}
