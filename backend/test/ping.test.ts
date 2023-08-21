import { build } from '../server';

describe('Ping Route', () => {
  let server: any;

  beforeAll(async () => {
    server = build();
    return await server.listen(0);
  });

  it('should respond with default message', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toEqual(200);
    expect(response.json()).toEqual({ res: 'See the docs on: https://github.com/fullzer4/AcustticAI' });

  });

  afterAll(async () => {
    await server.close();
  });
  
});