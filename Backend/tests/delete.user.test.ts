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
  if (createdUser) {
    const existingUser = await prisma.user.findUnique({
      where: { id: createdUser.id },
    });

    if (existingUser) {
      await prisma.user.delete({
        where: { id: createdUser.id },
      });
    }
  }

  await fastify.close();
  await prisma.$disconnect();
});

describe('delete user by ID', () => {
  it('should delete a user by ID', async () => {
    try {
      const response = await fastify.inject({
        method: 'DELETE',
        url: `/users/${createdUser.id}`,
      });

      expect(response.statusCode).toBe(200);

      const responseBody = JSON.parse(response.payload);
      expect(responseBody.message).toBe('Deleted successfully');

      const deletedUser = await prisma.user.findUnique({
        where: { id: createdUser.id },
      });
      expect(deletedUser).toBeNull();
    } catch (err) {
      throw err;
    }
  });

  it('should handle user not found', async () => {
    try {
      const nonExistentUserId = 999999;
      const response = await fastify.inject({
        method: 'DELETE',
        url: `/users/${nonExistentUserId}`,
      });

      expect(response.statusCode).toBe(404);

      const responseBody = JSON.parse(response.payload);
      expect(responseBody.statusCode).toBe(404);
      expect(responseBody.error).toBe('Not Found');
      expect(responseBody.message).toBe('User not found');
    } catch (err) {
      throw err;
    }
  });
});
