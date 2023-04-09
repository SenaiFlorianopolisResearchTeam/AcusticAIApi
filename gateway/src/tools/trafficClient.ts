import { GreeterClient } from "./trafficAI_grpc_pb";
import { credentials } from "@grpc/grpc-js"

const port = 8070

export const client = new GreeterClient(
    `localhost:${port}`,
    credentials.createInsecure()
)