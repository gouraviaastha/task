const Category = require("../models/category");
const addcategory = async (req, res) => {
    const { category } = req.body;
    const NewCategory = new Category({
        category: category
    });
    try {               
        const existingUser = await Category.findOne({category : category});
        if(existingUser){
            return res.status(400).json({message: "This category is already exist"});    
        }
        else
            {
                await NewCategory.save();
                res.status(201).json({NewCategory});   
            }
        }catch (error) {
        res.status(500).json({ message: "category not created" });
    }
}
const getcategory = async (req,res)=> {
    try{
        const categories = await Category.find({ });
        res.status(200).send({success: true, msg: 'categories ', data : categories})

    }catch(error){
        res.status(400).json({massage: "Some thing went wrong in get category"})
    }
}
module.exports = { addcategory , getcategory};