import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { build } from '../setup';

const prisma = new PrismaClient();
let fastify: FastifyInstance;
let createdUser: any;

beforeAll(async () => {
  fastify = await build();

  const userData = {
    email: `test-${Date.now()}@example.com`,
    password: 'securepassword',
    name: 'Test User',
  };

  createdUser = await prisma.user.create({
    data: userData,
  });
});

afterAll(async () => {
  await prisma.user.delete({
    where: { id: createdUser.id },
  });

  await fastify.close();
  await prisma.$disconnect();
});

describe('get user by ID', () => {
  it('should get a user by ID', async () => {
    try {
      const response = await fastify.inject({
        method: 'GET',
        url: `/users/${createdUser.id}`,
      });

      expect(response.statusCode).toBe(200);

      const responseBody = JSON.parse(response.payload);
      expect(responseBody.user.id).toBe(createdUser.id);
      expect(responseBody.user.email).toBe(createdUser.email);
      expect(responseBody.user.name).toBe(createdUser.name);
    } catch (err) {
      throw err;
    }
  });
});
