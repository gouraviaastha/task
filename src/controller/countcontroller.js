const user = require("../models/user")
const category = require("../models/category")
const task = require("../models/note")

const datacount = async (req,res)=> {
    try{
        const user_data = await user.find().count();
        const category_data = await category.find().count();
        const task_data = await task.find().count();

        const count_data = {
            User: user_data,
            Category: category_data,
            Task: task_data
        }
        res.status(200).send({success: true,msg:"count of data", data: count_data} )

    }catch(error){
        res.status(400).send({success: failed, msg: error})
    }
}
module.exports =  {datacount}