import { cookies } from 'next/headers'

export const useCookies = () => {

  const setCookie = async (cookieKey: string, cookieValue: string) => {
    try {
      const response = await fetch('/api/cookies/setcookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cookieKey, cookieValue}),
      })

      if (!response.ok) {
        throw new Error('Failed to set cookie on server')
      }
      
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  const getCookie = async (cookiename: string) => {
    try {
      const response = await fetch(`/api/cookies/getcookie?name=${cookiename}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      await setCookie("auth", responseData.value)

      return responseData.value
    } catch (err){
      console.error('Error:', err);
    }
  }

  const refreshAuthCookie = async () => {
    try {

      const oldtoken = await getCookie("auth")

      const response: any = await fetch('http://localhost:4000/refreshtoken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "refreshToken": oldtoken}),
      })
      const responseData = await response.json();

      await setCookie("auth", responseData?.accessToken)

    } catch (err){
      console.error('Error:', err);
    }
  }

  return { setCookie, getCookie, refreshAuthCookie };
};