const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLDate } = require("graphql-iso-date");
//mongoose models

const Member = require("../models/Member");
const Coach = require("../models/Coach");

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

	type CoachType { 

		id: ID
		nickName: String
		firstName: String
		lastName: String
		birthday: Date
		contact: BigInt
	}

	#query assignment

	type Query {
		getMembers: [MemberType]

		getMember(id: ID): MemberType

		getCoaches: [CoachType]

		getCoach(id: ID): CoachType


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

		deleteMember(id: String): Boolean

		createCoach (
			nickName: String!
			firstName: String!
			lastName: String!
			birthday: Date!
			contact: BigInt!

		) : CoachType

		updateCoach(

			id: ID!
			nickName: String!
			firstName: String!
			lastName: String!
			birthday: Date!
			contact: BigInt!

		): CoachType

		deleteCoach(id: String): Boolean


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
		}, 


		getCoaches: () => { 

			return Coach.find({});

		}, 


		getCoach: (_,args) => { 
			console.log(args.id)
			return Coach.findById(args.id);

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
		}, 

		deleteMember: (_, args) => {
			console.log(args.id);

			let condition = args.id;

			//first parameter (what is the condition? , callBack Function)
			return Member.findByIdAndDelete(condition, (err, member) => {
				console.log(err);
				console.log(member);

				if (err || !member) {
					console.log("delete failed. no user found");
					return false;
				}
				console.log("user deleted");
			});
		}, 

		createCoach: (_, args) => {
			console.log(args);

			let newCoach = Coach({
				nickName: args.nickName,
				firstName: args.firstName,
				lastName: args.lastName,
				birthday: args.birthday,
				contact: args.contact
			});

			console.log(newCoach);
			return newCoach.save();
		},

		updateCoach: (_, args) => {
			console.log(args);
			let condition = { _id: args.id };
			let update = {
				nickName: args.nickName,
				firstName: args.firstName,
				lastName: args.lastName,
				birthday: args.birthday,
				contact: args.contact
			};

			return Coach.findOneAndUpdate(condition, update);
		}, 

		deleteCoach: (_, args) => {
			console.log(args.id);

			let condition = args.id;

			//first parameter (what is the condition? , callBack Function)
			return Coach.findByIdAndDelete(condition, (err, member) => {
				console.log(err);
				console.log(Coach);

				if (err || !Coach) {
					console.log("delete failed. no user found");
					return false;
				}
				console.log("coach user deleted");
			});
		}
	}
};

//server

const server = new ApolloServer({
	typeDefs,
	resolvers
});

module.exports = server;
