import { createClient } from "redis"

const client = createClient({
  socket: {
    host: 'localhost',
    port: 6379
  },
  password: 'TesteLocal!'
});

const data = {
  video: ""
}

interface UserReply {
  message: string
}

const createUserdataRedis = ( id: any ) => {
  return new Promise<UserReply>((resolve, reject) => {
    
    const key = `user:${id}`;

    client.connect()

    client.set(`${key}`, `${data}`)
    
    resolve({message: 'usuario criado'})
  })
}

export default createUserdataRedis