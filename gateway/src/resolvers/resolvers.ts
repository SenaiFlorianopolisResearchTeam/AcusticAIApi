import trafficAI from "./trafficAI";
import user from "./user";

const resolvers = {
    ...trafficAI,
    ...user
};

export default resolvers;