const User = `
    type CreateUserReply {
        message: String!
    }

    type Query {
        dummy: Boolean
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): CreateUserReply!
    }
`;

export default User;