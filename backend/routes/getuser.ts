import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import sql from '../services/connection';

const plugin: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
    fastify.post('/getuser', {
        schema: {
            body: Type.Object({
                email: Type.String()
            }),
            response: {
                200: Type.Object({
                    message: Type.String(),
                }),
            },
        },
    }, async (req, res) => {
        const { email } = req.body;

        try {

        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send({ message: 'Error during search.' });
        }
    });
}

export default plugin;