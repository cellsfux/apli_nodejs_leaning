require('dotenv').config();
const mongoose = require('mongoose')

//url databases from .env file
const urldata= process.env.DATABASE;


mongoose.connect("mongodb://localhost:27017/cellsflux_db_store", {useNewUrlParser: true})

mongoose.connection
.once('open', ()=>console.log('database is connected'))
.on('error', (error)=>{
    console.log(error);
})