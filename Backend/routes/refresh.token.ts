import { FastifyPluginAsync } from 'fastify';
import { Type } from '@sinclair/typebox';
import { sign, verify } from 'jsonwebtoken';

interface RefreshTokenRequest {
  Body: {
    refreshToken: string;
  };
}

function verifyToken(token: string, secret: string): any {
  return verify(token, secret);
}

function generateAccessToken(userId: number, email: string, secret: string): string {
  return sign({ userId, email }, secret, { expiresIn: '30d' });
}

const plugin: FastifyPluginAsync = async (fastify, _opts) => {
  fastify.post<RefreshTokenRequest>('/refreshtoken', {
    schema: {
      body: Type.Object({
        refreshToken: Type.String(),
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
    const { refreshToken } = req.body;

    try {
      const payload = verifyToken(refreshToken, 'secret' || '');

      const accessToken = generateAccessToken(payload.userId, payload.email, 'secret' || '');

      reply.status(200).send({ accessToken });
    } catch (error) {
      reply.status(401).send({ error: 'Invalid refresh token' });
    }
  });
};

export default plugin;
