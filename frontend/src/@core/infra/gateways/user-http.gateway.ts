import { UserGateway } from "@/@core/domain/gateways/user.gateway";
import { http } from "../http";
import { User } from "@/@core/domain/entities/user";

export class UserHttpGateway implements UserGateway {
    constructor(private httpI: typeof http) { }

    async ping(): Promise<string> {
        return this.httpI.get()
            .then(async res => {
                const jsonData = await res.json();
                return jsonData;
            });
    }

    async singup(): Promise<boolean> {
        return false
    }

    async login(): Promise<User> {
        let user = new User({ id: 0, email: "", name: "", password: "" })
        return user
    }

}