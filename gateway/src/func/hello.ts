import { HelloRequest } from "../tools/trafficAI_pb"
import { client } from "../tools/trafficClient"

interface HelloReply {
    message: string
}

const hello = async (name: string): Promise<HelloReply> => {
    const request = new HelloRequest()
    request.setName(name)

    return new Promise((resolve, reject) => {
        client.sayHello(request, (err, message) => {
            if (err) {
                reject(err)
            } else {
                const value: any = message!
                resolve({ message: value.array![0] })
            }
        })
    })
}

hello("fd")

export default hello