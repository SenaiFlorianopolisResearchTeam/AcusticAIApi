import { gql } from '@apollo/client';

export const SAY_HELLO = gql`
  mutation SayHello($name: String!) {
    sayHello(name: $name) {
      message
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      message
    }
  }
`

export const PREDICT_IMAGE = gql`
  mutation PredictImage($image: String!) {
    predictImage(image: $image) {
      message
    }
  }
`