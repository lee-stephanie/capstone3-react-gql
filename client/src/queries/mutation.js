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


const createCoachMutation = gql`
  mutation(

    $firstName: String!
    $lastName: String!
    $contact: BigInt!


  ) {
    createCoach(
    firstName:$firstName
    lastName: $lastName
    contact: $contact

    ) {
    
      firstName
      lastName     
      contact
   

    }
  }
`;

const updateCoachMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $contact: BigInt!


  ) {
    updateCoach(
      firstName: $firstName
      lastName: $lastName
      contact: $contact

    ) {
      firstName
      lastName
      contact
    }
  }
`;

const deleteCoachMutation = gql`
  mutation($id: String!) {
    deleteCoach(id: $id)
  }
`;


export { createMemberMutation, updateMemberMutation, deleteMemberMutation, createCoachMutation, deleteCoachMutation, updateCoachMutation
 };
