import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { build } from '../setup';

const prisma = new PrismaClient();

let fastify: FastifyInstance;

beforeAll(async () => {
  fastify = await build();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

describe('create user', () => {
  it('should create a user', async () => {
    const userData = {
      email: `test-${Date.now()}@example.com`,
      password: 'securepassword',
      name: 'Test User',
    };

    try {
      const response = await fastify.inject({
        method: 'POST',
        url: '/users',
        payload: userData,
      });

      expect(response.statusCode).toBe(201);

      const responseBody = JSON.parse(response.payload);
      expect(responseBody.user.email).toBe(userData.email);
      expect(responseBody.user.name).toBe(userData.name);

      const createdUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });
      expect(createdUser).not.toBeNull();
      expect(createdUser?.email).toBe(userData.email);
      expect(createdUser?.name).toBe(userData.name);
    } catch (err) {
      throw err;
    }
  });
});
