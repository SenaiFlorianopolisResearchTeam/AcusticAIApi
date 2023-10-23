import { User } from "@/@core/domain/entities/user";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";
import { http } from "../http";

export class UserHttpGateway implements UserGateway {
    constructor(private httpI: typeof http) { }

    async ping(): Promise<string> {
        return this.httpI.get("/")
            .then(res => {
                console.log(res)
                return "foi"
            })
    }

}