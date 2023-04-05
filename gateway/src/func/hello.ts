import { HelloRequest } from "../tools/trafficAI_pb"
import { client } from "../tools/trafficClient"

interface HelloReply {
    message: string
}

const hello = ( name: string ) => {
    return new Promise<HelloReply>((resolve, reject) => {
        const request = new HelloRequest()
        request.setName(name)
        
        client.sayHello(request, (err, message) => {
            if (err) reject(err)
            else{
                const value: any = message!
                return resolve({ message: value.array![0] })
            } 
        })
    })
}

export default hello