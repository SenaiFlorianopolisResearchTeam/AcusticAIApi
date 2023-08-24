import Fastify from 'fastify';
import AutoLoad from '@fastify/autoload';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';
import fastifyJWT from '@fastify/jwt';
import dotenv from 'dotenv';

dotenv.config();

export function build () {

  const key: any = process.env.jwt_key;

  const server = Fastify();

  server.register(Swagger);
  server.register(SwaggerUI);
  server.register(fastifyJWT, {
    secret: key
  });

  server.register(fastifyCors, {
    origin: '*'
  });

  server.register(AutoLoad, {
    dir: `${__dirname}/routes`,
  });

  return server
}