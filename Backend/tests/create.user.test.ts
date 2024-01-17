import { test } from 'node:test';
import assert from 'assert';
import { build } from '../setup';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

test('POST `/users` route', async (t) => {
  const fastify = build();

  // Dados do usuário para o teste
  const userData = {
    email: 'test@example.com',
    password: 'securepassword',
    name: 'Test User',
  };

  try {
    // Fazer uma solicitação POST para criar um usuário
    const response = await (await fastify).inject({
      method: 'POST',
      url: '/users',
      payload: userData,
    });

    // Verificar se a resposta tem o código de status correto
    assert.strictEqual(response.statusCode, 201);

    // Verificar se a resposta contém os dados do usuário
    const responseBody = JSON.parse(response.payload);
    assert.deepStrictEqual(responseBody.user.email, userData.email);
    assert.deepStrictEqual(responseBody.user.name, userData.name);

    // Verificar se o usuário foi realmente criado no banco de dados
    const createdUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });
    assert(createdUser !== null);
    assert.deepStrictEqual(createdUser?.email, userData.email);
    assert.deepStrictEqual(createdUser?.name, userData.name);
  } catch (err) {
    throw err;
  } finally {
    // Fechar a instância do Fastify e desconectar o Prisma
    await (await fastify).close();
    await prisma.$disconnect();
  }
});