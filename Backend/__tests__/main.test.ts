import { build } from '../setup';

test('GET `/` route', async () => {
  const fastify = build();

  try {
    const response = await fastify.inject({
      method: 'GET',
      url: '/',
    });

    expect(JSON.parse(response.payload)).toEqual({ res: 'Pong' });
  } catch (err) {
    throw err;
  } finally {
    await fastify.close();
  }
});
