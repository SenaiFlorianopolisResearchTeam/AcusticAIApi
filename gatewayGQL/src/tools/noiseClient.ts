import { GreeterClient } from "../tools/noiseAI_grpc_pb";
import { credentials } from "@grpc/grpc-js"

const port = 8060

export const client = new GreeterClient(
    `localhost:${port}`,
    credentials.createInsecure()
)