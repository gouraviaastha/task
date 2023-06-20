const noteModel = require("../models/note");

const createNote =async (req,res)=>{
    const {Todo,InProgress,Done,Duration,Starton} = req.body;
    const newNote = new noteModel({
    Todo : Todo,
    InProgress : InProgress,
    Done:Done,
    Starton:Date.now(),
    Duration:Duration,
    userId : req.userId})
    try{
        await newNote.save()
        res.status(201).json(newNote)
    }catch(error){
        console.log(error);
        res.status(500).json({massage: "Some thing went wrong"})
    }
}
const updateNote = async(req,res)=>{
    const id = req.params.id;
    const{Todo,InProgress,Done,Starton,Duration,Endon} = req.body;

    const newNote={
        Todo : Todo,
        InProgress : InProgress,
        Done:Done,
        Starton:Starton,
        Duration:Duration,
        userId : req.userId
    }
    try{
        await noteModel.findByIdAndUpdate(id, newNote, {new:true});
        res.status(200).json(newNote);
    }catch(error){
        console.log(error);
        res.status(500).json({massage: "Some thing went wrong"})   ;
    }
}
const deleteNote = async (req,res)=>{
    const id = req.params.id;
    try{
        const note = await noteModel.findByIdAndRemove(id);
        res.status(500).json(note)
    } catch(error){
        console.log(error)
        res.status(500).json({massage: "Some thing went wrong"})
    } 
} 
const getNotes = async (req,res)=>{
    try{
        const notes = await noteModel.find({userId:req.userId})
        res.status(201).json(notes)
        console.log(notes)
    }catch(error){
        console.log(error)
        res.status(500).json({massage: "Some thing went wrong"})
    }
    
}

module.exports = { createNote,updateNote,deleteNote,getNotes}