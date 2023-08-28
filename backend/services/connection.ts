import postgres from 'postgres';
import { database, host, password, port, username } from '../secrets';

const sql = postgres({
  host: host,
  port: port,
  database: database,
  username: username,
  password: password,
});

export default sql;