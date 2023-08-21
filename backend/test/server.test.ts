import { test, expect } from 'vitest';
import { build } from '../server';

test('Server - should start the server', async () => {
  const server = build();
  await server.listen(0);

  expect(server.server.listening).toBe(true);

  server.close();
});
