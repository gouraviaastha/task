const express = require("express");
const categoryRouter = express();
const bodyParser = require("body-parser");
categoryRouter.use(bodyParser.json());
categoryRouter.use(bodyParser.urlencoded({extended:true}));
const auth = require("../middleware/auth");
const categoryController = require("../controller/categorycontroller");
categoryRouter.post("/add",auth,categoryController.addcategory);
categoryRouter.get("/get-category",auth,categoryController.getcategory);

module.exports = categoryRouter;