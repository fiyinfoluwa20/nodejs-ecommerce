let app = require("express")();
let routes = require("./routes/routes");
let bodyParser = require('body-parser');
let db = require("./auth/db");
let cart = require("./models/cart");
let user = require("./models/user");
let session = require('express-session');
let jwt = require("jsonwebtoken");
let MongoDBStore = require('connect-mongodb-session')(session);
let connection = require("./auth/db")
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: 'sessions'
});
app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));
let verifyConnection = (req, res, next) => {
	connection.then(()=> {
		console.log('success');
		next();
	}).catch((e) => {
		console.log("error")
		res.writeHeader("text/html");
		res.end();
	})
}
const auth = async (req, res, next) => {
	if (!req.session.token) {
		req.isAuthenticated = false;
	} else {
		const token = jwt.verify(req.session.token, process.env.JWT);
		let find = await user.findOne({_id: token.id});
		if (find) {
			req.isAuthenticated = true;
		}
	}
	next();
}
app.use(async (req, res, next) => {
	// here is to ensure that the cart sessions is in the cart collection
	if (req.session.cart) {
		var arr = [];
		for (var i = 0, l = req.session.cart.length; l > i; i++) {
			let result = await cart.findOne({_id: req.session.cart[i].id});
			if (result) {
				arr.push({id: result._id.valueOf(), product_id: result.product_id, p_tok: result.p_tok});
			}
		}
		// update the cart session with the recent cart
		req.session.cart = arr;
	} else {
		req.session.cart = [];
	}
	next();
}, auth, routes);

app.listen(process.env.PORT);