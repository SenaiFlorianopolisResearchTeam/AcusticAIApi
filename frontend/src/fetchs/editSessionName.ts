import http from "http"

const editSessionName = (data: { id: number, name: string, sessionId: number }) => {
    return new Promise<string>((resolve, reject) => {
        const postData = JSON.stringify({ userId: data.id, name: data.name });
        const options = {
            hostname: '0.0.0.0',
            port: 4000,
            path: `/editsession/${data.sessionId}`,
            method: 'PUT',
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

export default editSessionName;
