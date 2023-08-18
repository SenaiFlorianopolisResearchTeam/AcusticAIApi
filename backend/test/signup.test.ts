import request from 'supertest';
import { build } from '../server';
import initializeDatabase from '../services/initDatabase';

function generateRandomEmail() {
  const timestamp = new Date().getTime();
  return `user${timestamp}@example.com`;
}

describe('Signup Route', () => {
  let server: any;

  beforeAll(() => {
    server = build();
    initializeDatabase()
    return server.listen(0);
  });

  it('should register a new user', async () => {
    const randomEmail = generateRandomEmail();
    const response = await request(server.server)
      .post('/signup')
      .send({
        email: randomEmail,
        name: 'Test User',
        password: 'password123',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('User registered successfully.');
  });

  afterAll(async () => {
    await server.close();
  });
});
