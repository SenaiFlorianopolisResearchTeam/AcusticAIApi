import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import ErrorSchema from '../types/error';

const prisma = new PrismaClient();

const plugin: FastifyPluginAsyncTypebox = async function(fastify, _opts) {
  fastify.post('/login', {
    schema: {
      body: Type.Object({
        email: Type.String(),
        password: Type.String(),
      }),
      response: {
        200: Type.Object({
          accessToken: Type.String(),
        }),
        401: ErrorSchema,
        500: ErrorSchema,
      },
    },
  }, async (req, reply) => {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user || user.password !== password) {
        reply.status(401).send({
          statusCode: 401,
          error: 'Unauthorized',
          message: 'Invalid credentials',
        });
        return;
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, 'secret', { expiresIn: '1m' });

      reply.status(200).send({ accessToken: token });
    } catch (error) {
      console.log(error);
      reply.status(500).send({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Error during login',
      });
    }
  });
};

export default plugin;