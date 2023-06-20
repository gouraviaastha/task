const express = require("express");
const commonroute = express();
const bodyParser = require("body-parser");
commonroute.use(bodyParser.json());
commonroute.use(bodyParser.urlencoded({extended:true}));
const auth = require("../middleware/auth");
const countcontroller = require("../controller/countcontroller");
commonroute.get("/count",auth, countcontroller.datacount);

module.exports = commonroute;