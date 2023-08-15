import { test, expect, afterAll } from '@jest/globals';
import { fastify } from '../main';

test('Deve iniciar o servidor', async () => {
    try {
      await fastify.ready();
      
      await new Promise(resolve => setTimeout(resolve, 100));
  
      const address = fastify.server.address();
      expect(address).not.toBeNull();
    } catch (err) {
      throw err;
    }
  });
  
  afterAll(async () => {
    await fastify.close();
  });