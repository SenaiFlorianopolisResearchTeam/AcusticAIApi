import { User } from "../entities/user";

export interface UserGateway {
    findById(id: number): Promise<User>
}