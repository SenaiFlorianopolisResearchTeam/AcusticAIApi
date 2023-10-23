import { UserGateway } from "@/@core/domain/gateways/user.gateway";
import { http } from "../http";

export class UserHttpGateway implements UserGateway {
    constructor(private httpI: typeof http) { }

    async ping(): Promise<string> {
        return this.httpI.get("/")
            .then(async res => {
                const jsonData = await res.json();
                return jsonData;
            });
    }

}