const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   FoodName: { type: String,  required: true },
   ServingSize: { type: String, required: true },
    CaloriesperSerSize: { type: String, required: true },
    

});


module.exports =Food= mongoose.model('Food', schema);
