import resolverNoiseAI from "./noiseaiRes";
import resolverTrafficAI from "./trafficaiRes";
import resolverUser from "./userRes";

const resolvers = {
    ...resolverTrafficAI,
    ...resolverNoiseAI,
    ...resolverUser,
};

export default resolvers;