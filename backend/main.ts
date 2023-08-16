import { build } from './server';
import initializeDatabase from './services/initDatabase';

initializeDatabase()
  .then(() => {
    const server = build();
    server.listen({ port: 4000 }, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((error) => {
    console.error('Error initializing database:', error);
    process.exit(1);
  });