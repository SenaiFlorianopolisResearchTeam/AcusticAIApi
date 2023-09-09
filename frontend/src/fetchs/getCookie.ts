import http from "http";

const getCookie = () => {
  return new Promise<string>((resolve, reject) => {

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/getCookies',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        resolve(responseData);
      });
    });

    req.on('error', (error) => {
      reject(error); 
    });

    req.end();
  });
}

export default getCookie;