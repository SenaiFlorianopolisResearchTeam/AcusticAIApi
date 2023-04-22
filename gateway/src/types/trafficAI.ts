const TrafficAI = `
    type HelloReply {
        message: String
    }

    type ImageReply {
        message: String!
    }

    type VideoReply {
        message: String!
    }

    type Query {
        dummy: Boolean
    }

    type Mutation {
        sayHello(name: String): HelloReply
        predictImage(image: String!): ImageReply!
        predictVideo(video: String!): VideoReply!
    }
`;

export default TrafficAI;