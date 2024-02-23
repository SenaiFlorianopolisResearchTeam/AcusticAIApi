import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { Prisma, PrismaClient } from '@prisma/client';
import ErrorSchema from '../types/error';

const prisma = new PrismaClient();

const plugin: FastifyPluginAsyncTypebox = async function(fastify, _opts) {
  fastify.post('/users', {
    schema: {
      body: Type.Object({
        email: Type.String(),
        password: Type.String(),
        name: Type.String(),
      }),
      response: {
        201: Type.Object({
          user: Type.Object({
            id: Type.Integer(),
            email: Type.String(),
            name: Type.String(),
          }),
        }),
        400: ErrorSchema,
        500: ErrorSchema,
      },
    },
  }, async (req, reply) => {
    try {
      const { email, password, name } = req.body;

      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          name,
        },
      });

      reply.status(201).send({ user: newUser });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'E-mail already in use',
        });
      } else {
        reply.status(500).send({
          statusCode: 500,
          error: 'Internal Server Error',
          message: 'Error creating user',
        });
      }
    }
  });
};

export default plugin;
