import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { PrismaClient } from '@prisma/client';
import ErrorSchema from '../types/error';

const prisma = new PrismaClient();

const plugin: FastifyPluginAsyncTypebox = async function(fastify, _opts) {
  fastify.get('/users/:id', {
    schema: {
      params: Type.Object({
        id: Type.Integer(),
      }),
      response: {
        200: Type.Object({
          user: Type.Object({
            id: Type.Integer(),
            email: Type.String(),
            name: Type.String(),
          }),
        }),
        404: ErrorSchema,
        500: ErrorSchema,
      },
    },
  }, async (req, reply) => {
    try {
      const userId = req.params.id;

      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'User not found',
        });
        return;
      }

      reply.status(200).send({ user });
    } catch (error) {
      console.log(error);
      reply.status(500).send({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Error fetching user',
      });
    }
  });
};

export default plugin;
