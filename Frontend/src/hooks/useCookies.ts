import { useState } from 'react';

export const useCookies = () => {
  const [cookie, setCookie] = useState(null);

  const setCookieOnServer = async (cookieKey: string, cookieValue: string) => {
    try {
      const response = await fetch('/api/cookies/setcookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cookieKey, cookieValue}),
      });

      if (!response.ok) {
        throw new Error('Failed to set cookie on server');
      }

      
      const { message } = await response.json();
      console.log(message); 
     
      setCookie(message);
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  const getCookieOnServer = async (cookieKey: string) => {
    const url: string = `/api/cookies/setcookie/${cookieKey}`
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to set cookie on server');
      }
      
      const { message } = await response.json();
     
      return message
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  return { cookie, setCookieOnServer, getCookieOnServer };
};