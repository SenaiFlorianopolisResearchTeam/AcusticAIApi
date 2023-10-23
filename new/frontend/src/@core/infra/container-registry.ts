import { Container } from "inversify";
import { http } from "./http";
import { UserHttpGateway } from "./gateways/user-http.gateway";
import { LoginUserUseCase } from "../application/user/login.use-case";
import { PingUseCase } from "../application/user/ping.use-case";

export const Registry = {
    FetchAdapter: Symbol.for("FetchAdapter"),

    UserGateway: Symbol.for("UserGateway"),

    PingUseCase: Symbol.for("PingUseCase"),
    LoginUserUseCase: Symbol.for("LoginUserUseCase"),
}

export const container = new Container()

container.bind(Registry.FetchAdapter).toConstantValue(http)
container.bind(Registry.UserGateway).toDynamicValue((context) => {
    return new UserHttpGateway(context.container.get(Registry.FetchAdapter))
})
container.bind(Registry.PingUseCase).toDynamicValue((context) => {
    return new PingUseCase(context.container.get(Registry.UserGateway))
})
container.bind(Registry.LoginUserUseCase).toDynamicValue((context) => {
    return new LoginUserUseCase(context.container.get(Registry.UserGateway))
})