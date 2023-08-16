import { build } from '../server';

describe('Server', () => {
  let server: any;

  beforeAll(() => {
    server = build();
    return server.listen(0);
  });

  afterAll(async () => {
    await server.close();
  });

  it('should start the server', async () => {
    expect(server.server.listening).toBeTruthy();
  });
});
