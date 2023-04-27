import { GreeterClient } from "./trafficAI_grpc_pb";
import { credentials } from "@grpc/grpc-js"

const port = 8070

export const client = new GreeterClient(
    `0.0.0.0:${port}`,
    credentials.createInsecure()
)