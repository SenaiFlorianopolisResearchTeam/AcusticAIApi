import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import sql from '../services/connection';
import bcrypt from 'bcrypt';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.post('/login', {
        schema: {
            body: Type.Object({
                email: Type.String(),
                password: Type.String(),
            }),
            response: {
                200: Type.Object({
                    message: Type.String(),
                }),
            },
        },
    }, async (req, res) => {
        const { email, password } = req.body;

        try {
            const [user] = await sql`SELECT id, password FROM "User" WHERE email = ${email}`;

            if (user && await bcrypt.compare(password, user.password)) {
                return { message: 'Login successful.' };
            } else {
                return res.status(401).send({ message: 'Invalid credentials.' });
            }
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error during login.' });
        }
    });
}

export default plugin;