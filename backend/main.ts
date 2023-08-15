import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

const main = async () => {
    try {
        await fastify.listen({ port: 4000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

main()