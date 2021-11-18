const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

});

const Students = mongoose.model("students",studentSchema);

module.exports = Students;