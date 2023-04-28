import { gql } from "@apollo/client";
import client from "../tools/trafficAIClient";

export async function getHelloProps(name: string) {
    const { data } = await client.mutate({
      mutation: gql`
        mutation Hello($name: String!) {
            sayHello(name: $name) {
                message
            }
        }
        `,
        variables: {
            name,
        },
    });

    return {
      props: {
        message: data.sayHello.message,
      },
   };
}

export async function createUser(username: string, email: string, password: string) {
  await client.mutate({
    mutation: gql`
      mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
          message
        }
      }
      `,
      variables: {
          username,
          email,
          password
      },
  });

  return {
    props: {
      message: "usuario criado com sucesso",
    },
 };
}