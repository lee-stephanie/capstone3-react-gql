const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLDate } = require("graphql-iso-date");
//mongoose models

const Member = require("../models/Member");

const customScalarResolver = {
	Date: GraphQLDate
};

//typeDefs (Get query details)
const typeDefs = gql`
	scalar Date
	scalar BigInt

	type MemberType {
		id: ID
		memberSince: Date
		nickName: String
		firstName: String
		lastName: String
		birthday: Date
		contact: BigInt
		email: String
	}

	#query assignment

	type Query {
		getMembers: [MemberType]

		getMember(id: ID): MemberType
	}

	type Mutation {
		createMember(
			memberSince: Date!
			nickName: String!
			firstName: String!
			lastName: String!
			birthday: Date!
			contact: BigInt!
			email: String!
		): MemberType

		updateMember(
			id: ID!
			memberSince: Date!
			nickName: String!
			firstName: String!
			lastName: String!
			birthday: Date!
			contact: BigInt!
			email: String!
		): MemberType
	}
`;

const resolvers = {
	Query: {
		getMembers: () => {
			return Member.find({});
		},

		getMember: (parent, args) => {
			console.log(args.id);
			return Member.findById(args.id);
		}
	},

	Mutation: {
		createMember: (_, args) => {
			console.log(args);

			let newMember = Member({
				memberSince: args.memberSince,
				nickName: args.nickName,
				firstName: args.firstName,
				lastName: args.lastName,
				birthday: args.birthday,
				contact: args.contact,
				email: args.email
			});

			console.log(newMember);
			return newMember.save();
		},

		updateMember: (_, args) => {
			console.log(args);
			let condition = { _id: args.id };
			let update = {
				memberSince: args.memberSince,
				nickName: args.nickName,
				firstName: args.firstName,
				lastName: args.lastName,
				birthday: args.birthday,
				contact: args.contact,
				email: args.email
			};

			return Member.findOneAndUpdate(condition, update);
		}
	}
};

//server

const server = new ApolloServer({
	typeDefs,
	resolvers
});

module.exports = server;
