import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import sql from '../services/connection';
import bcrypt from 'bcrypt';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.post('/signup', {
        schema: {
            body: Type.Object({
                email: Type.String(),
                name: Type.String(),
                password: Type.String(),
            }),
            response: {
                201: Type.Object({
                    message: Type.String(),
                }),
            },
        },
    }, async (req, res) => {
        const { email, name, password } = req.body;

        try {

            const existingUser = await sql`SELECT id FROM "User" WHERE email = ${email}`;
            if (existingUser.length > 0) {
                return res.status(409).send({ message: 'User already exists.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const result = await sql`
                INSERT INTO "User" (email, name, password)
                VALUES (${email}, ${name}, ${hashedPassword})
                RETURNING id
            `;

            if (result.length > 0) {
                return { message: 'User registered successfully.' };
            } else {
                return res.status(500).send({ message: 'Error registering user.' });
            }
        } catch (error) {
            return res.status(500).send({ message: 'Error registering user.' });
        }
    });
}

export default plugin;