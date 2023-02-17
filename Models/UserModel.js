const mongoose = require('mongoose');


const Schema= mongoose.Schema;


const User= mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    prenom:{
        type: String,
        required: true,
    }
}, { timestamps: true })


const UserModel= mongoose.model('users', User);


module.exports= UserModel;