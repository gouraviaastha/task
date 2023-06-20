const categoryModel = require('../models/category');

const addcategory = async (req,res)=>{
    try{
        const category = new categoryModel({
            category: req.body.category
        })

        const cat_data = await category.save();
        res.status(200).json({massage: "category added"},cat_data)
    }catch(error){
        res.status(400).json({massage : "Category not added"})
    }
}   
module.exports = {addcategory}