import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { PrismaClient } from '@prisma/client';
import ErrorSchema from '../types/error';

const prisma = new PrismaClient();

const plugin: FastifyPluginAsyncTypebox = async function(fastify, _opts) {
  fastify.delete('/users/:id', {
    schema: {
      params: Type.Object({
        id: Type.Integer(),
      }),
      response: {
        200: Type.Object({
          message: Type.String(),
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

      await prisma.user.delete({
        where: { id: userId },
      });

      reply.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
      console.log(error);
      reply.status(500).send({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Error deleting user',
      });
    }
  });
};

export default plugin;