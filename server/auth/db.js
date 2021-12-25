const app = require("express")();
const db = require("mongoose");
require("dotenv").config();
let conn = db.connect(process.env.MONGO_URL)
module.exports = conn;