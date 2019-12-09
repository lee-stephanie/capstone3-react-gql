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
    $imageLocation: String
    $roleId: String
  ) {
    createMember(
      memberSince: $memberSince
      nickName: $nickName
      firstName: $firstName
      lastName: $lastName
      birthday: $birthday
      contact: $contact
      email: $email
      imageLocation: $imageLocation
      roleId: $roleId
    ) {
      id
      memberSince
      nickName
      firstName
      lastName
      birthday
      contact
      email
      imageLocation
      roleId
    }
  }
`;

const updateMemberMutation = gql`
  mutation(
    $memberSince: Date!
    $nickName: String!
    $firstName: String!
    $lastName: String!
    $birthday: Date!
    $contact: BigInt!
    $email: String!
  ) {
    updateMember(
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

const deleteMemberMutation = gql`
  mutation($id: String!) {
    deleteMember(id: $id)
  }
`;

export { createMemberMutation, updateMemberMutation, deleteMemberMutation };
