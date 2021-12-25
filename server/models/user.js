const mongoose = require("mongoose")
const user = new mongoose.Schema(
	{
		name: {type: String},
		surname: String,
		day: String, 
		month: String, 
		year: String, 
		gender: String, 
		email: {type: String}, 
		password: {type: String}, 
		terms: {type: Boolean, default: false},
		verified: {type: Boolean, default: false}
	},
	{timestamps: true}
	)
mongoose.set('autoCreate', true);
module.exports = mongoose.model("User", user)