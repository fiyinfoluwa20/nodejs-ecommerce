let jwt = require("jsonwebtoken");
let user = require("../models/user");
let CryptoJS = require("crypto-js");
class Err{
	constructor(){
		this.register = this.register
	}
	register(a) {
		let errors = [];
		if (a.firstname === '') {
	        errors.push("Firstname is required");
	    }
		if (a.email === '') {
	        errors.push("Email is required");
	    }
		if (a.password === '') {
	        errors.push("Password is required");
	    }else if (a.password.length < 2) {
	        errors.push("Password is too short it must be 7 characters long or more");
	    }else if (a.passwordC !== a.password) {
	        errors.push("Password do not match");
	    }
	    errors['error'] = true;
	    return errors;
	}
	login(a) {
		let errors = [];
		if (a.email === '') {
	        errors.push("Email is required");
	    }
		if (a.password === '') {
	        errors.push("Password is required");
	    }
	    errors['error'] = true;
	    return errors;
	}
	async changepassword(a, b) {
		let errors = [];
		if (a.password === '') {
	        errors.push("Password is required");
	    } else {
			const token = jwt.verify(b, process.env.JWT);
			let valid = await user.findOne({_id: token.id});
			if (!valid) {
		        errors.push("You Are Not Authorised");
		        return;
			}
		    const hash = CryptoJS.AES.decrypt(valid['password'], process.env.CRYPTO);
		    const pwd = hash.toString(CryptoJS.enc.Utf8);
		    if (pwd !== a.password) {
		        errors.push("Incorrect Password");
			}
	    }
		if (a.newpassword === '') {
	        errors.push("New Password is required");
	    } else if (a.newpassword.length < 2) {
	        errors.push("Password is too short it must be 7 characters long or more");
	    }else if (a.passwordConf !== a.newpassword) {
	        errors.push("Password do not match");
	    }
		if (a.passwordConf === '') {
	        errors.push("Confirm Password is required");
	    }
	    return errors;
	}
	personal(a) {
		let errors = [];
		if (a.name === '') {
	        errors.push("Firstname is required");
	    }
		if (a.email === '') {
	        errors.push("Email is required");
	    }
		if (a.surname === '') {
	        errors.push("Surname is required");
	    }
		if (a.day === '') {
	        errors.push("Day is required");
	    }
		if (a.month === '') {
	        errors.push("Month is required");
	    }
		if (a.year === '') {
	        errors.push("Year is required");
	    }
		if (a.gender === '') {
	        errors.push("Gender is required");
	    }
	    if (errors.length == 7) {
	    	errors = [];
	        errors.push("All fields are required");
	    }
	    return errors;
	}
}
module.exports = new Err()