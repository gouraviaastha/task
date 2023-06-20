const express = require('express');
const auth = require('../middleware/auth');
const { createNote, updateNote, deleteNote, getNotes } = require('../controller/notecontroller');
const noterouter = express.Router();

noterouter.post('/', auth,createNote)
noterouter.put('/:id', auth,updateNote)
noterouter.delete('/:id', auth,deleteNote)
noterouter.get('/', auth,getNotes)
module.exports = noterouter
