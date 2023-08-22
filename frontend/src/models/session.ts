import { z } from "zod"

const Session = z.object({
    id: z.bigint(),
    name: z.string(),
    userId: z.bigint(),
    tmin: z.bigint(),
    data: z.object({
        horas: z.number(),
        videos: z.number(),
        veiculos: z.number(),
        carros: z.number(),
        onibus: z.number(),
        moto: z.number(),
    })
});

export default Session