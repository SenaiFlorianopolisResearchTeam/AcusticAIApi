import { fastify } from "../main"

fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
})