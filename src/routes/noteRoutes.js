const express = require('express');
const auth = require('../middleware/auth');
const rateLimit = require("express-rate-limit");
const { createNote, updateNote, deleteNote, getNotes } = require('../controller/notecontroller');
const noterouter = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 10,
    message: "Too much attempt Please try after 1 min"  
  })
noterouter.post('/', limiter,auth,createNote)
noterouter.put('/:id', auth,updateNote)
noterouter.delete('/:id', auth,deleteNote)
noterouter.get('/', auth,getNotes)
module.exports = noterouter
