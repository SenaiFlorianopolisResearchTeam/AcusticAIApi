import { test, expect } from 'vitest';
import { build } from '../server';
import initializeDatabase from '../services/initDatabase';
import axios from 'axios';

function generateRandomEmail() {
  const timestamp = new Date().getTime();
  return `user${timestamp}@example.com`;
}

test('Signup Route - should register a new user', async () => {
  const server = build();
  await initializeDatabase();
  await server.listen({port: 4001});

  const randomEmail = generateRandomEmail();
  const response = await axios.post('http://localhost:4001/signup', {
    email: randomEmail,
    name: 'Test User',
    password: 'password123',
  });

  expect(response.status).toBe(200);
  expect(response.data.message).toBe('User registered successfully.');

  server.close();
});
