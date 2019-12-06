import { gql } from "apollo-boost";

const createMemberMutation = gql`
  mutation(
    $memberSince: Date!
    $nickName: String!
    $firstName: String!
    $lastName: String!
    $birthday: Date!
    $contact: BigInt!
    $email: String!
  ) {
    createMember(
      memberSince: $memberSince
      nickName: $nickName
      firstName: $firstName
      lastName: $lastName
      birthday: $birthday
      contact: $contact
      email: $email
    ) {
      id
      memberSince
      nickName
      firstName
      lastName
      birthday
      contact
      email
    }
  }
`;

export { createMemberMutation };
