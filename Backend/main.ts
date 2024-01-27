import { FastifyInstance } from 'fastify';
import { build } from './setup';

build()
  .then((server: FastifyInstance) => {
    server.listen({ host: "0.0.0.0",  port: 4000 }, () => {
      console.info('Server is running on port 4000');
    });
  })
  .catch((error: Error) => {
    console.error('Error during server setup:', error.message);
  });

