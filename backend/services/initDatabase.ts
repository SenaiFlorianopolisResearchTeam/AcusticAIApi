import sql from './connection'; 

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
}