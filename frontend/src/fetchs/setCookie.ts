import http from "http";

const setCookie = (data: { token: string }) => {
  return new Promise<string>((resolve, reject) => {
    const postData = JSON.stringify(data);

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/setCookies',
      method: 'POST',
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

    req.write(postData);
    req.end();
  });
}

export default setCookie;