import http from "http"

const deleteSession = (data: {userId: number, sessionId: number}) => {
    return new Promise<string>((resolve, reject) => {
      const postData = JSON.stringify(data);
  
      const options = {
        hostname: 'localhost',
        port: 4000,
        path: `/deletesession/${data.userId}/${data.sessionId}`,
        method: 'DELETE',
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

export default deleteSession