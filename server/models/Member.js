const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
	{
		memberSince: {
			type: Date,
			required: true
		},

		nickName: {
			type: String,
			required: true
		},

		firstName: {
			type: String,
			required: true
		},

		lastName: {
			type: String,
			required: true
		},

		birthday: {
			type: Date,
			required: true
		},

		contact: {
			type: Number,
			required: true
		},

		email: {
			type: String,
			required: true
		}
	


	},

	{
		timestamps: true
	}
);

module.exports = mongoose.model("Member", memberSchema);
