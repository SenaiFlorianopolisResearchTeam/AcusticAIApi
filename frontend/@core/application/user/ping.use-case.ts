import { UserGateway } from "@/@core/domain/gateways/user.gateway";

export class PingUseCase {
    constructor(private userGateway: UserGateway) { }

    execute(): Promise<string> {
        return this.userGateway.ping()
    }
}