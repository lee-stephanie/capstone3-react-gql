const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const martialartSchema = new Schema(
	{
		martialArt: {
			type: String,
			required: true
		}, 
		
		coachId: {
			type: String,
			required: true
		}

	},

	{
		timestamps: true
	}
);

module.exports = mongoose.model("martialArt", martialartSchema);
