import http from "http"

const logUser = (data: {email: string, password: string}) => {
    const postData = JSON.stringify(data);

    const options = {
        hostname: 'localhost',
        port: 4000,
        path: '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    const req = http.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log('Response:', responseData);
        });
    });

    req.on('error', (error) => {
        console.error('Error:', error);
    });

    req.write(postData);
    req.end();
}

export default logUser