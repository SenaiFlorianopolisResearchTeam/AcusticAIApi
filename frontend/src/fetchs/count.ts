import http from "http"

const createSession = (data: { userId: number, sessionId: number, video: any, line_startX: number, line_startY: number, line_endX: number, line_endY: number }) => {
    return new Promise<string>((resolve, reject) => {
        const postData = JSON.stringify(data);

        const options = {
            hostname: '0.0.0.0',
            port: 5000,
            path: '/count',
            method: 'POST',
            headers: {
                'Content-Type': 'application/jso: numbern'
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

export default createSession