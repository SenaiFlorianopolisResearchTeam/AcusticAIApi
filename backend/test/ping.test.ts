import { test, expect } from 'vitest';
import { build } from '../server';

test('Ping Route - should respond with default message', async () => {
  const server = build();
  await server.listen(0);

  const response = await server.inject({
    method: 'GET',
    url: '/',
  });

  expect(response.statusCode).toBe(200);
  expect(response.json()).toEqual({ res: 'See the docs on: https://github.com/fullzer4/AcustticAI' });

  server.close();
});