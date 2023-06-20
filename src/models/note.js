const  mongoose  = require('mongoose')
const TaskSchema = mongoose.Schema({
    Task:{
        type : String,
        required: true
    },
    CategoryId:{
        type : String,
        required: true
    },
    Todo:{
        type : String,
        required: true
    },
    InProgress:{
        type: String,
        required:true
    },
    Done:{
        type: String,
        required:true
    },
    Starton:{
        type: Date,
        default:  Date.now(),
        required: true
    },
    Duration:{
        type: Number,
        required:true
    },   
    UserId :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }   

})

module.exports=mongoose.model('Note', TaskSchema);