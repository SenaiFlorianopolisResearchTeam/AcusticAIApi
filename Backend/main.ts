import { FastifyInstance } from 'fastify';
import { build } from './setup';

build()
  .then((server: FastifyInstance) => {
    server.listen({ port: 4000 }, () => {
      console.info('Server is running on port 4000');
    });
  })
  .catch((error: Error) => {
    console.error('Error during server setup:', error.message);
  });

