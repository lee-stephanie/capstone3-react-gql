import { gql } from "apollo-boost";
import {   GraphQLDate } from 'graphql-iso-date';
import {
  graphql,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
 
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      birthday: {
        type: GraphQLDate,
        //resolver can take a Date or date string.
        resolve: () => new Date()
      },
      memberSince: {
        type: GraphQLDate,
        //resolver can take a Date or time string.
        resolve: () => new Date()
      }
    }
  })
});


const getMembersQuery = gql`
  {
    getMembers {
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

export { getMembersQuery };
