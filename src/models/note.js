const  mongoose  = require('mongoose');

const NoteSchema = mongoose.Schema({
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
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }   

})

module.exports=mongoose.model('Note', NoteSchema);