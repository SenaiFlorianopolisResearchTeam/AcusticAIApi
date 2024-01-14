import { test } from 'node:test'
import assert from 'assert'
import { build } from '../setup';

test('GET `/` route', async (t) => {
  const fastify = build();

  try {
    const response = await (await fastify).inject({
      method: 'GET',
      url: '/',
    });

    assert.deepStrictEqual(JSON.parse(response.payload), { res: 'Pong' });
  } catch (err) {
    throw err;
  } finally {
    await (await fastify).close();
  }
});
