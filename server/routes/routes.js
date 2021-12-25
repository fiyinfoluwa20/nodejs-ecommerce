let router = require("express").Router();
let errors = require("../helpers/errors");
let user = require("../models/user");
let product = require("../models/product");
let cart = require("../models/cart");
let favorite = require("../models/favorite");
let CryptoJS = require("crypto-js");
let jwt = require("jsonwebtoken");
let db = require("../auth/db")

let newProduct = 
[
	{
	  "id": "1",
	  "published": true,
	  "category_id": "1",
	  "p_tok": "3b51cdf2529995307e7c39e4b4412e",
	  "sku": "127",
	  "title": "Grey Pendant Bell Lamp",
	  "product_badge": "sale",
	  "amount": 5000,
	  "sizes": "SM,M,LG,XLG,XSM",
	  "discount": "0",
	  "tags": "Hoodie,Beautiful,Lovely,Best",
	  "body": "&amp;nbsp;&amp;nbsp;&amp;nulla pariatur. Excepteur sint occaecat cupidatat non&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "image1": "SI_1614937744-165520426274594062.jpg",
	  "image2": "SI_1614938114-758197766080207365.jpg",
	  "image3": "SI_1614938119-793952349376136865.jpg",
	  "created": "2021-03-05 10:57:18"
	},
	{
	  "id": "2",
	  "published": true,
	  "category_id": "2",
	  "p_tok": "33d2336d0492887f77cbc2e67153c7",
	  "sku": "127",
	  "title": "Peach Low Curve Iceman Trimix Sneakers",
	  "product_badge": "fresh",
	  "amount": 1000,
	  "sizes": "67,58,24,97",
	  "discount": "0",
	  "tags": "Sneakers,Footwears,Perfect",
	  "body": "ipsum dolor sit amet, consectetur ore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "image1": "SI_1614941482-484496788358143711.jpg",
	  "image2": "SI_1614941486-102246909910458520.jpg",
	  "image3": "SI_1614941493-215614591062973133.jpg",
	  "created": "2021-03-05 11:11:31"
	},
	{
	  "id": "3",
	  "published": true,
	  "category_id": "3",
	  "p_tok": "fc43209116a98f98d20bf37e000650",
	  "sku": "127",
	  "title": "Dark Stained NY11 Dining Chair",
	  "product_badge": "stock",
	  "amount": 30000,
	  "sizes": "empty",
	  "discount": "0",
	  "tags": "Furnitures,Home,Beauty",
	  "body": "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "image1": "SI_1614939275-135932652171671248.jpg",
	  "image2": "SI_1614939281-826502960122100099.jpg",
	  "image3": "SI_1614939286-415296347670790060.jpg",
	  "created": "2021-03-05 11:14:49"
	},
	{
	  "id": "4",
	  "published": true,
	  "category_id": "4",
	  "p_tok": "1690910646f2b555fcd198ad90c53b",
	  "sku": "127",
	  "title": "Red Analog Magazine Rack",
	  "product_badge": "sale",
	  "amount": 20000,
	  "sizes": "47,85,22,58,27,29,94,63,11",
	  "discount": "0",
	  "tags": "Magazine,World,Fashion,Beautify",
	  "body": "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "image1": "SI_1614939588-957868602701175449.jpg",
	  "image2": "SI_1614939597-356011444075287430.jpg",
	  "image3": "SI_1614939614-835600922146224364.jpg",
	  "created": "2021-03-05 11:20:18"
	},
	{
	  "id": "5",
	  "published": true,
	  "category_id": "5",
	  "p_tok": "b3092bbf2ede0801252b57d33562fd",
	  "sku": "127",
	  "title": "Black Chadwick Sandals",
	  "product_badge": "stock",
	  "amount": 7000,
	  "sizes": "19,42,22,92,35,74,57,84",
	  "discount": "0",
	  "tags": "Footwears,Beautify,Sandals,Fashion",
	  "body": "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "image1": "SI_1614939955-613515342346059643.jpg",
	  "image2": "SI_1614939964-963754615886278000.jpg",
	  "image3": "SI_1614939980-547434108835006751.jpg",
	  "created": "2021-03-05 11:26:35"
	},
	{
	  "id": "6",
	  "published": true,
	  "category_id": "6",
	  "p_tok": "a1aee936898228d0f3cabf0eab03a8",
	  "sku": "127",
	  "title": "Fawn Cotton Underwear",
	  "product_badge": "empty",
	  "amount": 2000,
	  "sizes": "SM,M,LG,XSM,XLG",
	  "discount": "0",
	  "tags": "underwears,Beauty",
	  "body": "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "image1": "SI_1614940369-874059315493643188.jpg",
	  "image2": "SI_1614940380-770817075525439321.jpg",
	  "image3": "SI_1614940385-434090161902206503.jpg",
	  "created": "2021-03-05 11:33:08"
	}
]

