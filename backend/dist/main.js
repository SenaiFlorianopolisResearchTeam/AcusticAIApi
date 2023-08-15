"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' };
});
const main = async () => {
    try {
        await fastify.listen({ port: 4000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
main();
