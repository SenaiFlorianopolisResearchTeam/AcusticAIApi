const User = `
    type CreateUserReply {
        message: String!
    }

    type LogUserReply {
        token: String!
        message: String!
    }

    type Query {
        dummy: Boolean
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): CreateUserReply!
        logUser(email: String!, password: String!): LogUserReply!
    }
`;

export default User;