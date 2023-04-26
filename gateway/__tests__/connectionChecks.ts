import { server } from "../src/gateway"

it("Check connection grpc", async () => {
    const result = await server.executeOperation({
        query: `
            query {
                
            }
        `
    })
})

it("Check connection mongoDB", async () => {
    const result = await server.executeOperation({
        query: `
            query {
                
            }
        `
    })
})

it("Check connection redis", async () => {
    const result = await server.executeOperation({
        query: `
            query {
                
            }
        `
    })
})