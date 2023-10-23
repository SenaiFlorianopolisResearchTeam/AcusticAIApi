import { User } from "@/@core/domain/entities/user";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";

export class UserHttpGateway implements UserGateway {
    constructor(private http: typeof fetch) {}

    findById(id: number): Promise<User> {
        return this.http(`/user/${id}`)
          .then(res => {
            return new User('')
          });
    }
}