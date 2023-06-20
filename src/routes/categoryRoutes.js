const express = require('express');
 categoryRouter = express();
const bodyParder = require('body-parser');
categoryRouter.use(bodyParder.json());
categoryRouter.use(bodyParder.urlencoded({extended: true}));
const auth = require("../middleware/auth");
const categorycontroller = require("../controller/categorycontroller");
categoryRouter.post('/add-category', auth, categorycontroller.addcategory);
module.exports = {categoryRouter}
