import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import sql from '../services/connection';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.get('/getsessions/:userId', {
        schema: {
            params: Type.Object({
                userId: Type.Number(),
            }),
            response: {
                200: Type.Array(
                    Type.Object({
                        id: Type.Number(),
                        name: Type.String(),
                    })
                ),
                400: Type.Object({
                    message: Type.String(),
                }),
                500: Type.Object({
                    message: Type.String(),
                }),
            },
        },
    }, async (req, res) => {
        const { userId } = req.params;

        try {
            const [existingUser] = await sql`SELECT id FROM "User" WHERE id = ${userId}`;

            if (!existingUser) {
                return res.status(400).send({ message: 'User not found.' });
            }

            const sessions = await sql`SELECT id, name FROM "Session" WHERE userId = ${userId}`;

            return sessions.map((session) => ({
                id: session.id,
                name: session.name,
            }));
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error fetching sessions.' });
        }
    });
}

export default plugin;
