import { resolverNoiseAI } from "./noiseaiRes";
import { resolverTrafficAI } from "./trafficaiRes";

const resolvers = {
    ...resolverTrafficAI,
    ...resolverNoiseAI,
};

export default resolvers;