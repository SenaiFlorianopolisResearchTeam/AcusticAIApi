import { afterAll, test, expect } from 'vitest';
import { build } from '../server';
import initializeDatabase from '../services/initDatabase';
import axios from 'axios';

const server = build();
initializeDatabase();
server.listen({ port: 4000 });

test('Login Route - should login with valid credentials', async () => {

  console.log(server.server.address());

  const postData = {
    name: 'test',
    email: 'test@example.com',
    password: 'password123',
  };

  const response = await axios.post('http://localhost:4000/login', postData, {
    headers: {
      'Content-Type': 'application/json',
    },
    });

    expect(response.status).toBe(200);
    expect(response.data.success).toBe(true);
});

afterAll(async () => {
  await server.close()
})