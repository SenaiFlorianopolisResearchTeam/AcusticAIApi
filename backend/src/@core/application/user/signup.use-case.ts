import { User } from "@/@core/domain/entities/user";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";

export class SignupUseCase {
    constructor(private usergateway: UserGateway) { }

    async execute(): Promise<boolean> {
        return this.usergateway.singup()
    }
}