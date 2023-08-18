import sql from './connection'; 
import bcrypt from 'bcrypt';

export default async function initializeDatabase() {

  await sql`
    create table if not exists "User" (
      id serial primary key,
      email text unique,
      name text,
      password text
    )
  `;

  await sql`
    create table if not exists "Session" (
      id serial primary key,
      name text,
      userId integer references "User" (id),
      tmin bigint,
      data json
    )
  `;

  await sql`
    create table if not exists "Video" (
      id serial primary key,
      sessionId integer references "Session" (id),
      url text
    )
  `;

  const testUserEmail = 'test@example.com';
  const testUserName = 'Test User';
  const testUserPassword = await bcrypt.hash('password123', 10);

  const existingUser = await sql`
    SELECT id FROM "User" WHERE email = ${testUserEmail}
  `;

  if (!existingUser.length) {
    await sql`
      INSERT INTO "User" (email, name, password)
      VALUES (${testUserEmail}, ${testUserName}, ${testUserPassword})
    `;
  }
}