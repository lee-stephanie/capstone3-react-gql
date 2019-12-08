const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coachSchema = new Schema (
	{

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
		}
	},

		{

			timestamps: true

		}

);

module.exports = mongoose.model("Coach", coachSchema);