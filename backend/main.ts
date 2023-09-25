import { build } from './server';
import initializeDatabase from './services/initDatabase';

initializeDatabase()
  .then(async () => {
    const server = await build();
    server.listen( 4000, '0.0.0.0' , () => {
        const address:any = server.server.address();
        const ip = address.address;
      console.log(`Server is running on port ${ip}:4000`);
    });
  })
  .catch((error) => {
    console.error('Error initializing database:', error);
    process.exit(1);
  });