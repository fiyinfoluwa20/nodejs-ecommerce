const mongoose = require("mongoose")
const favorite = new mongoose.Schema(
	{
		category_id: Number,
		product_id: Number,
		user_id: String,
		cart_tok: String,
		p_tok: String,
		qty: Number,
		total: Number,
		sku: Number,
		title: String, 
		product_badge: String,
		amount: Number,
		sizes: String,
		discount: Number,
		tags: String,
		body: String, 
		image1: String,
		image2: String,
		image3: String,
	},
	{timestamps: true}
	)
mongoose.set('autoCreate', true);
module.exports = mongoose.model("Favorite", favorite)