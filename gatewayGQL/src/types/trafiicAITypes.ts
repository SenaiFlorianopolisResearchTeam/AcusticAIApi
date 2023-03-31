const typeDefTrafficAI = `
    type HelloReply {
        message: String
    }
        
    type ImageReply {
        message: String
    }
        
    type VideoReply {
        message: String
    }

    type Query {
        sayHello(name: String): HelloReply
    }

    type Query {
        predictImage(image: String): ImageReply
    }

    type Query {
        predictVideo(video: String): VideoReply
    }
`;

export default typeDefTrafficAI