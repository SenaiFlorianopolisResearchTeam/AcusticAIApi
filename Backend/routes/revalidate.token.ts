import { FastifyPluginAsync } from 'fastify';
import { Type } from '@sinclair/typebox';
import { sign } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RevalidateTokenRequest {
  Body: {
    id: number;
    email: string;
  };
}

function generateAccessToken(userId: number, secret: string): string {
  return sign({ userId }, secret, { expiresIn: '1h' });
}

const plugin: FastifyPluginAsync = async (fastify, _opts) => {
  fastify.post<RevalidateTokenRequest>('/revalidatetoken', {
    schema: {
      body: Type.Object({
        id: Type.Integer(),
        email: Type.String(),
      }),
      response: {
        200: Type.Object({
          accessToken: Type.String(),
        }),
        401: Type.Object({
          error: Type.String(),
        }),
      },
    },
  }, async (req, reply) => {
    const { id, email } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { id, email },
      });

      if (!user) {
        reply.status(401).send({ error: 'Invalid user information' });
        return;
      }

      const accessToken = generateAccessToken(id, 'segredo');

      reply.status(200).send({ accessToken });
    } catch (error) {
      reply.status(401).send({ error: 'Invalid user information' });
    }
  });
};

export default plugin;