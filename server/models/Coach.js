const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coachSchema = new Schema (
	{

		firstName: {
			type: String,
			required: true
		},

		lastName: {
			type: String,
			required: true
		},

		contact: {
			type: Number,
			required: true
		}, 


	},

		{

			timestamps: true

		}

);

module.exports = mongoose.model("Coach", coachSchema);