import http from "http"

const getUser = (data: {email: string}) => {
    const postData = JSON.stringify(data);

    const options = {
        hostname: 'localhost',
        port: 4000,
        path: '/getuser',
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

export default getUser