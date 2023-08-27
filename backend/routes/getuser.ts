import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import sql from '../services/connection';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.get('/getuser', {
        schema: {
            body: Type.Object({
                email: Type.String(),
            }),
            response: {
                200: Type.Object({
                    message: Type.String(),
                    user: Type.Object({
                        id: Type.Number(),
                        email: Type.String(),
                    }),
                }),
                404: Type.Object({
                    message: Type.String()
                }),
                505: Type.Object({
                    message: Type.String()
                })
            },
        },
    }, async (req, res) => {
        const { email } = req.body;

        try {
            const [user] = await sql`SELECT id, email FROM "User" WHERE email = ${email}`;

            if (user) {
                return {
                    message: 'User found.',
                    user: {
                        id: user.id,
                        email: user.email,
                    },
                };
            } else {
                return res.status(404).send({ message: 'User not found.' });
            }
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error during user retrieval.' });
        }
    });
}

export default plugin;
