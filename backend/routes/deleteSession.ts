import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import sql from '../services/connection';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.delete('/deletesession/:userId/:sessionId', {
        schema: {
            params: Type.Object({
                userId: Type.Number(),
                sessionId: Type.Number(),
            }),
            response: {
                200: Type.Object({
                    message: Type.String(),
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
        const { userId, sessionId } = req.params;

        try {
            const [existingUser] = await sql`SELECT id FROM "User" WHERE id = ${userId}`;

            if (!existingUser) {
                return res.status(400).send({ message: 'User not found.' });
            }

            const deleteResult: any = await sql`
                DELETE FROM "Session" WHERE id = ${sessionId} AND userId = ${userId}
            `;

            if (deleteResult.rowCount > 0) {
                return {
                    message: 'Session deleted successfully.',
                };
            } else {
                return res.status(400).send({ message: 'Session not found or does not belong to the user.' });
            }
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error deleting session.' });
        }
    });
}

export default plugin;