router.post("/login", async function(req, res, next) {
	try {
		let error = errors.login(req);
		if (error.length > 0){
			res.status(201).json(error);
			return;
		}
		const nwuser = await user.findOne({email: req.body.email});
		if (!nwuser) {
			res.status(201).json(['Invalid Email']);
			return;
		}
	    const hash = CryptoJS.AES.decrypt(nwuser['password'], process.env.CRYPTO);
	    const pwd = hash.toString(CryptoJS.enc.Utf8);
	    if (pwd !== req.body.password){
			res.status(201).json(['Invalid Password']);
			return;
		}else{
			const token = jwt.sign({
				id: nwuser.id,
				verified: nwuser.verified
			}, process.env.JWT);
			req.session.token = token;
			res.status(200).json({"status": true});
		}
	
	} catch (a){
		res.status(500).json({})
	}
})

router.post("/register", async function(req, res, next) {
	try {
		let error = errors.register(req.body);
		if (error.length > 0) {
			res.status(201).json(error)
			next();
		} else {
			const newUser = new user({
				surname: 'empty',
				name: req.body.firstname,
				email: req.body.email,
				day: 'empty',
				month: 'empty',
				year: 'empty',
				gender: 'empty',
				password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO).toString(),
			})
			var n = await newUser.save();
			const token = jwt.sign({
				id: n.id,
				verified: n.verified
			}, process.env.JWT);
			req.session.token = token;
			res.status(200).json({"status": true});
			next();
		}
	} catch (a){
		res.status(500).json({});
		next();
	}
})
router.post("/personal", async (req, res) => {
	if (!req.isAuthenticated) {
		res.status(400).json({});
		return;
	}
	try{
		let error = errors.personal(req.body);
		if (error.length > 0) {
			res.status(201).json(error)
			return;
		} 
		const token = jwt.verify(req.session.token, process.env.JWT);
		let update = await user.findOneAndUpdate({_id: token.id, ...req.body})
		if (!update) {
			res.status(201).json({"status": false});
			return;
		}
		res.status(201).json({"status": true});
	} catch(e){
		res.status(400).json({});
	}

})
router.get("/profile", async(req, res) => {
	if (!req.isAuthenticated) {
		res.status(400).json({"error": true});
		return;
	}
	try{
		const token = jwt.verify(req.session.token, process.env.JWT);
		let valid = await user.find({_id: token.id});
		if (!valid) {
			res.status(400).json({"error": true});
			return;
		}
		res.status(201).json({"data": valid});
	} catch(e){
		res.status(400).json({});
	}
})
router.get("/index", async (req, res) => {
	try {
		 let find = await product.find();
		 var array = [];
		 if (find.length < 1) {
			for (var i = 0, l = newProduct.length; l > i; i++) {
				let create = new product(newProduct[i])
				let add = create.save();
			}
		} 
		res.status(201).json({data: await product.find()});
	}catch(e){
		res.status(500).json();
	}
})
router.post("/quatity", async (req, res) => {
	try{
		const p = await cart.findOneAndUpdate({qty: req.body.num }).where({_id: req.body.id});
		if (p) {
			const total = await cart.findOneAndUpdate({total: p.amount * req.body.num}).where({_id: req.body.id});
			res.status(201).json({"status": true});
		} else {
			res.status(201).json({"status": false});
		}
	}catch(e){
		res.status(500).json({});
	} 
})
router.post("/size", async (req, res) => {
	try{
		const p = await cart.findOneAndUpdate({sizes: req.body.size}).where({_id: req.body.id});
		if (p) {
			res.status(201).json({"status": true});
		} else {
			res.status(201).json({"status": false});
		}
	}catch(e){
		res.status(500).json({});
	}
})
router.post("/deleteFavorite", async (req, res, next) => {
	try{
		let result = await favorite.findOneAndDelete({_id: req.body.id});
		if (!result) {
			res.status(201).json({status: 'error'});
			return true;
		}
		res.status(201).json({status: 'success'});
	}catch(e){
		res.status(500).json({});
	}
})
router.post("/changepassword", async (req, res) => {
	try{
		let error = await errors.changepassword(req.body, req.session.token);
		if (error.length > 0){
			res.status(201).json(error);
			return;
		}
		let result = await user.findOneAndUpdate({_id: req.body.id, password: CryptoJS.AES.encrypt(req.body.newpassword, process.env.CRYPTO).toString()});
		if (!result) {
			res.status(201).json({status: 'error'});
			return true;
		}
		res.status(201).json({status: 'success'});
	}catch(e){
		res.status(500).json({});
	}
})
router.post("/addFavorite", async (req, res, next) => {
	try{
		if (!req.isAuthenticated) {
			res.status(201).json({"error": true, "message": "You are not Authenticated"});
			return;
		}
		const token = jwt.verify(req.session.token, process.env.JWT);
		let valid = await favorite.findOne({p_tok: req.body.id, user_id: token.id});
		if (valid) {
			res.status(201).json({"error": true, "message": "Item Already Exist"});
			return;
		}
		const p = await product.findOne({p_tok: req.body.id});
		const newfavorite = new favorite({
			category_id: p.category_id,
			product_id: p.id,
			user_id: token.id,
			p_tok: p.p_tok,
			qty: 1,
			total: p.amount * 1,
			sku: p.sku,
			title: p.title,
			product_badge: p.product_badge,
			amount: p.amount,
			sizes: p.sizes,
			discount: p.discount,
			tags: p.tags,
			body: p.body,
			image1: p.image1,
			image2: p.image2,
			image3: p.image3,
		})
		const add = await newfavorite.save();
		res.status(201).json({"status": true, "message": "Added Successfully", "data": add});
	}catch(e){
		res.status(500).json({});
	}
})
router.get("/allCart", async (req, res, next) => {
	try{
		let arr = [],
		fav = [],
		prod = [],
		total = 0;
		if (req.isAuthenticated) {
			const token = jwt.verify(req.session.token, process.env.JWT);
			let fa = await favorite.find({user_id: token.id});
			if (fa) {
				fav.push(fa);
			}
		}
		for (var i = 0, l = req.session.cart.length; l > i; i++) {
			let result = await cart.findOne({_id: req.session.cart[i].id});
			if (result) {
				arr.push(result);
			}
		}
		 let find = await product.find();
		 var array = [];
		 if (find.length < 1) {
			for (var i = 0, l = newProduct.length; l > i; i++) {
				let create = new product(newProduct[i])
				let add = create.save();
			}
		} 
		arr.forEach((a) => {
			total += a.total;
		})
		res.status(201).json({data: arr, total: total, products: await product.find(), favorite: fav});
	}catch(e){
		res.status(500).json({})
	}
})
router.post("/deleteCart", async (req, res, next) => {
	try{
		let result = await cart.findOneAndDelete({_id: req.body.id});
		if (!result) {
			res.status(201).json({status: 'error'});
			return true;
		}
		res.status(201).json({status: 'success'});
	}catch(e){
		res.status(500).json({});
	}
})
router.get("/single/title/:title/token/:token", async (req, res, next) => {
	const title = req.params.title;
	const token = req.params.token;
	try{
		const p = await product.findOne({title: title, p_tok: token});
		res.status(201).json({data: p});
		next();
	}catch(e){
		res.status(500).json({});
		next();
	}
})
router.post("/addCart", async (req, res, next) => {
	let size = req.body.size;
	let token = req.body.token;
	try{
		const p = await product.findOne({p_tok: token});
		const newCart = new cart({
			category_id: p.category_id,
			product_id: p.id,
			user_id: 1,
			p_tok: p.p_tok,
			qty: 1,
			total: p.amount * 1,
			sku: p.sku,
			title: p.title,
			product_badge: p.product_badge,
			amount: p.amount,
			sizes: size,
			allsizes: p.sizes,
			discount: p.discount,
			tags: p.tags,
			body: p.body,
			image1: p.image1,
			image2: p.image2,
			image3: p.image3,
		})
		if (!req.session.cart || req.session.cart.length === 0) {
			const add = await newCart.save();
			req.session.cart = [];
			req.session.cart.push({id: add._id.valueOf(), product_id: add.product_id, p_tok: add.p_tok});
			res.status(201).json({success: "Cart Added"});
		} else {
			let find = req.session.cart.find((a) => a.p_tok === token);
			if (find) {
				res.status(201).json({error: "Cart Already Exist"});
				return;
			}
			const add = await newCart.save();
			req.session.cart.push({id: add._id.valueOf(), product_id: add.product_id, p_tok: add.p_tok});
			res.status(201).json({success: "Cart Added"});
		}
	}catch(e){
		res.status(500).json({});
	}
})

module.exports = router;