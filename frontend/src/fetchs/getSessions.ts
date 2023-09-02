import http from "http"

const createUser = (data: {userId: number}) => {
    return new Promise<string>((resolve, reject) => {
      const postData = JSON.stringify(data);
  
      const options = {
        hostname: '0.0.0.0',
        port: 4000,
        path: '/getsessions',
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

export default createUser