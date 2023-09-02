import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import sql from '../services/connection';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.post('/createsession', {
        schema: {
            body: Type.Object({
                userId: Type.Number(),
                name: Type.String(),
            }),
            response: {
                201: Type.Object({
                    message: Type.String(),
                    sessionId: Type.Number(),
                }),
                400: Type.Object({
                    message: Type.String(),
                }),
                500: Type.Object({
                    message: Type.String(),
                }),
            },
        },
    }, async (req, res) => {
        const { userId, name } = req.body;

        try {
            const [existingUser] = await sql`SELECT id FROM "User" WHERE id = ${userId}`;

            if (!existingUser) {
                return res.status(400).send({ message: 'User not found.' });
            }

            const result = await sql`
                INSERT INTO "Session" (name, userId)
                VALUES (${name}, ${userId})
                RETURNING id
            `;

            if (result.length > 0) {
                return {
                    message: 'Session created successfully.',
                    sessionId: result[0].id,
                };
            } else {
                return res.status(500).send({ message: 'Error creating session.' });
            }
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error creating session.' });
        }
    });
}

export default plugin;
