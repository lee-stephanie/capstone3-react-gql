const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLDate } = require("graphql-iso-date");
//mongoose models

const Member = require("../models/Member");
const Coach = require("../models/Coach");
const martialArt = require("../models/MartialArt");
const Session = require("../models/Session");

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
		firstName: String
		lastName: String
		contact: BigInt

	}

	type MartialartType {
		id: ID
		martialArt: String
		coachId: String
		coaches: [CoachType]

	}

	type SessionType {
		id: ID
		memberId: String
		coachId: String
		SessionDate: Date
		martialArtId: String
		sessionNo: Int
		sessionTotal: Float
		price: Float
		priceTotal: Float
	}

	#query assignment

	type Query {
		getMembers: [MemberType]

		getMember(id: ID!): MemberType

		getCoaches: [CoachType]

		getCoach(id: ID!): CoachType

		getMartialart(id: ID!): MartialartType

		getMartialarts: [MartialartType]

		getSession(id: ID): SessionType

		getSessions: [SessionType]
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

		createCoach(
			firstName: String!
			lastName: String!
			contact: BigInt!
	
		): CoachType

		updateCoach(
			id: ID!
			firstName: String!
			lastName: String!
			contact: BigInt!
		
		): CoachType

		deleteCoach(id: String): Boolean

		createMartialart(
			martialArt: String
			coachId: String
		) : MartialartType

		updateMartialart( 
			id: ID
			martialArt: String
			coachId: String
		): MartialartType

		deleteMartialart(id:String): Boolean

		createSession(
			memberId: String
			coachId: String
			SessionDate: Date
			martialartId: String
			sessionNo: Int
			sessionTotal: Float
			price: Float

		): SessionType


		updateSession(
			memberId: String
			coachId: String
			SessionDate: Date
			martialartId: String
			sessionNo: Int
			sessionTotal: Float
			price: Float

		): SessionType

		deleteSession(id:String): Boolean
	}
`;

const resolvers = {
	Query: {
		getMembers: () => {
			return Member.find({});
		},

		getMember: (parent, args) => {
			console.log("nakuha mo");
			console.log(args.id);
			return Member.findById(args.id);
		},

		getCoaches: () => {
			return Coach.find({});
		},

		getCoach: (_, args) => {

			console.log(args.id);
			return Coach.findById(args.id);
		},


		getMartialarts: (parent,args) => { 

			return martialArt.find({});
		}, 

		getMartialart: () => { 

			return martialArt.findById(args.id);
		},

		getSessions: () => {
			return Session.find({});
		},

		getSession: () => {
			return Session.findById(args.id);
		}


	},

	Mutation: {
		createMember: (_, args) => {
			console.log("creating member...");




			let newMember = Member({
				memberSince: args.memberSince,
				nickName: args.nickName,
				firstName: args.firstName,
				lastName: args.lastName,
				birthday: args.birthday,
				contact: args.contact,
				email: args.email,
		
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
				email: args.email,
		
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
		
				firstName: args.firstName,
				lastName: args.lastName,
				contact: args.contact,
			
			});

			console.log(newCoach);
			return newCoach.save();
		},

		updateCoach: (_, args) => {
			console.log(args);
			let condition = { _id: args.id };
			let update = {
			
				firstName: args.firstName,
				lastName: args.lastName,
				contact: args.contact,
				
			};

			return Coach.findOneAndUpdate(condition, update);
		},

		deleteCoach: (_, args) => {
			console.log(args.id);

			let condition = args.id;

			//first parameter (what is the condition? , callBack Function)
			return Coach.findByIdAndDelete(condition, (err, coach) => {
				console.log(err);
				console.log(Coach);

				if (err || !Coach) {
					console.log("delete failed. no user found");
					return false;
				}
				console.log("coach user deleted");
			});
		}, 
	
		createMartialart: (_, args) => {
			console.log(args);

			let newmartialArt = martialArt({
		
				martialArt: args.martialArt,
				coachId: args.coachId
		
			});

			console.log(newmartialArt);
			return newmartialArt.save();
		},

		updateMartialart:(_,args)=> { 
			console.log(args);
			let condition = {_id: args.id};
			let update = { 
					martialArt: args.martialArt,
					coachId: args.coachId

			};

			return martialArt.findOneAndUpdate(condition,update);

		},

		deleteMartialart: (_, args) => {
			console.log(args.id);

			let condition = args.id;

			//first parameter (what is the condition? , callBack Function)
			return martialArt.findByIdAndDelete(condition, (err, martialArt) => {
				console.log(err);
				console.log(martialArt);

				if (err || !martialArt) {
					console.log("delete failed. no user found");
					return false;
				}

				console.log("martialArt deleted");
			});
		}, 

		createSession: (_, args) => {
			console.log(args);

			let newSession = Session({
		
				memberId: args.memberId,
				coachId: args.coachId,
				SessionDate: args.SessionDate,
				martialArtId: args.martialArtId,
				sessionNo: args.sessionNo,
				sessionTotal: args.sessionTotal,
				price: args.price	
			});

			console.log(newSession);
			return newSession.save();
		},

		updateSession:(_,args)=> { 
			console.log(args);
			let update = { 
				memberId: args.memberId,
				coachId: args.coachId,
				SessionDate: args.SessionDate,
				martialArtId: args.martialArtId,
				sessionNo: args.sessionNo,
				sessionTotal: args.sessionTotal,
				price: args.price

			};

			return Session.findOneAndUpdate(condition,update);


		}, 

		deleteSession: (_, args) => {
			console.log(args.id);

			let condition = args.id;

			//first parameter (what is the condition? , callBack Function)
			return Session.findByIdAndDelete(condition, (err, session) => {
				console.log(err);
				console.log(Session);

				if (err || !Session) {
					console.log("delete failed. no user found");
					return false;
				}

				console.log("Session deleted");
			});
		}


		



	},

	MartialartType: {
		coaches: (parent, args) => {
			console.log("retrieving coach details");
			console.log(parent);

			return Coach.find({ _id: parent.coachId });
		}
	}, 

/*	CoachType: { 
		Specialty: (parent, args) => { 
			console.log("retrieving martial art details");
			console.log(parent)

			return martialArt.find({ _id: parent.martialArtId });

		}

	}*/

};

//server

const server = new ApolloServer({
	typeDefs,
	resolvers
});

module.exports = server;
