const mongoose = require('mongoose')
const myschema = mongoose.Schema({
    file:{
        type : String
    },
    structure:{
        type: String
    },
    userId:{
        type:String
    },
    logicpath:{
        type:String
    }
}, {timestamps : true});
module.exports = mongoose.model('file',myschema)