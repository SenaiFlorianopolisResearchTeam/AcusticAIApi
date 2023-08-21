import request from 'supertest';
import { build } from '../server';
import initializeDatabase from '../services/initDatabase';

describe('Login Route', () => {
    let server: any;

    beforeAll(async () => {
        server = build();
        await initializeDatabase()
        return await server.listen(0);
    });

    it('should login with valid credentials', async () => {
        const response = await request(server.server)
            .post('/login')
            .send({
                name: 'test',
                email: 'test@example.com',
                password: 'password123',
            });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Login successful.');
    });

    afterAll(async () => {
        await server.close();
    });
});
