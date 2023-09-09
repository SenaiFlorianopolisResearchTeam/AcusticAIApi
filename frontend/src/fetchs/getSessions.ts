import http from "http";

const getSessions = (data: { userId: number }) => {
  return new Promise<string>((resolve, reject) => {

    const options = {
      hostname: 'localhost',
      port: 4000,
      path: `/getsessions/${data.userId}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
};

export default getSessions;
