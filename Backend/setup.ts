import Fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import fastifyCors from '@fastify/cors';
import fastifyMetrics from 'fastify-metrics';

export function build(): Promise<FastifyInstance> {

  const server = Fastify({
    logger: {
      file: './resume.log'
    }
  });

  server.register(fastifyCors, {
    origin: '*'
  });
  
  server.register(fastifyMetrics, { endpoint: '/metrics' });

  server.register(AutoLoad, {
    dir: `${__dirname}/routes`,
  });

  return Promise.resolve(server);
}