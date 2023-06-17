const express = require('express');
const userrouter = require('./routes/userRoutes.js');
const noterouter = require('./routes/noteRoutes.js');
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())
require('./db/conn.js');

app.use('/users',userrouter)
app.use('/note', noterouter)

app.get('/', (req, res)=>{
    res.send("hii hello");
});

app.listen(PORT, ()=> {
    console.log("your request is listen on port"+ PORT)
})