import { User } from "../entities/user";

export interface UserGateway {
    ping(): Promise<string>
}