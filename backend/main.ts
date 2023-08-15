import Fastify from 'fastify'
import * as Effect from "@effect/io/Effect";

export const fastify = Fastify({
  logger: true
})

fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

const main: Effect.Effect<never, void, string> = Effect.tryPromise({
  try: async () => await fastify.listen({ port: 4000 }),
  catch: (err) => {
    fastify.log.error(err)
    new Error(`something went wrong ${err}`)
  }
})

Effect.runPromise(main)