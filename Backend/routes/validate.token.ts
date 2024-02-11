import { FastifyPluginAsync } from 'fastify';
import { Type } from '@sinclair/typebox';
import jwt from 'jsonwebtoken';

interface ValidateTokenRequest {
  Body: {
    accessToken: string;
  };
}

const plugin: FastifyPluginAsync = async (fastify, _opts) => {
  fastify.post<ValidateTokenRequest>('/validatetoken', {
    schema: {
      body: Type.Object({
        accessToken: Type.String(), 
      }),
      response: {
        200: Type.Object({
          message: Type.String(), 
        }),
        401: Type.Object({
          error: Type.String(),
        }),
      },
    },
  }, async (req, reply) => {
    const { accessToken } = req.body;

    try {
      jwt.verify(accessToken, 'secret');

      reply.status(200).send({ message: 'Token is valid' });
    } catch (error) {
      reply.status(401).send({ error: 'Invalid token' });
    }
  });
};

export default plugin;