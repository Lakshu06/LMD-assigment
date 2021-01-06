const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Name: { type: String,  required: true },
    Weight: { type: String, required: true },
    Height: { type: String, required: true },
    Sex: { type:String,required: true }

});


module.exports =User= mongoose.model('User', schema);
