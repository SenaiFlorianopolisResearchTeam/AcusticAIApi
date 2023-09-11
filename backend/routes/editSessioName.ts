import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import sql from '../services/connection';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.put('/editsession/:sessionId', {
        schema: {
            params: Type.Object({
                sessionId: Type.Number(),
            }),
            body: Type.Object({
                userId: Type.Number(),
                name: Type.String(),
            }),
            response: {
                200: Type.Object({
                    message: Type.String(),
                }),
                400: Type.Object({
                    message: Type.String(),
                }),
                404: Type.Object({
                    message: Type.String(),
                }),
                500: Type.Object({
                    message: Type.String(),
                }),
            },
        },
    }, async (req, res) => {
        const { sessionId } = req.params;
        const { userId, name } = req.body;

        try {
            const [existingSession] = await sql`SELECT userId FROM "Session" WHERE id = ${sessionId}`;

            if (!existingSession) {
                return res.status(404).send({ message: 'Session not found.' });
            }

            if (existingSession.userid !== userId) {
                return res.status(400).send({ message: 'User is not authorized to edit this session.' });
            }

            await sql`
                UPDATE "Session" SET name = ${name} WHERE id = ${sessionId}
            `;

            return {
                message: 'Session name updated successfully.',
            };
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error updating session name.' });
        }
    });
}

export default plugin;
