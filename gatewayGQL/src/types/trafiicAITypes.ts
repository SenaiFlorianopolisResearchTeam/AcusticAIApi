const typeDefTrafficAI = `
    type HelloRequest {
        name: String
    }
    
    type HelloReply {
        message: String
    }
    
    type ImageRequest {
        image: String
    }
    
    type ImageReply {
        message: String
    }
    
    type VideoRequest {
        video: String
    }
    
    type VideoReply {
        message: String
    }
    
    type GreeterSayHelloResponse {
        greeting: HelloReply
    }
    
    type GreeterSendImageResponse {
        status: ImageReply
    }
    
    type GreeterSendVideoResponse {
        status: VideoReply
    }
    
    type Greeter {
        sayHello(input: HelloRequest): GreeterSayHelloResponse
        sendImage(input: ImageRequest): GreeterSendImageResponse
        sendVideo(input: VideoRequest): GreeterSendVideoResponse
    }
`;

export default typeDefTrafficAI