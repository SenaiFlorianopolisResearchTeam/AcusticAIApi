const typeDefnoiseAI = `
    type NoiseRequest {
        noise: String
    }
    
    type NoiseReply {
        message: String
    }
    
    type GreeterPredictResponse {
        noisePredicted: NoiseReply
    }
    
    type Greeter {
        predict(noise: NoiseRequest): GreeterPredictResponse
    }

    type Query {
        predict(noise: String): NoiseReply
    }
`;

export default typeDefnoiseAI