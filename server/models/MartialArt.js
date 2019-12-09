const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const martialartSchema = new Schema(
	{
		martialArt: {
			type: String,
			required: true
		},

		price: {
			type: Number,
			required: true
		},

		roleId: {
			type: String,
			required: true
		}
	},

	{
		timestamps: true
	}
);

module.exports = mongoose.model("MartialArt", martialartSchema);
