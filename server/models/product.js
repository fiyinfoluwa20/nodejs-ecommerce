const mongoose = require("mongoose")
const product = new mongoose.Schema(
	{
		id: String,
		published: Boolean,
		category_id: String,
		p_tok: String,
		sku: String,
		title: String, 
		product_badge: String,
		amount: String,
		sizes: String,
		discount: String,
		tags: String,
		body: String, 
		image1: String,
		image2: String,
		image3: String,
	},
	{timestamps: true}
	)
mongoose.set('autoCreate', true);
module.exports = mongoose.model("Product", product)