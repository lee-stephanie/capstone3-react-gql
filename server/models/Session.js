const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
	memberId: {
		type: String,
		required: true
	},

	coachId: {
		type: String,
		required: true
	},

	SessionDate: {
		type: Date,
		required: true
	},

	martialartId: {
		type: String,
		required: true
	},

	sessionNo: {
		type: Number,
		required: true
	},

	sessionTotal: {
		type: Number,
		required: true
	},

	price: {
		type: Number,
		required: true
	}


});

module.exports = mongoose.model("Session", sessionSchema);
