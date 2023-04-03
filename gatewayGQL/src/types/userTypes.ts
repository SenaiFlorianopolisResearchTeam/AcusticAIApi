const typeDefTrafficAI = `
  type CreatUserReply {
    message: String
  }

  type Mutation {
    createUser(username: String, email: String, password: String): CreatUserReply!
  }
`;

export default typeDefTrafficAI;