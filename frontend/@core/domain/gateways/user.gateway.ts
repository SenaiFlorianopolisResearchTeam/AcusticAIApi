import { User } from "../entities/user";

export interface UserGateway {
    ping(): Promise<string>
    singup(): Promise<boolean>
    login(): Promise<User>
}